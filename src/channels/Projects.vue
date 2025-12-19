<template>
    <div class="screen">
        <template class="proje#cts-grid" v-if="showGrid">
            <ProjectsGrid @selectProject="currentProject = $event; showGrid = false" />
        </template>
        <div class="project-details" v-else>
            <!-- <Card :header="projects[currentProject].title" :year="projects[currentProject].year"
                :imgSrc="projects[currentProject].image" :description="projects[currentProject].description">
            </Card> -->
            <div class="image-track">
                <img v-for="project in projects" :key="project.title" :src="project.image" :alt="project.title" />
                <img v-for="project in projects" :key="'duplicate-' + project.title" :src="project.image"
                    :alt="project.title" />
            </div>
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
const numberOfProjects = computed(() => projects.length);

const nextProject = () => {
    currentProject.value = (currentProject.value + 1) % numberOfProjects.value;
};

const previousProject = () => {
    currentProject.value = (currentProject.value - 1 + numberOfProjects.value) % numberOfProjects.value;
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
    background: url('../assets/swirls.png');
}

.project-details {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8%;
}

.button-container {
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
