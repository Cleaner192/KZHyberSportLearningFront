<template>
    <!-- Блоки, отображаемые при клике на Видеоурок 1 -->
    <div>
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