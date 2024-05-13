<template>
  <div>
    <section>
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px; border: none;">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">Регистрация</h2>
                  <form>

                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Имя" />
                    </div>

                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3cg" class="form-control form-control-lg"
                        placeholder="Email" />
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cg" class="form-control form-control-lg"
                        placeholder="Пароль" />
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cdg" class="form-control form-control-lg"
                        placeholder="Повторите пароль" />
                    </div>

                    <div class="d-flex justify-content-center">
                      <button type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Зарегистрироваться</button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">Уже есть аккаунт? <a href="#!"
                        class="fw-bold text-body" data-bs-toggle="modal" data-bs-target="#loginModal" ><u>Авторизируйтесь</u></a></p>

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