<template>
    <!-- Блок для видеоурока 1 -->
    <div>
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
</template>

<script>

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
