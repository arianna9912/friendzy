<template>
  <div class="chat-main-wrap">
    <!-- Grid pattern background -->
    <div class="cm-grid"></div>

    <!-- Chat Header -->
    <header class="cm-header">
      <button class="icon-btn cm-menu-btn" @click="$emit('openDrawer')">
        <i class="mdi mdi-menu"></i>
      </button>

      <PremiumAvatar :src="other.photo || ''" :name="other.name" size="md" />

      <div class="cm-header-info">
        <h2>{{ other.name }}</h2>
        <p>
          <span class="cm-status-dot" :class="{ 'cm-status-offline': !otherOnline }"></span>
          {{ otherOnline ? t('en_linea') : t('desconectado') }}
        </p>
      </div>

      <div class="cm-header-actions">
        <div class="cm-menu">
          <button
            class="icon-btn"
            :class="{ active: menuOpen }"
            @click="menuOpen = !menuOpen"
          >
            <i class="mdi mdi-dots-horizontal"></i>
          </button>
          <div v-if="menuOpen" class="cm-pop">
            <button class="cm-pop-item" @click="onProfile">
              <i class="mdi mdi-account-circle-outline"></i>
              <span>{{ t('mi_perfil') }}</span>
            </button>
            <button class="cm-pop-item" @click="onToggleFav">
              <i :class="['mdi', isFavorite ? 'mdi-star' : 'mdi-star-outline']"></i>
              <span>{{ isFavorite ? t('quitar_fav') : t('ag_favoritos') }}</span>
            </button>
            <button class="cm-pop-item" @click="openPhotos">
              <i class="mdi mdi-image-multiple-outline"></i>
              <span>{{ t('fotos_compartidas') }}</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Messages Area -->
    <div v-if="message.length === 0" class="cm-empty">
      <i class="mdi mdi-chat-processing-outline cm-empty-icon"></i>
      <p>{{ t('no_mensajes') }}</p>
      <p class="cm-empty-sub">{{ t('envia_primero') }}</p>
    </div>

    <div v-else class="cm-list" ref="listRef">
      <div class="cm-date-pill">{{ t('hoy') }}</div>
      <MessageBubble
        v-for="(item, index) in message"
        :key="item.id"
        :message="item"
        :is-own="item.uid === userChat.uid"
        :show-avatar="index === 0 || message[index - 1]?.uid !== item.uid"
        :avatar="item.uid === userChat.uid ? userPhoto : other.photo"
        :sender-name="item.uid === userChat.uid ? userChat.displayName : other.name"
        :conversation-id="conversationId"
      />
    </div>

    <!-- Input Area -->
    <FormAdd v-if="conversationId" :conversation-id="conversationId" />

    <!-- Photos overlay -->
    <div v-if="photosOpen" class="cm-modal" @click.self="photosOpen = false">
      <div class="cm-photos">
        <div class="cm-photos-head">
          <h4>{{ t('fotos_compartidas') }}</h4>
          <button class="icon-btn" @click="photosOpen = false">
            <i class="mdi mdi-close"></i>
          </button>
        </div>
        <div v-if="photoList.length" class="cm-photos-grid">
          <img
            v-for="(m) in photoList"
            :key="m.id"
            :src="m.image"
            alt="Foto"
            draggable="false"
            @click="lightbox = m.image"
            @contextmenu.prevent
            @dragstart.prevent
          />
        </div>
        <p v-else class="cm-photos-empty">{{ t('sin_fotos') }}</p>
      </div>
    </div>

    <div v-if="lightbox" class="cm-lightbox" @click="lightbox = ''">
      <img :src="lightbox" alt="Foto" draggable="false" @contextmenu.prevent @dragstart.prevent />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, nextTick, computed } from 'vue'
import { db, auth } from '../firebase'
import { collection, query, orderBy, onSnapshot, doc } from 'firebase/firestore'
import { t } from '../i18n'
import { otherParticipantUid } from '../utils/chat'
import MessageBubble from './MessageBubble.vue'
import PremiumAvatar from './PremiumAvatar.vue'
import FormAdd from './FormAdd.vue'

const props = defineProps({
  conversationId: { type: String, required: true },
  other: { type: Object, default: () => ({}) },
  profile: { type: Object, default: () => ({}) },
  isFavorite: { type: Boolean, default: false },
})

const emit = defineEmits(['openDrawer', 'openProfile', 'toggleFavorite'])

const userChat = computed(() => ({
  uid: auth.currentUser?.uid || '',
  displayName:
    props.profile?.displayName || auth.currentUser?.displayName || auth.currentUser?.email || '',
}))
const userPhoto = computed(() => props.profile?.photoURL || auth.currentUser?.photoURL || '')
const message = ref([])
const listRef = ref(null)
const menuOpen = ref(false)
const photosOpen = ref(false)
const lightbox = ref('')
const otherOnline = ref(false)

