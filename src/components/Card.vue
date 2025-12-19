<template>
    <div class="card">
        <div v-if="props.header" class="header">{{ props.header }}</div>
        <div class="year-badge" v-if="props.year">
            <div>{{ props.year.substring(0, 2) }}</div>
            <div>{{ props.year.substring(2) }}</div>
        </div>
        <div class="content">
            <slot></slot>
            <div class="left">
                <div class="image-wrapper">
                    <img v-if="props.imgSrc" :src="props.imgSrc" :alt="props.imgAlt" />
                </div>
                <div class="actions">
                    <button class="see-more" type="button" @click="emit('seeMore')">See more</button>
                </div>
            </div>
            <div class="right">
                <p v-if="props.description">{{ props.description }}</p>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['seeMore']);
const props = defineProps({
    header: { type: String, default: '' },
    imgSrc: { type: String, default: '' },
    imgAlt: { type: String, default: '' },
    description: { type: String, default: '' },
    year: { type: String, default: '2025' }
});
</script>

<style scoped>
.card {
    flex: 1;
    border-radius: 2px;
    box-shadow: 10px 15px 0 var(--color-dark);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
}

.header {
    background: linear-gradient(135deg, var(--color-turquoise-light) 0%, var(--color-pink-light) 100%);
    font-size: 1.25rem;
    font-weight: bold;
    padding: 12px 80px 12px 16px;
    color: var(--color-dark);
    border-bottom: 1px solid var(--color-dark);
    text-align: left;
}

.content {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    height: 100%;
    align-content: center;

    .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .image-wrapper img {
        display: block;
        width: 100%;
        height: auto;
        width: 100%;
    }

    .see-more {
        background: var(--color-pink-dark);
    }

    .see-more:hover {
        background: var(--color-pink);
    }

    .right {
        flex: 1;
        align-content: center;
        color: var(--color-dark)
    }
}


@media (max-width: 1000px) {
    .content {
        flex-direction: column;

        
        .right {
            align-content: flex-start;
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
    top: -20px;
    right: -40px;
    z-index: 1;
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
