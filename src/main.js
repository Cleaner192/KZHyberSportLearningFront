// Импорт стилей Bootstrap
import "bootstrap/dist/css/bootstrap.css"
// Импорт JavaScript Bootstrap для работы интерактивных элементов
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
// Импорт маршрутизатора Vue Router
import router from './router';
// Импорт библиотеки и компонента Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Импорт иконок Font-Awesome
import { faVk, faInstagram, faGithub, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

// Добавление иконок в библиотеку
library.add(faVk, faInstagram, faGithub, faTelegram, faTiktok, faYoutube);
library.add(faHome, faEnvelope, faPhone, faPrint);

const app = createApp(App);
// Регистрация компонента FontAwesomeIcon глобально
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router); // Использование маршрутизатора
app.mount('#app'); // Привязка приложения к элементу с id="app" в HTML
