<template>
  <Header></Header>
  <router-view></router-view>
<!--  <EquipmentSelection></EquipmentSelection>-->
</template>

<script setup>
  import EquipmentSelection from "./pages/equipment-selection.vue";
  import Header from "./components/header/header.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
