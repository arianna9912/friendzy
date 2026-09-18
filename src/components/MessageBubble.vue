<template>
  <div class="mb-row" :class="isOwn ? 'mb-own' : 'mb-other'">
    <div class="mb-avatar" :class="!showAvatar ? 'mb-avatar-hidden' : ''">
      <PremiumAvatar :src="avatar || ''" :name="senderName" size="sm" />
    </div>

    <div class="mb-max">
      <div class="mb-bubble" :class="isOwn ? 'mb-bubble-own' : 'mb-bubble-other'">
        <div v-if="message.audio" class="mb-audio">
          <div class="mb-audio-head">
            <button class="mb-audio-play" @click="togglePlay">
              <i :class="['mdi', playing ? 'mdi-pause' : 'mdi-play']"></i>
            </button>
            <div class="mb-audio-track">
              <div class="mb-audio-fill" :style="{ width: progress + '%' }"></div>
            </div>
            <span class="mb-audio-time">{{ durationLabel }}</span>
          </div>
          <audio ref="audioRef" :src="message.audio" preload="metadata" @timeupdate="onTime" @ended="onEnded"></audio>
        </div>
        <p v-else-if="message.text" class="mb-text">{{ message.text }}</p>
        <div v-else-if="message.image" class="mb-image">
          <img :src="message.image" alt="Compartida" draggable="false" @contextmenu.prevent @dragstart.prevent />
        </div>

        <div v-if="reactionList.length" class="mb-reactions" :class="isOwn ? 'mb-reactions-own' : ''">
          <button
            v-for="r in reactionList"
            :key="r.emoji"
            class="mb-react-chip"
            :class="{ mine: r.mine }"
            @click="toggleReaction(r.emoji)"
          >
            <span class="mb-react-emoji">{{ r.emoji }}</span>
            <span v-if="r.count > 1" class="mb-react-count">{{ r.count }}</span>
          </button>
        </div>

        <div class="mb-meta" :class="isOwn ? 'mb-meta-own' : ''">
          <button
            v-if="conversationId"
            class="mb-react-trigger"
            :class="{ active: pickerOpen }"
            :title="t('reaccionar')"
            @click.stop="pickerOpen = !pickerOpen"
          >
            <i class="mdi mdi-emoticon-plus-outline"></i>
          </button>
          <span>{{ timeLabel }}</span>
          <i v-if="isOwn" class="mdi mdi-check-all mb-check"></i>
        </div>

        <div v-if="pickerOpen" class="mb-react-picker" :class="isOwn ? 'mb-picker-own' : ''" @click.stop>
          <button
            v-for="e in EMOJIS"
            :key="e"
            class="mb-react-opt"
            @click="toggleReaction(e)"
          >
            {{ e }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db, auth } from '../firebase'
import { t } from '../i18n'
import PremiumAvatar from './PremiumAvatar.vue'

const props = defineProps({
  message: { type: Object, required: true },
  isOwn: { type: Boolean, default: false },
  showAvatar: { type: Boolean, default: true },
  avatar: { type: String, default: '' },
  senderName: { type: String, default: '' },
  conversationId: { type: String, default: '' },
})

const EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '🔥']

const audioRef = ref(null)
const playing = ref(false)
const progress = ref(0)
const pickerOpen = ref(false)

const myUid = computed(() => auth.currentUser?.uid || '')

const reactionList = computed(() => {
  const map = props.message.reactions || {}
  return Object.entries(map)
    .map(([emoji, uids]) => ({
      emoji,
      uidList: Array.isArray(uids) ? uids : [],
    }))
    .filter((r) => r.uidList.length > 0)
    .map((r) => ({
      emoji: r.emoji,
      count: r.uidList.length,
      mine: r.uidList.includes(myUid.value),
    }))
})

const toggleReaction = async (emoji) => {
  pickerOpen.value = false
  const uid = myUid.value
  if (!uid || !props.conversationId || !props.message.id) return
  const current = props.message.reactions?.[emoji] || []
  const has = Array.isArray(current) && current.includes(uid)
  try {
    await updateDoc(
      doc(db, 'conversations', props.conversationId, 'messages', props.message.id),
      { [`reactions.${emoji}`]: has ? arrayRemove(uid) : arrayUnion(uid) }
    )
  } catch (error) {
    console.log('reaction', error)
  }
}

