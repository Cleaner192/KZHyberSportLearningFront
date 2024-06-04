<template>
    <!-- Список курсов с использованием таблицы -->
    <div class="container mt-5">
        <!-- Заголовок списка курсов -->
        <h1 class="text-uppercase fw-bold" style="text-align: center; color: black;">Список курсов</h1>
        <!-- Таблица с информацией о курсах -->
        <table class="table">
            <thead>
                <tr>
                    <!-- Заголовки столбцов таблицы -->
                    <th scope="col">#</th>
                    <th scope="col">Курсы</th>
                    <th scope="col">Курсов пройдено</th>
                    <th scope="col">Оценка</th>
                </tr>
            </thead>
            <tbody>
                <!-- Строки таблицы с информацией о каждом курсе -->
                <tr>
                    <th scope="row">1</th>
                    <!-- Ссылка на страницу с курсом по Counter-Strike -->
                    <td><router-link to="/CounterStrike" style="color: black; text-decoration: none;">Курс по Counter-Strike 2</router-link></td>
                    <!-- Количество пройденных курсов -->
                    <td>5</td>
                    <!-- Оценка по курсу -->
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <!-- Ссылка на страницу с курсом по Dota 2 -->
                    <td><router-link to="/Dota" style="color: black; text-decoration: none;">Курс по Dota 2</router-link></td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <!-- Ссылка на страницу с курсом по Rainbow Six: Siege -->
                    <td><router-link to="/RainbowSix" style="color: black; text-decoration: none;">Курс по Rainbow Six: Siege</router-link></td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <!-- Ссылка на страницу с курсом по Valorant -->
                    <td><router-link to="/Valik" style="color: black; text-decoration: none;">Курс по Valorant</router-link></td>
                    <td>5</td>
                    <td>5</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'UserPage',
}
</script>

<style scoped>

</style>
