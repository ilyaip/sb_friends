import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import Tooltip from 'primevue/tooltip';
import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/home.vue";
import EquipmentSelection from "./pages/equipment-selection.vue";

// createApp(App).mount('#app')
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/equipment-selection', component: EquipmentSelection },
    ],
})
const app = createApp(App);
app.use(router)
app.use(PrimeVue).mount('#app');
app.directive('tooltip', Tooltip);

