<template>
  <div class="modal-backdrop" @click.self="emit('close')">
    <div class="modal-card">
      <div class="modal-head">
        <h3>{{ t('mi_perfil') }}</h3>
        <button class="icon-btn" @click="emit('close')">
          <i class="mdi mdi-close"></i>
        </button>
      </div>

      <div class="prof-avatar-wrap">
        <PremiumAvatar :src="photoPreview" :name="alias || '?'" size="xl" />
        <button class="prof-photo-btn" @click="pickPhoto">
          <i class="mdi mdi-camera-outline"></i>
          <span>{{ t('cambiar_foto') }}</span>
        </button>
        <input ref="photoInput" type="file" accept="image/*" class="hidden" @change="onPhoto" />
      </div>

      <div class="field">
        <label>{{ t('alias') }}</label>
        <input v-model="alias" type="text" :placeholder="t('alias_ph')" />
      </div>

      <div class="field">
        <label>{{ t('cumpleanos') }}</label>
        <input v-model="birthday" type="date" />
      </div>

      <button class="save-btn btn-primary" type="button" :disabled="saving" @click="save">
        <span>{{ saving ? t('cargando') : t('guardar') }}</span>
      </button>

      <p v-if="saved" class="saved-note">
        <i class="mdi mdi-check-circle"></i>
        {{ t('guardado') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { doc, setDoc } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import { db, auth } from '../firebase'
import PremiumAvatar from './PremiumAvatar.vue'
import { t } from '../i18n'

const props = defineProps({
  profile: { type: Object, default: () => ({}) },
})

const emit = defineEmits(['close'])

const alias = ref('')
const birthday = ref('')
const photoURL = ref('')
const photoPreview = ref('')
const photoInput = ref(null)
const saving = ref(false)
const saved = ref(false)

watch(
  () => props.profile,
  (p) => {
    if (!p || typeof p !== 'object') return
    alias.value = p.displayName || ''
    birthday.value = p.birthday || ''
    photoURL.value = p.photoURL || ''
    photoPreview.value = p.photoURL || ''
  },
  { immediate: true }
)

const pickPhoto = () => {
  photoInput.value?.click()
}

const onPhoto = async (e) => {
  const file = e.target.files?.[0]
  e.target.value = ''
  if (!file) return
  const dataUrl = await resizeImage(file)
  if (dataUrl) {
    photoURL.value = dataUrl
    photoPreview.value = dataUrl
  }
}

const resizeImage = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const MAX = 512
        const scale = Math.min(1, MAX / Math.max(img.naturalWidth, img.naturalHeight))
        const width = Math.max(1, Math.round(img.naturalWidth * scale))
        const height = Math.max(1, Math.round(img.naturalHeight * scale))
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        if (!ctx) return resolve(reader.result)
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, width, height)
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', 0.8))
      }
      img.onerror = () => resolve(null)
      img.src = reader.result
    }
    reader.onerror = () => resolve(null)
    reader.readAsDataURL(file)
  })

const save = async () => {
  const user = auth.currentUser
  if (!user) return
  saving.value = true
  try {
    const data = {
      displayName: alias.value.trim() || user.email?.split('@')[0] || 'Usuario',
      photoURL: photoURL.value || '',
      birthday: birthday.value || '',
    }
    await setDoc(doc(db, 'users', user.uid), data, { merge: true })
    await updateProfile(user, { displayName: data.displayName, photoURL: data.photoURL }).catch(
      () => {}
    )
    saved.value = true
    setTimeout(() => emit('close'), 600)
  } catch (error) {
    console.log(error)
  } finally {
    saving.value = false
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal-card {
  width: 100%;
  max-width: 400px;
  background: var(--card);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
  animation: scale-in 0.2s ease-out;
}

.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.modal-head h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--foreground);
  margin: 0;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--muted-foreground);
  cursor: pointer;
}

.icon-btn:hover {
  background: var(--secondary);
}

.prof-avatar-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.prof-photo-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  color: var(--primary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 6px;
}

.prof-photo-btn:hover {
  background: var(--primary-soft);
}

.hidden {
  display: none;
}

.field {
  margin-bottom: 12px;
}

.field label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--foreground);
  margin-bottom: 6px;
}

.field input {
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border-radius: 8px;
  background: var(--secondary-50);
  border: 1px solid var(--border);
  color: var(--foreground);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.field input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--ring);
}

.save-btn {
  width: 100%;
  height: 44px;
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.save-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.saved-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 12px 0 0;
  font-size: 13px;
  color: #22c55e;
}

.saved-note .mdi {
  font-size: 16px;
}
</style>