import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './components/MainPage.vue';
import AboutUs from './components/AboutUs.vue';
import ForStudents from './components/ForStudents.vue';
import CounterStrike2 from './components//disciplines/CounterStrike2.vue';
import Dota2 from './components//disciplines/Dota2.vue';
import R6 from './components//disciplines/R6.vue';
import Valorant from './components//disciplines/Valorant.vue';
import UserPage from './components/UserPage.vue';
// import UserRegistration from './components/UserRegistration.vue';
// import UserAuthorization from './components/UserAuthorization.vue';


export default createRouter ({
    history: createWebHashHistory(), 
    routes :[
        { path: '/Main', component: MainPage, alias: '/' },
        { path: '/About', component: AboutUs },
        { path: '/Students', component: ForStudents },
        { path: '/CounterStrike', component: CounterStrike2 },
        { path: '/Dota', component: Dota2 },
        { path: '/RainbowSix', component: R6 },
        { path: '/Valik', component: Valorant },
        { path: '/UserPage', component: UserPage },
        // { path: '/RegistrationForm', name: 'Registration', component: UserRegistration},
        // { path: '/AuthForm', name: 'Auth', component: UserAuthorization},
    ]
})