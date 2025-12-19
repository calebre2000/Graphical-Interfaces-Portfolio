<template>
    <div class="screen">
        <div class="timeline">
            <div class="timeline-item" v-for="(item, index) in items" :key="index" :class="item.type">
                <div class="year-badge">{{ item.year }}</div>
                <div class="content-card">
                    <div class="card-icon" :style="{ background: item.color }">{{ item.icon }}</div>
                    <h2>{{ item.title }}</h2>
                    <h3>{{ item.subtitle }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        year: '2025',
        title: 'University of Gothenburg',
        subtitle: 'Erasmus Computer Science',
        description: 'Studying UI/UX Design and modern web technologies',
        icon: '🎓',
        color: 'var(--color-turquoise-light)',
        type: 'education'
    },
    {
        year: '2024',
        title: 'University of Ulm',
        subtitle: 'Master Media Informatics',
        description: 'Studying Software Engineering, Human-Computer Interaction, and Advanced Web Technologies',
        icon: '🎓',
        color: 'var(--color-turquoise-light)',
        type: 'education'
    },
    {
        year: '2023',
        title: 'Software Developer',
        subtitle: 'Head-on Solutions GmbH, Nürnberg',
        description: 'Built responsive web apps with Vue.js and collaborated on UI improvements',
        icon: '💼',
        color: 'var(--color-yellow)',
        type: 'work'
    },
    {
        year: '2021',
        title: 'Working Student Software Development',
        subtitle: 'IT-Labs GmbH, Fürth',
        description: 'Built responsive web apps with Angular',
        icon: '💼',
        color: 'var(--color-yellow)',
        type: 'work'
    },
    {
        year: '2019',
        title: 'TH Nürnberg',
        subtitle: 'Bachelor Media Engineering',
        description: 'Studying Software Engineering, Human-Computer Interaction, and Advanced Web Technologies',
        icon: '🎓',
        color: 'var(--color-turquoise-light)',
        type: 'education'
    },
    {
        year: '2019',
        title: 'Work and Travel',
        subtitle: 'Vancouver, Canada',
        description: 'Worked in food service',
        icon: '🧳',
        color: 'var(--color-pink-light)',
        type: 'work'
    },
    {
        year: '2018',
        title: 'Sales Assistant in a Bakery',
        subtitle: 'K&U Bäckerei, Karlsruhe',
        description: 'Worked in food service',
        icon: '💼',
        color: 'var(--color-yellow)',
        type: 'work'
    },
    {
        year: '2018',
        title: 'Helmholtz Gymnasium Karlsruhe',
        subtitle: 'Abitur',
        description: 'Specialization in Science and Art',
        icon: '📚',
        color: 'var(--color-red-light)',
        type: 'education'
    }
]);
</script>

<style scoped>
@font-face {
    font-family: 'Sauce Tomato';
    src: url('../assets/Sauce Tomato.otf') format('opentype');
}
@font-face {
    font-family: 'Moliga';
    src: url('../assets/Moliga DEMO.otf') format('opentype');
}
@font-face {
    font-family: 'Gladolia';
    src: url('../assets/GladoliaDEMO-Regular.otf') format('opentype');
}
.screen {
    width: 100%;
    height: 100%;
    padding: 6% 8%;
    overflow-y: auto;
    background: linear-gradient(135deg, var(--color-pink-light) 0%, var(--color-turquoise-light) 100%);

}

.timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 60px;
    top: 0;
    bottom: 0;
    width: 4px;
    background-image: repeating-linear-gradient(180deg, var(--color-white) 0px, var(--color-white) 8px, transparent 8px, transparent 16px);
}

.timeline-item {
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
    position: relative;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.year-badge {
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
   font-family: 'Sauce Tomato', 'Arial', sans-serif;
    color: var(--color-red);
    font-weight: 800;
    text-shadow: 2px 2px 0 var(--color-white), 4px 4px 0 var(--color-pink-light);
    font-size: 2rem;
    font-weight: 900;
    position: relative;
    z-index: 2;
}

.content-card {
    flex: 1;
    box-shadow: 10px 15px 0 var(--color-dark);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    padding: 30px;
    box-shadow: 8px 8px 0 var(--color-dark);
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: left;
}

.timeline-item:hover .content-card {
    transform: translateY(-4px);
    box-shadow: 10px 12px 0 var(--color-dark);
}

.card-icon {
    position: absolute;
    top: -15px;
    right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    border: 1px solid var(--color-dark);
}

.content-card h2 {
    margin: 0 0 4px 0;
    font-size: 1em;
    color: var(--color-dark);
    line-height: 1;
    font-weight: 600;
}

.content-card h3 {
    margin: 0 0 8px 0;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-dark);
    font-style: italic;
}

.content-card p {
    margin: 0;
    line-height: 1.4;
    color: var(--color-dark);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .screen {
        padding: 4%;
    }

    .timeline::before {
        left: 45px;
    }

    .timeline-item {
        gap: 20px;
        margin-bottom: 40px;
    }

    .year-badge {
        width: 90px;
        height: 90px;
        font-size: 1.5rem;
    }

    .content-card {
        padding: 20px;
    }


    .card-icon {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        right: 20px;
    }
}
</style>