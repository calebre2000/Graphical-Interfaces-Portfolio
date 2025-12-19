<template>
  <div class="outer">
    <div class="button-panel">
      <div class="button-container">
        <div class="button-row">
          <span class="led" :class="{ active: currentChannel === Channel.ABOUT }"></span>
          <button @click="$emit('changeScreen', Channel.ABOUT)" :class="{ active: currentChannel === Channel.ABOUT }" class="tv-button"></button>
          <div class="button-label">About</div>
        </div>
        <div class="button-row">
          <span class="led" :class="{ active: currentChannel === Channel.PROJECTS }"></span>
          <button @click="$emit('changeScreen', Channel.PROJECTS)" :class="{ active: currentChannel === Channel.PROJECTS }" class="tv-button"></button>
          <div class="button-label">Projects</div>
        </div>
        <div class="button-row">
          <span class="led" :class="{ active: currentChannel === Channel.EDUCATION }"></span>
          <button @click="$emit('changeScreen', Channel.EDUCATION)" :class="{ active: currentChannel === Channel.EDUCATION }" class="tv-button"></button>
          <div class="button-label">Education</div>
        </div>
        <div class="button-row">
          <span class="led" :class="{ active: currentChannel === Channel.SKILLS }"></span>
          <button @click="$emit('changeScreen', Channel.SKILLS)" :class="{ active: currentChannel === Channel.SKILLS }" class="tv-button"></button>
          <div class="button-label">Skills</div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
  <div>

  </div>
</template>

<script setup>
import { Channel } from "../channels/channels";

defineProps({
  currentChannel: {
    type: String,
    required: true
  }
});

defineEmits(['changeScreen']);
</script>
<style scoped>
.outer {
  border-radius: 20px;
  width: 20%;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  background-color: #838582;
  padding: 4px;
}

.button-panel {
  width: 100%;
  flex: 1;
  display: flex;
  background-color: rgb(39, 39, 39);
  border-radius: 20px;
  box-shadow:
    inset 0 6px 14px rgba(0, 0, 0, 0.55),
    inset 0 -4px 10px rgba(255, 255, 255, 0.06);
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.button-row {
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 12px;
}

.tv-button {
  margin-right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #5a5a5a 0%, #4a4a4a 30%, #3a3a3a 70%, #2a2a2a 100%);
  border: 1px solid #1a1a1a;
  cursor: pointer;
  box-shadow:
    0 4px 8px 2px rgba(0, 0, 0, 0.8),
    0 6px 12px rgba(0, 0, 0, 0.9),
    0 -4px 6px rgba(120, 120, 120, 0.25),
    0 -6px 5px rgba(140, 140, 140, 0.15),
    inset 0 1px 2px rgba(200, 200, 200, 0.15),
    inset 0 -2px 3px rgba(0, 0, 0, 0.6);
  transition: all 200ms ease;
  user-select: none;
}

.tv-button:hover:not(:active),
button:focus {
  outline: none;
  box-shadow:
    0 3px 6px 1px #1a1a1a,
    0 5px 10px #0a0a0a,
    0 -3px 5px #424242,
    inset 0 0 3px 3px #3b3b3b;
}

.bottom {
  width: 100%;
  flex: 0 0 auto;
  height: 142px;
  min-height: 140px;
  margin-top: 16px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  background: transparent;
}

.bottom::before {
  content: "";
  position: absolute;
  inset: 14px 8px;
  background: repeating-linear-gradient(to bottom,
      rgba(16, 16, 16, 0.9) 0px,
      rgba(16, 16, 16, 0.9) 4px,
      transparent 4px,
      transparent 10px);
  border-radius: 10px;
  box-shadow:
    inset 0 1px 2px rgba(255, 255, 255, 0.12),
    inset 0 -1px 2px rgba(0, 0, 0, 0.35);
}

.tv-button:active {
  transform: scale(0.95);
}

.tv-button.active {
  box-shadow:
    0 3px 6px 1px #1a1a1a,
    0 5px 10px #0a0a0a,
    0 -3px 5px #424242,
    inset 0 0 3px 3px #3b3b3b,
    0 0 10px rgba(255, 0, 0, 0.4);
}

.led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #585858;
  border: 1px solid #2a2a2a;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.6);
  transition: all 300ms ease;
  margin-right: 8px;
}

.led.active {
  background: radial-gradient(circle at 30% 30%, #ff6b6b 0%, #ff2020 40%, #cc0000 70%, #8b0000 100%);
  box-shadow:
    0 0 8px rgba(255, 0, 0, 0.8),
    0 0 12px rgba(255, 0, 0, 0.5),
    inset 0 1px 2px rgba(255, 150, 150, 0.4);
}

.led:has(+ .tv-button:focus) {
  background: radial-gradient(circle at 30% 30%, #ff6b6b 0%, #ff2020 40%, #cc0000 70%, #8b0000 100%);
  box-shadow:
    0 0 8px rgba(255, 0, 0, 0.8),
    0 0 12px rgba(255, 0, 0, 0.5),
    inset 0 1px 2px rgba(255, 150, 150, 0.4);
}

.button-label {
  color: #beb8a8;
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  text-shadow:
    1px 1px 1px rgba(0, 0, 0, 1);
  user-select: none;
}
</style>