<template>
    <div>
        <!-- Секция с формой авторизации -->
        <section>
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <!-- Карточка с формой авторизации -->
                            <div class="card" style="border-radius: 15px; border: none;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Авторизация</h2>
                                    <!-- Форма для ввода email и пароля -->
                                    <form>
                                        <!-- Поле ввода email -->
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3cg"
                                                class="form-control form-control-lg" placeholder="Email" />
                                        </div>
                                        <!-- Поле ввода пароля -->
                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4cg"
                                                class="form-control form-control-lg" placeholder="Пароль" />
                                        </div>
                                        <!-- Кнопка для отправки формы -->
                                        <div class="d-flex justify-content-center">
                                            <router-link to="/UserPage"
                                                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Войти</router-link>
                                        </div>

                                        <!-- Ссылка для регистрации -->
                                        <p class="text-center text-muted mt-5 mb-0">Еще нет аккаунта? <a href="#!"
                                                class="fw-bold text-body" data-bs-toggle="modal"
                                                data-bs-target="#registerModal"><u>Зарегистрируйтесь</u></a></p>
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
    name: 'UserAuthorization',
}
</script>

<!-- <style scoped>
  .gradient-custom-3 {
    /* fallback for old browsers */
    background: #84fab0;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
  }
  
  .gradient-custom-4 {
    /* fallback for old browsers */
    background: #84fab0;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
  }
</style> -->
