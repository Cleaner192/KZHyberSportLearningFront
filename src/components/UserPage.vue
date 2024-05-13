<template>
    <div class="container mt-5">
        <h1 class="text-uppercase fw-bold" style="text-align: center; color: white;">Список курсов</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Курсы</th>
                    <th scope="col">Курсов пройдено</th>
                    <th scope="col">Оценка</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><router-link to="/CounterStrike" style="color: black; text-decoration: none;">Курс по Counter-Strike 2</router-link></td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td><router-link to="/Dota" style="color: black; text-decoration: none;">Курс по Dota 2</router-link></td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td><router-link to="/RainbowSix" style="color: black; text-decoration: none;">Курс по Rainbow Six: Siege</router-link></td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
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