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
import About from "../channels/About.vue";
import Projects from "../channels/Projects.vue";

const props = defineProps({
  channel: Number,
});

const currentComponent = computed(() => {
  switch (props.channel) {
    case 1:
      return About;
    case 2:
      return Projects;
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
  padding: 10px;
  background: black;
  border-radius: 70px;
}

.inner-screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 60px;
  background: radial-gradient(
    130% 120% at 50% 44%, 
    var(--inner-screen-color) 0%, 
    color-mix(in srgb, var(--inner-screen-color) 70%, black) 55%, 
    color-mix(in srgb, var(--inner-screen-color) 40%, black) 100%
  );
  overflow: hidden;
}

.inner-screen::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 60px;
  box-shadow:
    inset 0 0 90px color-mix(in srgb, var(--inner-screen-color) 20%, black),
    inset 0 0 0 14px rgba(255, 255, 255, 0.02);
  pointer-events: none;
  z-index: 10;
}

.channel {
    width: 100%;
    height: 100%;
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