const timeLabel = computed(() => {
  const seconds = props.message.time?.seconds ?? 0
  if (!seconds) return ''
  return new Date(seconds * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
})

const durationLabel = computed(() => {
  const total = props.message.duration || 0
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
})

const togglePlay = () => {
  const el = audioRef.value
  if (!el) return
  if (playing.value) {
    el.pause()
  } else {
    el.play().catch(() => {})
  }
  playing.value = !playing.value
}

const onTime = () => {
  const el = audioRef.value
  if (!el || !el.duration) return
  progress.value = (el.currentTime / el.duration) * 100
}

const onEnded = () => {
  playing.value = false
  progress.value = 0
}
</script>

<style scoped>
.mb-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.mb-own {
  flex-direction: row-reverse;
}

.mb-avatar-hidden {
  visibility: hidden;
}

.mb-max {
  position: relative;
  max-width: 75%;
}

@media (min-width: 768px) {
  .mb-max {
    max-width: 60%;
  }
}

.mb-bubble {
  position: relative;
  padding: 10px 16px 8px;
  animation: slide-up 0.25s ease-out;
}

.mb-bubble-own {
  background: var(--primary);
  color: #fff;
  border-radius: 16px 16px 4px 16px;
}

.mb-bubble-other {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px 16px 16px 4px;
}

.mb-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}

.mb-audio {
  min-width: 200px;
  max-width: 260px;
}

.mb-audio-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mb-audio-play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
}

.mb-audio-play .mdi {
  font-size: 18px;
}

.mb-bubble-other .mb-audio-play {
  background: var(--foreground);
  color: #fff;
}

.mb-audio-track {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: rgba(128, 128, 128, 0.3);
  overflow: hidden;
}

.mb-bubble-own .mb-audio-track {
  background: rgba(255, 255, 255, 0.35);
}

.mb-audio-fill {
  height: 100%;
  background: var(--primary);
  transition: width 0.2s linear;
}

.mb-bubble-own .mb-audio-fill {
  background: #fff;
}

.mb-audio-time {
  font-size: 11px;
  min-width: 20px;
  text-align: right;
}

.mb-audio audio {
  display: none;
}

.mb-image {
  position: relative;
  border-radius: 8px;
  margin: -4px;
}

.mb-image img {
  display: block;
  max-width: 100%;
  max-height: 256px;
  object-fit: contain;
  border-radius: 8px;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  user-select: none;
}

.mb-react-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: var(--muted-foreground);
  cursor: pointer;
  flex-shrink: 0;
  opacity: 0.55;
  transition: opacity 0.15s ease, background 0.15s ease;
}

.mb-react-trigger:hover,
.mb-react-trigger.active {
  opacity: 1;
  background: var(--secondary);
}

.mb-react-trigger .mdi {
  font-size: 14px;
}

.mb-bubble-own .mb-react-trigger {
  color: rgba(255, 255, 255, 0.85);
}

.mb-bubble-own .mb-react-trigger:hover,
.mb-bubble-own .mb-react-trigger.active {
  background: rgba(255, 255, 255, 0.18);
}

.mb-react-picker {
  position: absolute;
  bottom: calc(100% + 6px);
  right: 4px;
  z-index: 6;
  display: flex;
  gap: 2px;
  padding: 4px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  animation: scale-in 0.12s ease-out;
}

.mb-react-opt {
  border: none;
  background: transparent;
  font-size: 18px;
  line-height: 1;
  padding: 4px;
  border-radius: 9999px;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.15s ease;
}

.mb-react-opt:hover {
  transform: scale(1.2);
  background: var(--secondary);
}

.mb-reactions {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

.mb-reactions-own {
  justify-content: flex-end;
}

.mb-react-chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 7px;
  border: 1px solid var(--border);
  border-radius: 9999px;
  background: var(--secondary);
  cursor: pointer;
  transition: transform 0.1s ease, border-color 0.15s ease;
}

.mb-react-chip:hover {
  transform: translateY(-1px);
}

.mb-react-chip.mine {
  background: var(--primary-soft);
  border-color: var(--primary);
}

.mb-react-emoji {
  font-size: 13px;
  line-height: 1;
}

.mb-react-count {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted-foreground);
}

.mb-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  font-size: 10px;
}

.mb-meta-own {
  justify-content: flex-end;
}

.mb-bubble-own .mb-meta {
  color: rgba(255, 255, 255, 0.6);
}

.mb-bubble-other .mb-meta {
  color: var(--muted-foreground);
}

.mb-check {
  font-size: 12px;
}
</style>