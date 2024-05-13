<template>
    <div>
        <!-- Сайдбар -->
        <div :class="{ 'show-sidebar': showSidebar, 'sidebar': true }" id="sidebar-no-header">
            <div class="p-3">
                <h4>Counter-Strike 2</h4>

                <div class="mb-3">
                    <nav class="nav flex-column">
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(1)">Видеоурок 1</a>
                        <a class="nav-link" href="javascript:void(0)" @click="setActiveLesson(2)">Видеоурок 2</a>
                    </nav>
                </div>
            </div>
        </div>

        <!-- Блоки, отображаемые при клике на Видеоурок 1 -->
        <div v-if="activeLesson === 1">
            <div class="container mt-3">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card mb-4">
                            <img src="../../assets/CS2.png" class="card-img-top" alt="...">
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
                                    src="https://www.youtube.com/embed/Em3rbnDvZ3E?si=7py5CHU42lEtMO9F"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3 px-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <p class="card-title">Видеоурок 1</p>
                                <p class="card-text">Необходимо ознакомиться с основами для начинающих</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="activeLesson === 2">
            <div class="container mt-3">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card mb-4">
                            <img src="../../assets/CS2.png" class="card-img-top" alt="...">
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
                                <p class="card-title">Видеоурок 2</p>
                                <p class="card-text">Необходимо ознакомиться с основным уроком по стрельбе и отдаче</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3 px-3">
                        <div class="card h-100 custom-style">
                            <div class="card-body">
                                <iframe width="100%" height="315"
                                    src="https://www.youtube.com/embed/BKCX12c4H1k?si=I0jeQNNDflvNyoJO"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
            showSidebar: false,
            activeLesson: 1, // Идентификатор активного урока
        };
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },
        setActiveLesson(lessonId) {
            this.activeLesson = lessonId;
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

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 150%;
}
</style>