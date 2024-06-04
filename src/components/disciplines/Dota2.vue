<!-- Шаблон страницы -->
<template>
    <div>
        <!-- Сайдбар
        <div :class="{ 'show-sidebar': showSidebar, 'sidebar': true }" id="sidebar-no-header">
            <div class="p-3">
                <h4>Dota 2</h4>
                <div class="mb-3">
                    Навигация по видеоурокам
                    <nav class="nav flex-column">
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(1)">Видеоурок 1</a>
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(2)">Видеоурок 2</a>
                    </nav>
                </div>
            </div>
        </div> -->

        <!-- Контент с видеоуроками -->
        <div class="container mt-3">
            <!-- Карточка с дисциплиной -->
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card mb-4">
                        <img src="../../assets/DT3.jpg" class="card-img-top" alt="...">
                        <!-- Заголовок дисциплины -->
                        <div class="card-img-overlay d-flex align-items-end justify-content-center">
                            <div class="text-center" style="padding: 10px;">
                                <h5 class="card-title" style="font-size: 30px;">Дисциплина</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Блоки с видеоуроками -->
            <div class="row mb-5">
                <!-- Первый видеоурок -->
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <!-- Видеоурок -->
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/3BSB3NEYQ8U?si=YasMMEZ9sQeQo8tR"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <!-- Описание первого видеоурока -->
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <p class="card-title"><router-link style="text-decoration: none;" to="LessonDota"> Видеоурок 1 </router-link></p>
                            <p class="card-text">Необходимо ознакомиться с основами для начинающих</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Второй видеоурок -->
            <div class="row mb-5">
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <p class="card-title"><router-link style="text-decoration: none;" to="LessonDota"> Видеоурок 2 </router-link></p>
                            <p class="card-text">Необходимо ознакомиться с основным уроком по Героям и их
                                Способностям
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <!-- Второе видеоурок -->
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/m9Qh8DNqVls?si=NTPdSP9DZ85xKQu_"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Блоки, отображаемые при клике на Видеоурок 1 -->
        <div v-if="activeLesson === 1">
            <div class="container mt-3">
                <!-- Видеоурок -->
                <div class="row justify-content-center mb-3">
                    <div class="mb-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <!-- Видеоурок -->
                                <iframe width="100%" height="500"
                                    src="https://www.youtube.com/embed/3BSB3NEYQ8U?si=YasMMEZ9sQeQo8tR"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Описание Видеоурока -->
                <div class="row justify-content-center mb-3">
                    <div class="mb-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <p class="card-text">Описание к видео</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Тесты по видеоуроку -->
                <div class="row justify-content-center mb-5">
                    <div class="col-md-6 mb-3 px-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <!-- Ссылка на тестирование -->
                                <h1><a style="text-decoration: none; color: white;"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSdaKVO-GQcJfNdC2jrAy--ZADqzHLCNdoiCNgfrTjnrGAByDQ/viewform">Пройти
                                        тестирование
                                    </a></h1>
                            </div>
                        </div>
                    </div>
                    <!-- Форма для загрузки ответа -->
                    <div class="col-md-6 mb-3 px-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <form action="/upload" method="post" enctype="multipart/form-data">
                                    <div class="mb-3 ">
                                        <label for="formFile" class="form-label">
                                            Загрузить ответ</label>
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

        <!-- Блоки, отображаемые при клике на Видеоурок 2 -->
        <div v-if="activeLesson === 2">
            <div class="container mt-3">
                <!-- Видеоурок -->
                <div class="row justify-content-center mb-3">
                    <div class="mb-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <!-- Видеоурок -->
                                <iframe width="100%" height="500"
                                    src="https://www.youtube.com/embed/m9Qh8DNqVls?si=NTPdSP9DZ85xKQu_"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Описание Видеоурока -->
                <div class="row justify-content-center mb-3">
                    <div class="mb-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <p class="card-text">Описание к видео</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Тесты по видеоуроку -->
                <div class="row justify-content-center mb-5">
                    <div class="col-md-6 mb-3 px-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <!-- Ссылка на тестирование -->
                                <h1><a style="text-decoration: none; color: white;"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfj5C6EEbtqBXUe4-gw5ZUdfckX6-fDhTKx3Ou3JER6A_ieMg/viewform">Пройти
                                        тестирование
                                    </a></h1>
                            </div>
                        </div>
                    </div>
                    <!-- Форма для загрузки ответа -->
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
    </div>
</template>
// Скрипт компонента
<script>
export default {
    name: 'DotaTwo',
    data() {
        return {
            showSidebar: false, // Переменная для отображения/скрытия сайдбара
            activeLesson: 0, // Идентификатор активного урока
        };
    },
    methods: {
        // Метод для переключения состояния сайдбара
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },
        // Метод для установки активного урока
        setActiveLesson(lessonId) {
            this.activeLesson = lessonId;
        }
    }
}
</script>
/* Стили компонента */
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
    border: 5px solid #A72714;
    background-color: #731212;
    border-radius: 30px;
    color: white;
    min-height: 315px;
    text-align: center;
}

.custom-style:hover a {
    color: blue !important;
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
