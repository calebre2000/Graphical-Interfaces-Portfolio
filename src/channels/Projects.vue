<template>
    <div class="screen" :class="{ 'grid-view': showGrid }">
        <!-- Top-left back button when grid is visible -->
        <button v-if="showGrid" class="back-button" @click="showGrid = false" aria-label="Back">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="15 6 9 12 15 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <template class="proje#cts-grid" v-if="showGrid">
            <ProjectsGrid @selectProject="currentProject = $event; showGrid = false" />
        </template>
        <div
            class="project-details"
            v-else
            :style="gradientStyle"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
        >
            <transition :name="transitionName" mode="out-in">
                <Card :key="currentProject" :project="projects[currentProject]" />
            </transition>
            <div class="button-container">
                <button @click="previousProject">◀ Previous</button>
                <button @click="showGrid = !showGrid" aria-label="Grid">
                    <img class="icon" src="../assets/grid.svg" alt="" />
                </button>
                <button @click="nextProject">Next ▶</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import Card from '../components/Card.vue';
import { projects } from './projects.js';
import { Channel } from './channels.ts';
import ProjectsGrid from './ProjectsGrid.vue';

const showGrid = ref(false)
const currentProject = ref(0);
const transitionName = ref('slide-left');
const touchStartX = ref(0);
const touchStartY = ref(0);
const touchActive = ref(false);
const numberOfProjects = computed(() => projects.length);

const rotateHue = (hex, degrees) => {
    if (!hex) return '#ffffff';
    
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const c = max - min;
    
    let h = 0;
    if (c !== 0) {
        if (max === r) h = ((g - b) / c + (g < b ? 6 : 0)) / 6;
        else if (max === g) h = ((b - r) / c + 2) / 6;
        else h = ((r - g) / c + 4) / 6;
    }
    
    const s = max === 0 ? 0 : c / max;
    const v = max;
    
    h = (h + degrees / 360) % 1;
    
    const c2 = v * s;
    const hp = h * 6;
    const x = c2 * (1 - Math.abs((hp % 2) - 1));
    const m = v - c2;
    
    let r2, g2, b2;
    if (hp < 1) { r2 = c2; g2 = x; b2 = 0; }
    else if (hp < 2) { r2 = x; g2 = c2; b2 = 0; }
    else if (hp < 3) { r2 = 0; g2 = c2; b2 = x; }
    else if (hp < 4) { r2 = 0; g2 = x; b2 = c2; }
    else if (hp < 5) { r2 = x; g2 = 0; b2 = c2; }
    else { r2 = c2; g2 = 0; b2 = x; }
    
    const toHex = (value) => {
        const hex = Math.round((value + m) * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r2)}${toHex(g2)}${toHex(b2)}`;
};

const gradientStyle = computed(() => {
    const color1 = projects[currentProject.value]?.color || '#ffffff';
    const color2 = rotateHue(color1, 25);
    
    return {
        background: `repeating-conic-gradient(${color1} 0 25%, ${color2} 0 50%) 50% / 80px 80px`
    };
});

const nextProject = () => {
    transitionName.value = 'slide-left';
    currentProject.value = (currentProject.value + 1) % numberOfProjects.value;
};

const previousProject = () => {
    transitionName.value = 'slide-right';
    currentProject.value = (currentProject.value - 1 + numberOfProjects.value) % numberOfProjects.value;
};

const onTouchStart = (e) => {
    if (showGrid.value) return;
    const touch = e.touches[0];
    touchStartX.value = touch.clientX;
    touchStartY.value = touch.clientY;
    touchActive.value = true;
};

const onTouchMove = (e) => {
    if (!touchActive.value || showGrid.value) return;
    const dx = e.touches[0].clientX - touchStartX.value;
    const dy = e.touches[0].clientY - touchStartY.value;
    if (Math.abs(dx) > Math.abs(dy)) e.preventDefault();
};

const onTouchEnd = (e) => {
    if (!touchActive.value || showGrid.value) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX.value;
    const dy = touch.clientY - touchStartY.value;
    const threshold = 50;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
        if (dx < 0) nextProject();
        else previousProject();
    }
    touchActive.value = false;
};
</script>
<style scoped>
@font-face {
    font-family: 'Sauce Tomato';
    src: url('../assets/Sauce Tomato.otf') format('opentype');
}

.screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.screen.grid-view {
    background: url('../assets/swirls.png');
}

.project-details {
    height: 100%;
    width: 100%;
}

/* Slide transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.slide-left-enter-from,
.slide-right-leave-to {
    transform: translateX(30%);
    opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
    transform: translateX(-30%);
    opacity: 0;
}

.slide-left-enter-to,
.slide-left-leave-from,
.slide-right-enter-to,
.slide-right-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.back-button {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 10;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-button .icon {
    width: 32px;
    height: 32px;
}

.button-container {
    position: absolute;
    width: 100%;
    bottom: 20px;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;
    display: flex;
}

.icon {
    width: 24px;
    height: 24px;
    display: block;
}

.arrow {
    font-size: 1.2rem;
    line-height: 1;
    align-self: center;
    color: var(--color-text);
}

.image-track {
    flex: 1;
    display: flex;
    gap: 5%;
    flex-direction: row;
    animation: scrollHorizontal 20s linear infinite;

    img {
        height: 100%;
        width: auto;
        max-height: 100vh;
        flex-shrink: 0;
        object-fit: contain;
    }
}


@keyframes scrollHorizontal {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-210%);
    }
}
</style>
