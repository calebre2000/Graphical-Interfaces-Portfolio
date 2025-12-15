<template>
    <div class="screen">PROJECTS
        <div>
            <ul>
                <li>Project 1: Portfolio Website</li>
                <li>Project 2: E-commerce Platform</li>
                <li>Project 3: Mobile App Development</li>
                <li>Project 1: Portfolio Website</li>
                <li>Project 2: E-commerce Platform</li>
                <li>Project 3: Mobile App Development</li>
            </ul>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.screen {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: rgb(0, 0, 0);
}
ul {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
li {
    margin: 0.5rem 0;
    font-size: 1.5rem;
    color: rgb(0, 0, 0);
    background-color: lightsalmon;
    padding: 20px;
    max-width: 150px;
}
</style>
