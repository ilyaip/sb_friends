<template>
  <header class="app-header">
    <div class="logo">
      <!-- Ваш логотип здесь -->
      <img src="../../assets/snowboard-svgrepo-com.svg" alt="Логотип" />
    </div>

    <div class="tabs">
      <router-link to="/">О нас</router-link>
      <router-link to="/blog">Блог</router-link>
      <router-link to="/equipment-selection">Подборщик экипировки</router-link>
    </div>

    <div class="contacts">
      <!-- Ваши контакты здесь -->
      <p>Email: example@example.com</p>
      <p>Телефон: +123456789</p>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
// import { Tooltip } from 'primevue/tooltip';


</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  width: 100%;
}

.logo img {
  max-width: 100px;
  max-height: 60px;
}

.tabs {
  display: flex;
  gap: 20px;
}

.contacts {
  display: flex;
  flex-direction: column;
}
</style>