const ONLINE_WINDOW = 25000

const photoList = computed(() => message.value.filter((m) => m.image))

const onProfile = () => {
  menuOpen.value = false
  emit('openProfile')
}

const onToggleFav = () => {
  menuOpen.value = false
  emit('toggleFavorite', props.conversationId)
}

const openPhotos = () => {
  menuOpen.value = false
  photosOpen.value = true
}

let unsub = null
let unsubOther = null

const listenOther = (id) => {
  unsubOther?.()
  unsubOther = null
  otherOnline.value = false
  if (!id) return
  const uid = otherParticipantUid(id, auth.currentUser?.uid || '')
  if (!uid) return
  unsubOther = onSnapshot(
    doc(db, 'users', uid),
    (d) => {
      const data = d.data() || {}
      otherOnline.value = !!(
        data.online &&
        data.lastSeen &&
        Date.now() - (data.lastSeen.toMillis?.() || 0) < ONLINE_WINDOW
      )
    },
    () => {}
  )
}

const listen = (id) => {
  if (unsub) {
    unsub()
    unsub = null
  }
  message.value = []
  if (!id) return

  const q = query(collection(db, 'conversations', id, 'messages'), orderBy('time'))
  unsub = onSnapshot(q, (snapshot) => {
    message.value = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
    nextTick(() => {
      const last = listRef.value?.lastElementChild
      if (last) last.scrollIntoView({ behavior: 'smooth', block: 'end' })
    })
  })
}

watch(
  () => props.conversationId,
  (id) => {
    listen(id)
    listenOther(id)
  },
  { immediate: true }
)

onUnmounted(() => {
  unsub?.()
  unsubOther?.()
})
</script>

<style scoped>
.chat-main-wrap {
  flex: 1;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  overflow: hidden;
}

.cm-grid {
  position: absolute;
  inset: 0;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.cm-grid {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
}

/* Header */
.cm-header {
  position: relative;
  z-index: 2;
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
  background: var(--card);
}

.cm-menu-btn {
  display: none;
}

.cm-header-info {
  flex: 1;
  min-width: 0;
}

.cm-header-info h2 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cm-header-info p {
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--muted-foreground);
  display: flex;
  align-items: center;
  gap: 4px;
}

.cm-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  display: inline-block;
}

.cm-status-offline {
  background: rgba(142, 142, 142, 0.6);
}

.cm-header-actions {
  display: flex;
  gap: 4px;
  position: relative;
}

.cm-header-actions .icon-btn {
  width: 36px;
  height: 36px;
}

.cm-header-actions .icon-btn.active {
  background: var(--secondary);
}

.cm-menu {
  position: relative;
}

.cm-pop {
  position: absolute;
  top: 44px;
  right: 0;
  z-index: 12;
  width: 220px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  padding: 4px;
  animation: scale-in 0.15s ease-out;
}

.cm-pop-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  font-size: 13px;
  color: var(--foreground);
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
}

.cm-pop-item:hover {
  background: var(--secondary);
}

.cm-pop-item .mdi {
  font-size: 16px;
  color: var(--primary);
}

.cm-modal {
  position: fixed;
  inset: 0;
  z-index: 55;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.cm-photos {
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  background: var(--card);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  animation: scale-in 0.2s ease-out;
}

.cm-photos-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.cm-photos-head h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--foreground);
}

.cm-photos-grid {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  overflow-y: auto;
  overflow-x: hidden;
}

.cm-photos-grid img {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  user-select: none;
}

.cm-photos-grid img:hover {
  transform: scale(1.03);
}

.cm-photos-empty {
  text-align: center;
  color: var(--muted-foreground);
  font-size: 14px;
  margin: 32px 0;
}

.cm-lightbox {
  position: fixed;
  inset: 0;
  z-index: 70;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  cursor: zoom-out;
}

.cm-lightbox img {
  max-width: 92vw;
  max-height: 90vh;
  border-radius: 8px;
}

@media (max-width: 767px) {
  .cm-menu-btn {
    display: flex;
  }
}

/* Messages list */
.cm-list {
  position: relative;
  z-index: 1;
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cm-date-pill {
  align-self: center;
  padding: 4px 12px;
  border-radius: 9999px;
  background: var(--secondary);
  font-size: 11px;
  font-weight: 500;
  color: var(--muted-foreground);
}

.cm-empty {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  text-align: center;
}

.cm-empty-icon {
  font-size: 64px;
  color: var(--primary);
}

.cm-empty p {
  font-size: 15px;
  font-weight: 500;
  margin: 16px 0 0;
}

.cm-empty-sub {
  font-size: 13px;
  margin: 4px 0 0;
}
</style>