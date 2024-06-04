import { createRouter, createWebHashHistory } from "vue-router";

// Импорт компонентов страниц
import MainPage from './components/MainPage.vue';
import AboutUs from './components/AboutUs.vue';
import ForStudents from './components/ForStudents.vue';
import CounterStrike2 from './components/disciplines/CounterStrike2.vue';
import Dota2 from './components/disciplines/Dota2.vue';
import R6 from './components/disciplines/R6.vue';
import Valorant from './components/disciplines/Valorant.vue';
import UserPage from './components/UserPage.vue';
import LessonCS from './components/disciplines/lessons/LessonCS.vue';
import LessonDota from './components/disciplines/lessons/LessonDota.vue';
import LessonR6 from './components/disciplines/lessons/LessonR6.vue';
import LessonValorant from './components/disciplines/lessons/LessonValorant.vue';
// import UserRegistration from './components/UserRegistration.vue'; // Компонент для регистрации пользователя
// import UserAuthorization from './components/UserAuthorization.vue'; // Компонент для авторизации пользователя

export default createRouter ({
    // Использование хэш-роутера для управления историей браузера
    history: createWebHashHistory(), 
    routes :[
        // Определение маршрутов
        { path: '/Main', component: MainPage, alias: '/' }, // Главная страница
        { path: '/About', component: AboutUs }, // Страница "О Нас"
        { path: '/Students', component: ForStudents }, // Страница для студентов
        { path: '/CounterStrike', component: CounterStrike2 }, // Страница дисциплины Counter-Strike
        { path: '/Dota', component: Dota2 }, // Страница дисциплины Dota
        { path: '/RainbowSix', component: R6 }, // Страница дисциплины Rainbow Six Siege
        { path: '/Valik', component: Valorant }, // Страница дисциплины Valorant
        { path: '/UserPage', component: UserPage }, // Страница пользователя
        { path: '/LessonCS', component: LessonCS },
        { path: '/LessonDota', component: LessonDota},
        { path: '/LessonR6', component: LessonR6 },
        { path: '/LessonValorant', component: LessonValorant },
        // Закомментированные маршруты, которые могут быть использованы для регистрации и авторизации пользователей
        // { path: '/RegistrationForm', name: 'Registration', component: UserRegistration}, // Страница регистрации пользователя
        // { path: '/AuthForm', name: 'Auth', component: UserAuthorization}, // Страница авторизации пользователя
    ]
})
