<template>
    <div class="grid-container">
        <div v-for="index in 6" :key="index" class="grid-item" @click="emit('selectProject', index - 1)">
            <div v-if="projects[index - 1]" class="item-image">
                <img :src="projects[index - 1].image" :alt="projects[index - 1].title" />
            </div>
            <div v-else class="item-placeholder">
                <span>Coming soon...</span>
            </div>
            <div v-if="projects[index - 1]" class="item-info">
                <h3>{{ projects[index - 1].title }}</h3>
                <p>{{ projects[index - 1].description }}</p>
            </div>
            <div v-else class="item-info item-placeholder-info">
                <h3>Project {{ index }}</h3>
                <p>Coming soon...</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { projects } from './projects.js';

const emit = defineEmits(['selectProject']);
</script>

<style scoped>
.grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1200px;
    height: 100%;
    overflow: auto;
    padding: 8%;
}

.grid-item {
    cursor: pointer;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 6px 8px 0 var(--color-dark);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s;
    min-height: 200px;
    min-width: 100px;
}

.grid-item:hover {
    transform: translateY(-4px);
    box-shadow: 6px 12px 0 var(--color-dark);
}

.item-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: var(--color-background);
}

.item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item-placeholder {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, var(--color-pink-light) 0%, var(--color-turquoise-light) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    font-weight: 700;
    text-align: center;
    padding: 20px;
}

.item-info {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.item-info h3 {
    margin: 0 0 8px 0;
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-dark);
}

.item-info p {
    margin: 0;
    font-size: 0.9rem;
    flex: 1;
    color: var(--color-dark);
}

.item-placeholder-info,
.item-info {
    background: linear-gradient(135deg, var(--color-pink-light) 0%, var(--color-turquoise-light) 100%);
    color: var(--color-white);
}

.item-placeholder-info h3,
.item-placeholder-info p {
    color: var(--color-white);
}

@media (max-width: 1000px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 720px) {
    .grid-container {
        grid-template-columns: 1fr;
    }

    .screen {
        padding: 20px;
    }
}
</style>
