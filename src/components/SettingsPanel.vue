<template>
  <div class="modal-backdrop" @click.self="emit('close')">
    <div class="modal-card">
      <div class="modal-head">
        <h3>{{ t('configuracion') }}</h3>
        <button class="icon-btn" @click="emit('close')">
          <i class="mdi mdi-close"></i>
        </button>
      </div>

      <div class="set-row">
        <div class="set-label">
          <i class="mdi mdi-translate"></i>
          <span>{{ t('idioma') }}</span>
        </div>
        <div class="set-opts">
          <button
            class="set-opt"
            :class="{ active: lang === 'es' }"
            @click="setLang('es')"
          >
            <span class="set-flag">🇪🇸</span>
            {{ t('espanol') }}
          </button>
          <button
            class="set-opt"
            :class="{ active: lang === 'en' }"
            @click="setLang('en')"
          >
            <span class="set-flag">🇺🇸</span>
            {{ t('english') }}
          </button>
        </div>
      </div>

      <div class="set-row">
        <div class="set-label">
          <i class="mdi mdi-palette-outline"></i>
          <span>{{ t('tema') }}</span>
        </div>
        <div class="set-opts">
          <button
            class="set-opt set-theme"
            :class="{ active: theme === 'naranja' }"
            @click="setTheme('naranja')"
          >
            <span class="swatch swatch-orange"></span>
            {{ t('naranja') }}
          </button>
          <button
            class="set-opt set-theme"
            :class="{ active: theme === 'azul' }"
            @click="setTheme('azul')"
          >
            <span class="swatch swatch-blue"></span>
            {{ t('azul') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { t, lang, setLang, theme, setTheme } from '../i18n'

defineEmits(['close'])
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
  max-width: 420px;
  background: var(--card);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  padding: 20px;
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

.set-row {
  padding: 14px 0;
  border-top: 1px solid var(--border);
}

.set-row:first-of-type {
  border-top: none;
}

.set-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 10px;
}

.set-label .mdi {
  color: var(--primary);
}

.set-opts {
  display: flex;
  gap: 8px;
}

.set-opt {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--secondary-50);
  font-size: 13px;
  font-weight: 500;
  color: var(--foreground);
  cursor: pointer;
  transition: all 0.15s ease;
}

.set-opt:hover {
  background: var(--secondary);
}

.set-opt.active {
  border-color: var(--primary);
  background: var(--primary-soft);
  color: var(--primary);
}

.set-flag {
  font-size: 16px;
}

.swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 0 1px var(--border);
}

.swatch-orange {
  background: linear-gradient(135deg, #ff8a1e, #ff5a00);
}

.swatch-blue {
  background: linear-gradient(135deg, #4da3ff, #0b5ed7);
}
</style>