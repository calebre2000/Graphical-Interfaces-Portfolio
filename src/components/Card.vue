<template>
    <div class="card">
        <div class="content">
            <div class="right">
                <div class="title">{{ props.project?.title }}</div>
                <div class="description" v-if="props.project?.description" 
                     :style="{ backgroundColor: props.project?.color }">
                    {{ props.project.description }}
                </div>
            </div>
            <div class="left">
                <img v-if="props.project?.image" :src="props.project.image" :alt="props.project?.title" />
                    <div class="year-badge" v-if="props.project?.year">
            <div>{{ props.project.year.substring(0, 2) }}</div>
            <div>{{ props.project.year.substring(2) }}</div>
        </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['seeMore']);
const props = defineProps({
    project: { type: Object, default: null },
});

const lightenColor = (hex) => {
    if (!hex) return '#ffffff';
    
    hex = hex.replace('#', '');
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    const newR = Math.min(255, Math.round(r + (255 - r) * (60 / 100)));
    const newG = Math.min(255, Math.round(g + (255 - g) * (60 / 100)));
    const newB = Math.min(255, Math.round(b + (255 - b) * (60 / 100)));
    
    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
};
</script>

<style scoped>
.card {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
}

.content {
    padding: 2em 2em 5em 2em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-content: center;

    .left {
        flex: 3;
        display: flex;
        flex-direction: column;
        gap: 12px;
        position: relative;
    }

    img {
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    .see-more {
        background: var(--color-pink-dark);
    }

    .see-more:hover {
        background: var(--color-pink);
    }

    .right {
        text-align: left;
        align-content: center;
        color: var(--color-dark);
        position: relative;

        .title {
            color: var(--color-background);
            font-size: 2.5rem;
            font-weight: 900;
            line-height: 1;
            text-transform: uppercase;
            padding-right: 20%;
            
        }

        .description {
            font-size: 1em;
            bottom: -10px;
            left: -20px;
            z-index: 2;
            transform: translateY(100%);
            position: absolute;
            padding: 0.5em;
            box-shadow: 4px 6px 0 var(--color-dark);
        }
    }
}

@font-face {
    font-family: 'Sauce Tomato';
    src: url('../assets/Sauce Tomato.otf') format('opentype');
}

.year-badge {
    min-width: 120px;
    position: absolute;
        top: -1em;
    right: -1em;

    z-index: 3;
    font-family: 'Sauce Tomato', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.2;
    padding: 20px;
    text-align: center;
    color: var(--color-white);
    background: var(--color-yellow-dark);
    mask-image: url('../assets/cookie.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
}
</style>
