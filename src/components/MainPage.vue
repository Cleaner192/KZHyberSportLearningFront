<template>
    <!-- Шаблон компонента "MainPage" -->
    <div>
        <!-- Контейнер с отступом -->
        <div class="container-sm my-5">
            <!-- Заголовок -->
            <h1 class="text-center" style="color: black;">Дисциплины</h1>
            <!-- Карусель для отображения информации о дисциплинах -->
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <!-- Индикаторы карусели -->
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <!-- Слайды карусели -->
                <div class="carousel-inner">
                    <!-- Слайд 1 -->
                    <div class="carousel-item active">
                        <img src="../assets/CS2.jpg" height="700" class="d-block w-100 img-fluid" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Counter-Strike 2</h5>
                            <p>В наше обучение входит: изучение всех соревновательных карт, разбор всех видов оружии,
                                периферии, цели обеих сторон, обозначение плэнтов А и Б - Все это вы сможете пройти в
                                нашем обучении. Все это поможет вам поднять ваш ранг и достичь успехов в данной игре.
                            </p>
                        </div>
                    </div>
                    <!-- Слайд 2 -->
                    <div class="carousel-item">
                        <img src="../assets/DT3.jpg" height="700" class="d-block w-100 img-fluid" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Dota 2</h5>
                            <p>Мы начнем разбирать все ее части(от механики игры до разбора самой карты), изучение всех
                                предметов, героев и их способностей. За весь период обучения мы охватим всю теорию доты
                                и успеем использовать все это на практике. Кроме того, мы поможем вам поднять ваш
                                рейтинг, научим Вас командной игре, выявим Вашу роль, которая поможет Вам в будущем
                                найти достойную команду, чтобы выступать на крупных турнирах.</p>
                        </div>
                    </div>
                    <!-- Слайд 3 -->
                    <div class="carousel-item">
                        <img src="../assets/R6.jpg" height="700" class="d-block w-100 img-fluid" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Rainbow Six Siege</h5>
                            <p>Погрузитесь в мир Rainbow Six Siege: оттачивайте знание карт для стратегического
                                преимущества, мастерски используйте уникальные способности оперативников, выбирайте
                                оружие, которое подчеркивает ваш стиль игры, и разрабатывайте неотразимые тактики для
                                командной работы. Ваш путь к вершинам мастерства начинается здесь.</p>
                        </div>
                    </div>
                    <!-- Слайд 4 -->
                    <div class="carousel-item">
                        <img src="../assets/VT.jpg" height="700" class="d-block w-100 img-fluid" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Valorant</h5>
                            <p>Быть лучшем в игре Valorant, это стать экспертом в использовании агентов, их способностей
                                и синергии, освойте каждый уголок карт для стратегического превосходства, выберите
                                идеальный арсенал для вашего стиля игры, и разработайте победные
                                стратегии командного взаимодействия.</p>
                        </div>
                    </div>
                </div>
                <!-- Кнопки управления каруселью -->
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>

        <!-- Контейнер с отступом -->
        <div class="container-sm my-5">
            <!-- Карточка для раздела "Для студентов" -->
            <div class="card mb-3" style="max-width: 1500px;">
                <div class="row g-0">
                    <!-- Изображение -->
                    <div class="col-md-5">
                        <div class="card-body">
                            <!-- Заголовок -->
                            <h5 class="card-title text-center">Для Студентов</h5>
                            <!-- Текст -->
                            <p class="card-text"> Для Студентов Наши программы включают:
                            <ul>
                                <!-- Пункты списка -->
                                <li>Обширные курсы по различным киберспортивным дисциплинам, позволяющие развивать
                                    таланты игроков на всех уровнях мастерства.</li>
                                <li>Центр обучения и сертификации киберспортивных судей, тренеров и менеджеров для того,
                                    чтобы создавать качественные команды и события.</li>
                            </ul>
                            <!-- Преимущества обучения -->
                            Преимущества обучения в "X-GAMES":
                            <ul>
                                <!-- Пункты списка -->
                                <li>Гибкие форматы обучения - мы предлагаем как онлайн, так и офлайн курсы, чтобы каждый
                                    студент мог выбрать подходящий ему формат обучения.</li>
                                <li>Персональный подход - каждый ученик получает индивидуальное внимание и поддержку от
                                    наших профессионалов.</li>
                                <li>Участие в турнирах - мы сотрудничаем с крупнейшими организаторами турниров,
                                    предоставляя уникальную возможность принимать участие в соревнованиях.</li>
                                <li>Трудоустройство - успешные студенты имеют шанс попасть в составы киберспортивных
                                    команд региона СНГ, начать свою карьеру в индустрии киберспорта.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <!-- Изображение -->
                    <div class="col-md-7 d-flex justify-content-center">
                        <img src="../assets/CyberStudents.jpg" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- Контейнер с отступом -->
        <div class="container my-5">
            <!-- Карточка для раздела "Об Академии" -->
            <div class="card mb-3" style="max-width: 1500px;">
                <div class="row g-0">
                    <!-- Изображение -->
                    <div class="col-md-6 d-flex justify-content-center">
                        <img src="../assets/Cyber.jpg" class="img-fluid rounded-start" alt="">
                    </div>
                    <!-- Текст -->
                    <div class="col-md-6">
                        <div class="card-body">
                            <!-- Заголовок -->
                            <h5 class="card-title text-center">Об Академии</h5>
                            <!-- Текст -->
                            <p class="card-text">
                            <ul>
                                <!-- Пункты списка -->
                                <li>Академия киберспорта "X-GAMES" представляет собой передовой образовательный центр,
                                    нацеленный на выявление и развитие талантов в мире киберспорта. Мы предл
                                    агаем комплексную программу обучения, сочетающую в себе теоретические знания и
                                    практический опыт, разработанную ведущими экспертами индустрии. Наша цель -
                                    подготовить профессионалов высокого уровня, способных доминировать в соревнованиях и
                                    вести за собой новые поколения киберспортсменов.</li>
                                <li>Студенты "X-GAMES" имеют доступ к последним инновациям и игровым технологиям, что
                                    обеспечивает им беспрецедентные возможности для обучения и совершенствования своих
                                    навыков. Мы уделяем особое внимание развитию лидерских качеств, командной работы и
                                    психологической устойчивости, поскольку считаем, что эти аспекты являются ключевыми
                                    для успеха в киберспорте и за его пределами.</li>
                                <li>"X-GAMES" - это больше, чем академия. Это сообщество единомышленников, где каждый
                                    может найти поддержку, вдохновение и возможности для реализации своего потенциала в
                                    мире киберспорта.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
}
</script>

<style scoped></style>
