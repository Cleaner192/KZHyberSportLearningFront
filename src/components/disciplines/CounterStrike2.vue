<template>
    <!-- Компонент для отображения списка видеоуроков и контента -->
    <div>
        <!-- Сайдбар для выбора видеоуроков
        <div :class="{ 'show-sidebar': showSidebar, 'sidebar': true }" id="sidebar-no-header">
            <div class="p-3">
                Заголовок секции
                <h4>Counter-Strike 2</h4>
                Навигационное меню с видеоуроками
                <div class="mb-3">
                    <nav class="nav flex-column">
                        Кнопки для выбора видеоуроков
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(1)">Видеоурок 1</a>
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(2)">Видеоурок 2</a>
                    </nav>
                </div>
            </div>
        </div> -->

        <!-- Контент с видеоуроками и информацией -->
        <div class="container mt-3">
            <div class="row justify-content-center">
                <!-- Карточка с обложкой курса -->
                <div class="col-md-8">
                    <div class="card mb-4">
                        <img src="../../assets/CS2.jpg" class="card-img-top" alt="...">
                        <div class="card-img-overlay d-flex align-items-end justify-content-center">
                            <div class="text-center" style="padding: 10px;">
                                <h5 class="card-title" style="font-size: 30px;">Дисциплина</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Блоки с видеоуроками и описаниями -->
            <div class="row mb-5">
                <!-- Блок для видеоурока 1 -->
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <!-- Видеоурок 1 -->
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/Em3rbnDvZ3E?si=7py5CHU42lEtMO9F"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <!-- Блок для описания видеоурока 1 -->
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <p class="card-title"><router-link style="text-decoration: none;" to="LessonCS"> Видеоурок 1 </router-link></p>
                            <p class="card-text">Необходимо ознакомиться с основами для начинающих</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Блоки для видеоурока 2 и его описания -->
            <div class="row mb-5">
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <p class="card-title"><router-link style="text-decoration: none;" to="LessonCS"> Видеоурок 2 </router-link></p>
                            <p class="card-text">Необходимо ознакомиться с основным уроком по стрельбе и отдаче</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <!-- Видеоурок 2 -->
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/BKCX12c4H1k?si=I0jeQNNDflvNyoJO"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Динамические блоки, отображаемые при выборе видеоуроков -->
            <!-- Блок для видеоурока 1 -->
            <div v-if="activeLesson === 1">
                <div class="container mt-3">
                    <!-- Видеоурок -->
                    <div class="row justify-content-center mb-3">
                        <div class="mb-3">
                            <div class="card h-100 custom-style">
                                <div class="card-body">
                                    <!-- Видеоурок 1 -->
                                    <iframe width="100%" height="500"
                                        src="https://www.youtube.com/embed/Em3rbnDvZ3E?si=7py5CHU42lEtMO9F"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Описание Видеоурока 1 -->
                    <div class="row justify-content-center mb-3">
                        <div class="mb-3">
                            <div class="card h-100 custom-style">
                                <div class="card-body">
                                    <p class="card-text">В этом видеоуроке подробно объясняются основные принципы игры в
                                        CS 2. Видео предназначено для начинающих игроков, которые хотят улучшить свои
                                        навыки и понять основные механики игры. В уроке рассматриваются следующие
                                        аспекты:
                                        Настройки игры - как оптимизировать настройки для лучшей производительности и
                                        удобства.
                                        Основы стрельбы и прицеливания - советы по улучшению точности и управлению
                                        оружием.
                                        Тактика и стратегии - как правильно позиционировать себя на карте и
                                        взаимодействовать с команд
                                        ой.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Тесты по видеоуроку 1 -->
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-6 mb-3 px-3">
                            <div class="card h-100 custom-style">
                                <div class="card-body">
                                    <h1><a style="text-decoration: none; color: white;"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSdaKVO-GQcJfNdC2jrAy--ZADqzHLCNdoiCNgfrTjnrGAByDQ/viewform">Пройти
                                            тестирование
                                        </a></h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3 px-3">
                            <div class="card h-100 custom-style">
                                <div class="card-body">
                                    <form action="/upload" method="post" enctype="multipart/form-data">
                                        <div class="mb-3 ">
                                            <label for="formFile" class="form-label">Загрузить ответ</label>
                                            <input class="form-control" type="file" id="formFile">
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block">Загрузить</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Блок для видеоурока 2 -->
            <div v-if="activeLesson === 2">
                <div class="container mt-3">
                    <!-- Видеоурок -->
                    <div class="row justify-content-center mb-3">
                        <div class="mb-3">
                            <div class="card h-100 custom-style">
                                <div class="card-body">
                                    <!-- Видеоурок 2 -->
                                    <iframe width="100%" height="500"
                                        src="https://www.youtube.com/embed/BKCX12c4H1k?si=I0jeQNNDflvNyoJO"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Описание Видеоурока 2 -->
                    <div class="row justify-content-center mb-3">
                        <div class="mb-3">
                            <div class="card h-100 custom-style">
                                <div class="card-body">
                                    <p class="card-text">В этом видеоуроке подробно объясняются основные принципы
                                        стрельбы в CS 2. Видео предназначено для начинающих игроков, которые хотят
                                        улучшить свои навыки стрельбы. В уроке рассматриваются следующие аспекты:
                                        Основы стрельбы и прицеливания - советы по улучшению точности и управлению
                                        оружием и контролю отдачи.
                                        Практические упражнения - полезные тренировки для повышения мастерства.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Тесты по видеоуроку 2 -->
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-6 mb-3 px-3">
                            <div class="card h-100 custom-style">
                                <div class="card-body">
                                    <h1><a style="text-decoration: none; color: white;"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfj5C6EEbtqBXUe4-gw5ZUdfckX6-fDhTKx3Ou3JER6A_ieMg/viewform">Пройти
                                            тестирование
                                        </a></h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3 px-3">
                            <div class="card h-100 custom-style">
                                <div class="card-body">
                                    <form action="/upload" method="post" enctype="multipart/form-data">
                                        <div class="mb-3 ">
                                            <label for="formFile" class="form-label">Загрузить ответ</label>
                                            <input class="form-control" type="file" id="form
                                            File">
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block">Загрузить</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSidebar: false, // Переменная для управления отображением сайдбара
            activeLesson: 0, // Идентификатор активного урока
        };
    },
    methods: {
        toggleSidebar() {
            // Метод для переключения отображения сайдбара
            this.showSidebar = !this.showSidebar;
        },
        setActiveLesson(lessonId) {
            // Метод для установки активного урока
            if (this.activeLesson !== lessonId) {
                // Если выбран другой урок, устанавливаем его как активный
                this.activeLesson = lessonId;
            } else {
                // Если выбран уже активный урок, сбрасываем значение activeLesson в 0
                this.activeLesson = 0;
            }
            // Скрыть сайдбар при выборе урока
            if (lessonId !== 0) {
                this.showSidebar = false;
            }
        }
    }
};
</script>

<style scoped>
.sidebar {
    width: 250px;
    background-color: white;
    left: 0;
    position: fixed;
    height: 100%;
    top: 123px;
}

.card-img-overlay {
    color: white;
    display: flex;
    align-items: end;
    justify-content: center;
}

.custom-style {
    border: 5px solid #FFA500;
    background-color: #00043E;
    border-radius: 30px;
    color: white;
    min-height: 315px;
    text-align: center;
}

.custom-style:hover a {
    color: orange !important;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 150%;
}
</style>
