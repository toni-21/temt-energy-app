<template>
    <div class="home-container">
        <div class="title">Facilitating Renewable Energy for the Future</div>
        <div class="subtitle">
            Renewable energy is crucial for a sustainable future, reducing our dependence on non-renewable resources and
            mitigating climate change. By utilizing natural resources like the sun, wind, and water, we can create clean
            energy and promote a more sustainable way of life. Renewable energy technologies such as solar, wind,
            hydroelectric, and geothermal power offer a variety of ways to generate clean energy and reduce our carbon
            footprint.
        </div>
        <div class="button_row">
            <button class="btn btn-solar" @click="navigateToSolar">
                Predict Solar Irradiance
            </button>
            <button class="btn btn-market" @click="navigateToMarket">
                Measure Market Viability
            </button>
        </div>
    </div>
</template>

<script>
import ButtonComponent from './Button.vue';
export default {
    name: 'HomeComponent',
    components: ButtonComponent,
    methods: {
        navigateToSolar() {
            this.$router.push('/solar');
        },
        navigateToMarket() {
            this.$router.push('/market');
        },
    },
}
</script>

<style>
.home-container {
    display: inline-block;
    padding: 5rem 4rem;
    text-align: center;
}

.title {
    flex: none;
    order: 0;
    flex-grow: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    color: #FFFFFF;
    margin-bottom: 1rem;
}

.button_row {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-bottom: 1rem;
}

.btn-solar {
    background-color: rgba(255, 148, 33, 1);
    border: 1px solid rgba(255, 148, 33, 1);
    color: #FFFFFF;
    margin-right: 0.9rem;

}

.btn-market {
    border: 1px solid rgba(255, 148, 33, 1);
    background-color: transparent;
    color: rgba(255, 148, 33, 1);

}

.subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-bottom: 1rem;
}
</style>