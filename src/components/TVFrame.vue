<template>
    <div class="tv">
        <div class="tv-inner">
            <TVScreen 
              :channel="currentChannel" 
              @nextChannel="currentChannel = $event"
              @prevChannel="currentChannel = $event"
            />
            <TVButtons :currentChannel="currentChannel" @changeScreen="currentChannel = $event" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Channel, DEFAULT_CHANNEL } from "../channels/channels";
import TVScreen from "./TVScreen.vue";
import TVButtons from "./TVButtons.vue";

const currentChannel = ref(DEFAULT_CHANNEL);


</script>
<style scoped>
.tv {
    width: 100vw;
    height: 100vh;
    max-width: 1700px;
    background-color: var(--color-yellow);
    border-radius: 3rem;
    padding: 10px 10px 30px 10px;
}

.tv-inner {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgb(29, 29, 29);
    border-radius: 3rem;
    overflow: hidden;
    padding: 0.5rem;
    border: 4px solid rgb(0, 0, 0);
}
</style>
