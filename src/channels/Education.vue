<template>
    <div class="screen">
        <div class="header-block">
            <div class="top-bar">
                <div class="program-name">
                    <span class="name">Carla</span>
                    <span class="cv-badge">TV</span>
                </div>
                <div class="right-info">
                    <span class="label">Teletext</span>
                    <span class="time">{{ currentTime }}</span>
                </div>
            </div>
            <div class="tabs">
                <div
                    class="tab"
                    :class="{ active: activeTab === 'all' }"
                    @click="activeTab = 'all'"
                >
                    all
                </div>
                <div
                    class="tab"
                    :class="{ active: activeTab === 'education' }"
                    @click="activeTab = 'education'"
                >
                    education
                </div>
                <div
                    class="tab"
                    :class="{ active: activeTab === 'work' }"
                    @click="activeTab = 'work'"
                >
                    work experience
                </div>
            </div>
        </div>

        <div class="table-wrapper" ref="tableWrapper">
            <table>
                <tbody v-for="group in groupedItems" :key="group.type">
                    <tr class="section-header" :style="headerStyle(group.type)">
                        <td colspan="2">{{ group.label }}</td>
                    </tr>
                    <tr
                        v-for="(item, index) in group.items"
                        :key="`${group.type}-${index}`"
                        class="item-row"
                    >
                        <td class="date">{{ item.year }}</td>
                        <td class="content">
                            <span class="dot-line"></span>
                            <span class="content-text">
                                <strong>{{ item.title }}</strong><br>
                                {{ item.subtitle }}<br>
                                {{ item.description }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="canScroll" class="scroll-indicator" @click="handleScrollClick">{{ scrollArrow }}</div>
    </div>
</template>
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const items = ref([
    {
        year: '2025',
        title: 'University of Gothenburg',
        subtitle: 'Erasmus Computer Science',
        description: 'Studying UI/UX Design and modern web technologies',
        type: 'education'
    },
    {
        year: '2024',
        title: 'University of Ulm',
        subtitle: 'Master Media Informatics',
        description: 'Studying Software Engineering, Human-Computer Interaction, and Advanced Web Technologies',
        type: 'education'
    },
    {
        year: '2023',
        title: 'Software Developer',
        subtitle: 'Head-on Solutions GmbH, Nürnberg',
        description: 'Built responsive web apps with Vue.js and collaborated on UI improvements',
        type: 'work'
    },
    {
        year: '2021',
        title: 'Working Student Software Development',
        subtitle: 'IT-Labs GmbH, Fürth',
        description: 'Built responsive web apps with Angular',
        type: 'work'
    },
    {
        year: '2019',
        title: 'TH Nürnberg',
        subtitle: 'Bachelor Media Engineering',
        description: 'Studying Software Engineering, Human-Computer Interaction, and Advanced Web Technologies',
        type: 'education'
    },
    {
        year: '2019',
        title: 'Work and Travel',
        subtitle: 'Vancouver, Canada',
        description: 'Worked in food service',
        type: 'work'
    },
    {
        year: '2018',
        title: 'Sales Assistant in a Bakery',
        subtitle: 'K&U Bäckerei, Karlsruhe',
        description: 'Worked in food service',
        type: 'work'
    },
    {
        year: '2018',
        title: 'Helmholtz Gymnasium Karlsruhe',
        subtitle: 'Abitur',
        description: 'Specialization in Science and Art',
        type: 'education'
    }
]);

const activeTab = ref('all');
const tableWrapper = ref(null);
const isAtBottom = ref(false);
const canScroll = ref(false);

const scrollArrow = computed(() => isAtBottom.value ? '▲' : '▼');

const checkScrollPosition = () => {
    if (tableWrapper.value) {
        const { scrollTop, scrollHeight, clientHeight } = tableWrapper.value;
        canScroll.value = scrollHeight > clientHeight;
        isAtBottom.value = scrollTop + clientHeight >= scrollHeight - 10;
    }
};

const handleScrollClick = () => {
    if (!tableWrapper.value) return;
    
    if (isAtBottom.value) {
        tableWrapper.value.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        tableWrapper.value.scrollBy({ top: 200, behavior: 'smooth' });
    }
};

const typeLabels = {
    education: 'Education',
    work: 'Work Experience'
};

const typeColors = {
    education: '#cc0000',
    work: '#0033cc'
};

const groupedItems = computed(() => {
    const filtered = activeTab.value === 'all'
        ? items.value
        : items.value.filter((item) => item.type === activeTab.value);
    const order = ['education', 'work'];
    return order
        .map((type) => ({
            type,
            label: typeLabels[type] || type,
            items: filtered.filter((item) => item.type === type)
        }))
        .filter((group) => group.items.length > 0);
});

const headerStyle = (type) => ({
    backgroundColor: typeColors[type] || '#000000',
    color: '#ffffff'
});

const formatTime = (date) =>
    date.toLocaleTimeString('de-DE', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

const currentTime = ref(formatTime(new Date()));
let timerId;

watch(activeTab, () => {
    setTimeout(() => {
        checkScrollPosition();
    }, 50);
});

onMounted(() => {
    timerId = setInterval(() => {
        currentTime.value = formatTime(new Date());
    }, 1000);
    
    if (tableWrapper.value) {
        tableWrapper.value.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition();
    }
});

onBeforeUnmount(() => {
    if (timerId) clearInterval(timerId);
    if (tableWrapper.value) {
        tableWrapper.value.removeEventListener('scroll', checkScrollPosition);
    }
});
</script>

<style scoped>
@font-face {
    font-family: 'PixelifySans';
    src: url('../assets/PixelifySans.ttf') format('truetype');
    font-display: swap;
}

.screen {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    background-color: #000000;
    font-family: 'Courier New', monospace;
    color: #00ff00;
    line-height: 1.2;
}

.header-block {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: #000000;
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    background-color: #000000;
    color: #ffffff;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.program-name {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'PixelifySans', 'Courier New', monospace;
    font-size: 3rem;
}

.program-name .cv-badge {
    background-color: #ffff00;
    color: #000000;
}

.program-name .name {
    color: #ffffff;
}

.right-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.top-bar .label {
    color: #00ff00;
}

.top-bar .time {
    color: #ffffff;
}

.tabs {
    display: flex;
    gap: 8px;
    background-color: #00ffff;
    color: #000000;
}

.tab {
    padding: 6px 10px;
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
}

.tab.active {
    background-color: #00ff00;
}

table {
    width: 100%;
    border-collapse: collapse;
}

.table-wrapper {
    height: calc(100% - 120px);
    overflow-y: auto;
    padding: 0 0 24px;
    scrollbar-width: none;
}

.table-wrapper::-webkit-scrollbar {
    display: none;
}

.section-header {
    position: sticky;
    top: 0;
    z-index: 3;
}

.section-header td {
    padding: 10px 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: left;
    padding-left: 4em;
    font-size: 1.2em;
}

.item-row {
    background-color: #000000;
    color: #ffffff;
}


td {
    padding: 8px 12px;
    border: none;
    vertical-align: top;
    font-size: 0.95rem;
}

.date {
    font-weight: bold;
    text-align: left;
    white-space: nowrap;
    color: rgb(0, 255, 0);
}

.content {
    text-align: left;
}

.content strong {
    font-weight: bold;
    text-transform: uppercase;
}

.scroll-indicator {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    color: #00ffff;
    font-family: 'PixelifySans', 'Courier New', monospace;
    font-size: 1rem;
    text-shadow: 1px 1px 0 #000000;
    cursor: pointer;
    user-select: none;
}
</style>