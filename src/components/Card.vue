<template>
    <div class="card">
        <div class="content">
                <div class="title">{{ props.project?.title }}</div>

            <div class="image-wrapper">
                <img v-if="props.project?.image" :src="props.project.image" :alt="props.project?.title" />
                <span class="description" v-if="props.project?.description"
                    :style="{ backgroundColor: props.project?.color }">
                    {{ props.project.description }}
            </span>
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
@font-face {
    font-family: 'Sauce Tomato';
    src: url('../assets/Sauce Tomato.otf') format('opentype');
}

.card {
    height: 100%;
}

.content {
    padding: 2em 2em 5em 2em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .image-wrapper {
                border-radius: 8px;
        position: relative;
        flex: 1;
        min-height: 0;
        background-color: black;
    }
    
    img {
        object-fit:contain;
        border-radius: 8px;
        height: 100%;
        width: 100%;
    }

    .see-more {
        background: var(--color-pink-dark);
    }

    .see-more:hover {
        background: var(--color-pink);
    }
        .title {
            text-align: left;
            color: var(--color-background);
            font-size: 2rem;
            font-weight: 900;
            line-height: 1.4;
            /* text-transform: uppercase; */
            padding-right: 20%;
            font-family: 'Sauce Tomato', sans-serif;
            margin-bottom: 0.5em;
        }





        .description {
                    color: var(--color-dark);
            top: 10px;
            left: -20px;
            z-index: 2;
            position: absolute;
            padding: 0.5em;
            border: 1px solid var(--color-dark);
            box-shadow: 6px 8px 0 var(--color-dark);
            border-radius: 8px;
            font-size: 1em;
            font-weight: 400;
            max-width: 60%;
            font-family: sans-serif;
        
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

.year-badge:hover {
    animation: rotateCookie 4s linear infinite;
}
@keyframes rotateCookie {
    from {
        transform: rotate(-0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
