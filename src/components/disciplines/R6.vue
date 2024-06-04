<template>
    <div>
        <!-- Сайдбар
        <div :class="{ 'show-sidebar': showSidebar, 'sidebar': true }" id="sidebar-no-header">
            <div class="p-3">
                <h4>Rainbow Six: Siege</h4>
                <div class="mb-3">
                    <nav class="nav flex-column">
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(1)">Видеоурок 1</a>
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(2)">Видеоурок 2</a>
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(3)">Видеоурок 3</a>
                    </nav>
                </div>
            </div>
        </div> -->

        <!-- Контент с видеоуроками -->
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card mb-4">
                        <img src="../../assets/R6.jpg" class="card-img-top" alt="...">
                        <div class="card-img-overlay d-flex align-items-end justify-content-center">
                            <div class="text-center" style="padding: 10px;">
                                <h5 class="card-title" style="font-size: 30px;">Дисциплина</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/UPWDvyoiTDA?si=WAqUMuBoaON7RsHR"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <p class="card-title"><router-link style="text-decoration: none;" to="LessonR6"> Видеоурок 1 </router-link></p>
                            <p class="card-text">Необходимо ознакомиться с основами для начинающих.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <p class="card-title"><router-link style="text-decoration: none;" to="LessonR6"> Видеоурок 2 </router-link></p>
                            <p class="card-text">Необходимо ознакомиться с основным уроком по стороне атаке.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/PZZtCyZyvcA?si=OHreW_q3RaGzOL-F"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/ylta6DFE7ic?si=D0qL_PwLG-gmH335"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3 px-3">
                    <div class="card h-100 custom-style">
                        <div class="card-body">
                            <p class="card-title"><router-link style="text-decoration: none;" to="LessonR6"> Видеоурок 3 </router-link></p>
                            <p class="card-text">Данный урок посвящен основам стратегии на защите.</p>
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
                                <iframe width="100%" height="500"
                                    src="https://www.youtube.com/embed/UPWDvyoiTDA?si=WAqUMuBoaON7RsHR"
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
                                <h1><a style="text-decoration: none; color: black;"
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

        <!-- Блоки, отображаемые при клике на Видеоурок 2 -->
        <div v-if="activeLesson === 2">
            <div class="container mt-3">
                <!-- Видеоурок -->
                <div class="row justify-content-center mb-3">
                    <div class="mb-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <iframe width="100%" height="500"
                                    src="https://www.youtube.com/embed/PZZtCyZyvcA?si=OHreW_q3RaGzOL-F"
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
                                <h1><a style="text-decoration: none; color: black;"
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

        <!-- Блоки, отображаемые при клике на Видеоурок 3 -->
        <div v-if="activeLesson === 3">
            <div class="container mt-3">
                <!-- Видеоурок -->
                <div class="row justify-content-center mb-3">
                    <div class="mb-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <iframe width="100%" height="500"
                                    src="https://www.youtube.com/embed/ylta6DFE7ic?si=D0qL_PwLG-gmH335"
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
                                <h1><a style="text-decoration: none; color: black;"
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


<script>
export default {
    name: 'RainbowSix',
    data() {
        return {
            showSidebar: false, // Переменная для управления отображением сайдбара
            activeLesson: 0, // Идентификатор активного урока
        };
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar; // Метод для переключения отображения сайдбара
        },
        setActiveLesson(lessonId) {
            this.activeLesson = lessonId; // Метод для установки активного урока
        }
    }

}
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
    border: 5px solid #0D0D0D;
    background-color: #F2F2F2;
    border-radius: 30px;
    color: black;
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