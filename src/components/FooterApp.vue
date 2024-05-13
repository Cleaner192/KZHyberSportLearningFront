<template>
    <div>
        <!-- Подвал -->
        <footer class="text-center text-lg-start text-white" style="background-color: #1c2331">
            <!-- Раздел: Социальные сети -->
            <section class="d-flex justify-content-center p-4" style="background-color: #6351ce">
                <!-- Контейнер для центрирования контента и выравнивания социальных иконок по правому краю -->
                <div class="container">
                    <div class="row">
                        <div class="col-6 d-flex align-items-center">
                            <span>Подписывайтесь на наши соцсети:</span>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <a href="" class="text-white me-2">
                                <font-awesome-icon :icon="['fab', 'vk']" />
                            </a>
                            <a href="" class="text-white me-2">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                            </a>
                            <a href="" class="text-white me-2">
                                <font-awesome-icon :icon="['fab', 'telegram']" />
                            </a>
                            <a href="" class="text-white me-2">
                                <font-awesome-icon :icon="['fab', 'tiktok']" />
                            </a>
                            <a href="" class="text-white me-2">
                                <font-awesome-icon :icon="['fab', 'youtube']" />
                            </a>
                            <a href="" class="text-white">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Раздел: Социальные сети -->

            <!-- Раздел: Ссылки  -->
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <!-- Сетка строк -->
                    <div class="row mt-3">
                        <!-- Сетка колонки -->
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <!-- Контент -->
                            <h6 class="text-uppercase fw-bold">X-GAMES</h6>
                            <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                style="width: 60px; background-color: #7c4dff; height: 2px" />
                            <p>
                                "Empowering Potential, One Skill at a Time!"

                            </p>
                        </div>
                        <!-- Сетка колонки -->

                        <!-- Сетка колонки -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <!-- Ссылки -->
                            <h6 class="text-uppercase fw-bold">Дисциплины</h6>
                            <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                style="width: 60px; background-color: #7c4dff; height: 2px" />
                            <p>
                                <a href="#!" class="text-white" style="text-decoration: none;">CS2</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white" style="text-decoration: none;">Rainbow Six Siege</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white" style="text-decoration: none;">Dota 2</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white" style="text-decoration: none;">Valorant</a>
                            </p>
                        </div>
                        <!-- Сетка колонки -->

                        <!-- Сетка колонки -->
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <!-- Ссылки -->
                            <h6 class="text-uppercase fw-bold">Полезные ссылки</h6>
                            <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                style="width: 60px; background-color: #7c4dff; height: 2px" />
                            <p><a href="#!" class="text-white" style="text-decoration: none;">Новости</a></p>
                            <p><a href="#!" class="text-white" style="text-decoration: none;">Сотрудничество</a></p>
                            <p>
                                <a href="#!" class="text-white" style="text-decoration: none;">Руководство</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white" style="text-decoration: none;">Помощь</a>
                            </p>
                        </div>
                        <!-- Сетка колонки -->

                        <!-- Сетка колонки -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <!-- Ссылки -->
                            <h6 class="text-uppercase fw-bold">Контакты</h6>
                            <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                style="width: 60px; background-color: #7c4dff; height: 2px" />
                            <p><font-awesome-icon :icon="['fas', 'home']" /> Сатпаева, 22</p>
                            <p><font-awesome-icon :icon="['fas', 'envelope']" /> test@gmail.com</p>
                            <p><font-awesome-icon :icon="['fas', 'phone']" /> 88005553535</p>
                            <p><font-awesome-icon :icon="['fas', 'print']" /> 87470136781</p>
                        </div>
                        <!-- Сетка колонки -->
                    </div>
                    <!-- Сетка строк -->
                </div>
            </section>
            <!-- Раздел: Ссылки  -->

            <!-- Авторское право -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                © 2024 Copyright: X-GAMES
            </div>
            <!-- Авторское право -->
        </footer>
        <!-- Подвал -->
    </div>
</template>

<script>
export default {
    name: 'FooterApp',
}
</script>

<style scoped></style>
