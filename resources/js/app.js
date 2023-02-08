import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});
import Board from './Board.vue';
app.component('Board', Board);

app.mount('#app');
