<template>

  <!-- Добавляем навбар в приложение -->
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" alt="Logo" width="90" height="95" class="d-inline-block align-text-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Главная</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                О Нас
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/About">Об Академии</router-link></li>
                <li><router-link class="dropdown-item" to="/Students">Для Студентов</router-link></li>
                <li><router-link class="dropdown-item" to="/UserPage">Страница пользователя</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Наши дисциплины
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/CounterStrike">Дисциплина Counter-Strike 2</router-link></li>
                <li><router-link class="dropdown-item" to="/Dota">Дисциплина Dota 2</router-link></li>
                <li><router-link class="dropdown-item" to="/RainbowSix">Дисциплина Rainbow Six Siege</router-link></li>
                <li><router-link class="dropdown-item" to="/Valik">Дисциплина Valorant</router-link></li>
              </ul>
            </li>
          </ul>
          <!-- Выравниваем элементы вправо с помощью ms-auto -->
          <div class="ms-auto">
            <button class="btn btn-outline-primary me-2" type="button" data-bs-toggle="modal"
              data-bs-target="#loginModal">Авторизация</button>
            <button class="btn btn-outline-success" type="button" data-bs-toggle="modal"
              data-bs-target="#registerModal">Регистрация</button>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- Добавляем Модальное окно Авторизации -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div id="SignIn">
          <UserAuthorization />
        </div>
      </div>
    </div>
  </div>

  <!-- Добавляем Модальное окно Регистрации -->
  <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div id="SignUp">
          <UserRegistration />
        </div>
      </div>
    </div>
  </div>

  <!-- Добавляем Роуты в приложение -->
  <router-view></router-view>

  <!-- Добавляем disqus в приложение -->
  <div id="Disqus">
    <DisQus />
  </div>

  <!-- Создаем footer приложения -->
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
#app {
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  /* background-color: #c0c0c0; */
  /* background: linear-gradient(to right,  #757F9A, #D7DDE8); */
  background: linear-gradient(to right, #114357, #f29492);
}

header{
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>