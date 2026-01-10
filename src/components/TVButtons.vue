<template>
  <div class="outer">
    <div class="button-panel">
      <div class="button-container">
        <div class="buttons-wrapper">
          <div class="button-row">
            <span class="led" :class="{ active: currentChannel === Channel.ABOUT }"></span>
            <button @click="$emit('changeScreen', Channel.ABOUT)" :class="{ active: currentChannel === Channel.ABOUT }"
              class="tv-button"></button>
            <div class="button-label">About</div>
          </div>
          <div class="button-row">
            <span class="led" :class="{ active: currentChannel === Channel.PROJECTS }"></span>
            <button @click="$emit('changeScreen', Channel.PROJECTS)"
              :class="{ active: currentChannel === Channel.PROJECTS }" class="tv-button"></button>
            <div class="button-label">Projects</div>
          </div>
          <div class="button-row">
            <span class="led" :class="{ active: currentChannel === Channel.SKILLS }"></span>
            <button @click="$emit('changeScreen', Channel.SKILLS)"
              :class="{ active: currentChannel === Channel.SKILLS }" class="tv-button"></button>
            <div class="button-label">Skills</div>
          </div>
          <div class="button-row">
            <span class="led" :class="{ active: currentChannel === Channel.CV }"></span>
            <button @click="$emit('changeScreen', Channel.CV)" :class="{ active: currentChannel === Channel.CV }"
              class="tv-button"></button>
            <div class="button-label">CV</div>
          </div>
        </div>
        <div class="social-buttons">

          <button class="social-button" aria-label="Email" @click="openEmail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </button>
          <button class="social-button" aria-label="LinkedIn" @click="openLinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
              </path>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <div class="bottom"></div>
    <div class="sliders-wrapper">
      <div class="slider-row">
        <div class="slider-plate" aria-hidden="true">
          <div class="slider-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 16H16V6Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="slider-trough">
          <input class="slider" type="range" min="0" max="100" :value="volume" @change="handleVolumeChange" aria-label="Volume" />
        </div>
      </div>

      <div class="slider-row">
        <div class="slider-plate" aria-hidden="true">
          <div class="slider-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2" />
              <path
                d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
          </div>
        </div>
        <div class="slider-trough">
          <input class="slider" type="range" min="20" max="100" value="90" :value="brightness" @change="handleBrightnessChange" aria-label="Brightness" />
        </div>
      </div>
    </div>
    <audio ref="audioPlayer" loop></audio>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { Channel } from "../channels/channels";

const brightness = ref(90);
const volume = ref(0);
const audioPlayer = ref(null);
const currentTrack = ref(0);
const tracks = [
  new URL('../assets/September.mp3', import.meta.url).href,
  new URL('../assets/groove.mp3', import.meta.url).href
];

defineProps({
  currentChannel: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['changeScreen', 'updateBrightness']);

onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.src = tracks[currentTrack.value];
    // Switch to next track when current ends
    audioPlayer.value.addEventListener('ended', () => {
      currentTrack.value = (currentTrack.value + 1) % tracks.length;
      audioPlayer.value.src = tracks[currentTrack.value];
      if (volume.value > 0) {
        audioPlayer.value.play();
      }
    });
  }
});

const handleVolumeChange = (event) => {
  volume.value = event.target.value;
  
  if (audioPlayer.value) {
    const volumeLevel = volume.value / 100;
    audioPlayer.value.volume = volumeLevel;
    
    // Play music if volume > 0 and not already playing
    if (volume.value > 0 && audioPlayer.value.paused) {
      audioPlayer.value.play();
    }
    // Stop music if volume is 0
    else if (volume.value === 0 && !audioPlayer.value.paused) {
      audioPlayer.value.pause();
    }
  }
};

const handleBrightnessChange = (event) => {
  brightness.value = event.target.value;
  emit('updateBrightness', brightness.value);
};

const openEmail = () => {
  window.location.href = 'mailto:gusbrennca@student.gu.se';
};

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/carla-brenner-25655a39b', '_blank');
};
</script>
<style scoped>
.outer {
  border-radius: 20px;
  width: 20%;
  min-width: 100px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  background-color: #838582;
  padding: 6px;
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
  justify-content: space-evenly;
  flex: 1;
}

.buttons-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  align-self: start;
}

.button-row {
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 12px;
}

.slider-row {
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
  background-color: #0a0a0a;
  padding: 4px;
  border-radius: 8px;
  box-shadow:
    inset 0 -2px 4px #f8f9f8
}

.slider-plate {
  width: 42px;
  height: 40px;
  border-radius: 6px;
  background: linear-gradient(180deg, #9a9a98 0%, #7a7a78 10%, #6a6a68 100%);
  border: 1px solid #5a5a58;
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.15),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3),
    0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-icon {
  width: 24px;
  height: 24px;
  color: #beb8a8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-trough {
  flex: 1;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(180deg, #8a8a88 0%, #7a7a78 10%, #6a6a68 100%);
  border: 1px solid #5a5a58;
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3),
    0 2px 5px rgba(0, 0, 0, 0.3);
  padding: 8px 12px;
  display: flex;
  align-items: center;
}

.slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  background: linear-gradient(180deg, #1b1b1b, #0f0f0f);
  border-radius: 6px;
  border: 1px solid #0a0a0a;
  box-shadow:
    inset 0 1px 2px rgba(255, 255, 255, 0.05),
    inset 0 -1px 2px rgba(0, 0, 0, 0.55);
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 26px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(180deg, #e1dbcb, #beb8a8 65%, #7e7e7e);
  border: 1px solid #0f0f0f;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.6),
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.35);
}

.slider::-moz-range-thumb {
  width: 26px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(180deg, #f6f6f6, #d9d9d9 65%, #b0b0b0);
  border: 1px solid #0f0f0f;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.6),
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.35);
}

.sliders-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 16px 0;
  width: 100%;

  padding: 4px;
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

.social-buttons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.social-button {
  width: 70px;
  height: 50px;
  border-radius: 4px;
  background: linear-gradient(to bottom, #5a5a5a 0%, #4a4a4a 10%, #3a3a3a 80%, #2a2a2a 100%);
  border: 1px solid #1a1a1a;
  cursor: pointer;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.6),
    0 3px 6px rgba(0, 0, 0, 0.9),
    0 -4px 6px rgba(120, 120, 120, 0.25),
    inset 0 1px 2px rgba(200, 200, 200, 0.15),
    inset 0 -2px 3px rgba(0, 0, 0, 0.6);
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #beb8a8;
}

.social-button svg {
  width: 28px;
  height: 28px;
}

.social-button:hover {
  color: var(--color-turquoise-light);
}

.social-button:active {
  transform: scale(0.95);
}
</style>