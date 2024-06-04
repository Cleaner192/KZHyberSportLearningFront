<template>
  <!-- Раздел для регистрации пользователя -->
  <div>
    <section>
      <!-- Фоновый градиент для раздела -->
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <!-- Карточка для формы регистрации -->
              <div class="card" style="border-radius: 15px; border: none;">
                <div class="card-body p-5">
                  <!-- Заголовок формы регистрации -->
                  <h2 class="text-uppercase text-center mb-5">Регистрация</h2>
                  <!-- Форма регистрации пользователя -->
                  <form>
                    <!-- Поле для ввода имени -->
                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Имя" />
                    </div>
                    <!-- Поле для ввода email -->
                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="Email" />
                    </div>
                    <!-- Поле для ввода пароля -->
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cg" class="form-control form-control-lg" placeholder="Пароль" />
                    </div>
                    <!-- Поле для повторного ввода пароля -->
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cdg" class="form-control form-control-lg" placeholder="Повторите пароль" />
                    </div>
                    <!-- Кнопка для отправки данных формы -->
                    <div class="d-flex justify-content-center">
                      <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Зарегистрироваться</button>
                    </div>
                    <!-- Ссылка на страницу авторизации -->
                    <p class="text-center text-muted mt-5 mb-0">Уже есть аккаунт? <a href="#!" class="fw-bold text-body" data-bs-toggle="modal" data-bs-target="#loginModal" ><u>Авторизируйтесь</u></a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserRegistration',
}
</script>

<!-- <style scoped>
.gradient-custom-3 {
  /* Фоновый градиент */
}

.gradient-custom-4 {
  /* Фоновый градиент */
}
</style> -->
