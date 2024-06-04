<template>

  <!-- Добавляем навбар в приложение -->
  <header>
    <!-- Навигационное меню -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <!-- Логотип -->
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" alt="Logo" width="90" height="95" class="d-inline-block align-text-top">
        </a>
        <!-- Кнопка для сворачивания навигационного меню на мобильных устройствах -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Список ссылок на страницы -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Главная</a>
            </li>
            <!-- Dropdown для страниц О Нас -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                О Нас
              </a>
              <!-- Подменю с ссылками -->
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/About">Об Академии</router-link></li>
                <li><router-link class="dropdown-item" to="/Students">Для Студентов</router-link></li>
                <li><router-link class="dropdown-item" to="/UserPage">Страница пользователя</router-link></li>
              </ul>
            </li>
            <!-- Dropdown для страниц Наши дисциплины -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Наши дисциплины
              </a>
              <!-- Подменю с ссылками -->
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/CounterStrike">Дисциплина Counter-Strike 2</router-link>
                </li>
                <li><router-link class="dropdown-item" to="/Dota">Дисциплина Dota 2</router-link></li>
                <li><router-link class="dropdown-item" to="/RainbowSix">Дисциплина Rainbow Six Siege</router-link></li>
                <li><router-link class="dropdown-item" to="/Valik">Дисциплина Valorant</router-link></li>
              </ul>
            </li>
          </ul>
          <!-- Элементы справа -->
          <div class="ms-auto">
            <!-- Кнопка для открытия модального окна авторизации -->
            <router-link  to="/UserPage"><button class="btn btn-outline-primary me-2" type="button" data-bs-toggle="modal">Личный кабинет</button></router-link>
            <button class="btn btn-outline-primary me-2" type="button" data-bs-toggle="modal"
              data-bs-target="#loginModal">Авторизация</button>
            <!-- Кнопка для открытия модального окна регистрации -->
            <button class="btn btn-outline-success" type="button" data-bs-toggle="modal"
              data-bs-target="#registerModal">Регистрация</button>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- Модальное окно Авторизации -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div id="SignIn">
          <!-- Компонент для авторизации пользователя -->
          <UserAuthorization />
        </div>
      </div>
    </div>
  </div>

  <!-- Модальное окно Регистрации -->
  <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div id="SignUp">
          <!-- Компонент для регистрации пользователя -->
          <UserRegistration />
        </div>
      </div>
    </div>
  </div>

  <!-- Роутер для отображения различных страниц -->
  <router-view></router-view>

  <!-- Компонент для комментариев Disqus -->
  <div id="Disqus">
    <DisQus />
  </div>

  <!-- Футер приложения -->
  <div id="Footer">
    <FooterApp />
  </div>

</template>

<script>
import FooterApp from './components/FooterApp.vue';
import DisQus from './components/DisQus.vue';
import UserRegistration from './components/UserRegistration.vue';
import UserAuthorization from './components/UserAuthorization.vue';

export default {
  name: 'App',
  components: {
    FooterApp,
    DisQus,
    UserRegistration,
    UserAuthorization
  }
}
</script>

<style>
/* Стили для приложения */
header{
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 1px 5px  rgb(90, 89, 89);
}
#app {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  background-color: #F7F7F7;
}

/* Стили для хедера */
header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
