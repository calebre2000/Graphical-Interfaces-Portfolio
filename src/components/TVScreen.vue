<template>
  <div
    class="outer-screen"
  >
    <!-- Screen Content -->
    <div
      class="inner-screen"
    >
      <transition name="channel" mode="out-in">
        <div :key="channel" class="channel">
          <component :is="currentComponent" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Channel } from "../channels/channels";
import About from "../channels/About.vue";
import Projects from "../channels/Projects.vue";
import Education from "../channels/Education.vue";
import Skills from "../channels/Skills.vue";

const props = defineProps({
  channel: String,
});

const currentComponent = computed(() => {
  switch (props.channel) {
    case Channel.ABOUT:
      return About;
    case Channel.PROJECTS:
      return Projects;
    case Channel.EDUCATION:
      return Education;
    case Channel.SKILLS:
      return Skills;
    default:
      return About;
  }
});
</script>

<style scoped>
.outer-screen {
  --inner-screen-color: #ffffff;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  background: #394c53;
  border-radius: 50px;
  border: 2px solid #6b6e73;
}

.inner-screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 70px;
  overflow: hidden;
  border: 4px solid black;
}

.inner-screen::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 60px;
  box-shadow:
    inset 0 0 90px color-mix(in srgb, var(--inner-screen-color) 20%, black),
    inset 0 0 20px 10px rgba(0, 0, 0, 0.25);
  pointer-events: none;
  z-index: 10;
}

.channel {
    width: 100%;
    height: 100%;
    background-color: var(--color-background, white);
}

.channel-enter-active,
.channel-leave-active {
  transition: opacity 0.15s;
}

.channel-enter-from,
.channel-leave-to {
  opacity: 0;
}
</style>
