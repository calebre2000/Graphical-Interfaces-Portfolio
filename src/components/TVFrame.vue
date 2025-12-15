<template>
    <div class="tv">
        <div class="tv-inner">
            <TVScreen :channel="currentChannel" />
            <TVButtons @about="currentChannel = 1" @projects="currentChannel = 2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TVScreen from "./TVScreen.vue";
import TVButtons from "./TVButtons.vue";

const currentChannel = ref(1);


</script>
<style scoped>
.tv {
    width: 100vw;
    height: 100vh;
    background-color: rgb(210, 67, 4);
    border-radius: 5rem;
    padding: 10px 10px 40px 10px;
}

.tv-inner {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgb(135 48 20);
    border-radius: 4rem;
    overflow: hidden;
    padding: 1rem;
}
</style>
