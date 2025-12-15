<template>
  <div class="button-container">
    <button
      @click="$emit('about')"
      class="tv-button"
    ></button>

    <button
      @click="$emit('projects')"
      class="tv-button"
    ></button>
  </div>
  <div>
    
  </div>
</template>

<style scoped>
.button-container {
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-left: 16px;
  background-color: rgb(39, 39, 39);
    border-radius: 40px;
    width: 20%;
    min-width: 100px;
    margin-left: 1rem;
}

.tv-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #52525b;
  border: none;
  cursor: pointer;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 150ms ease;
}

.tv-button:active {
  transform: scale(0.9);
}
</style>