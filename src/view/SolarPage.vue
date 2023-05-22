<template>
    <div class="input-page">
        <HeaderComponent></HeaderComponent>

        <div class="form-header">
            <span style="color: white">Predict </span>
            <span style="color: rgba(255, 148, 33, 1)">Solar Irradiance</span>
        </div>
        <div class="container">
            <h3 class="form-title">Please Input your readings</h3>
            <h4>Readings you input will be used to calculate the solar irradiance of the area.</h4>
            <form class="form-box" @submit="onSubmit">

                <div class="form-input first-input">
                    <label>Temperature - F °</label>
                    <input type="text" v-model="temperature" name="temperature" @keypress="checkNumber" />
                </div>

                <div class="form-input">
                    <label>Pressure - Hg</label>
                    <input type="text" v-model="pressure" name="pressure" @keypress="checkNumber" />
                </div>
                <div class="form-input first-input">
                    <label>Humidity- %</label>
                    <input type="text" v-model="humidity" name="humidity" @keypress="checkNumber" />
                </div>

                <div class="form-input">
                    <label>Wind Direction - Degrees</label>
                    <input type="text" v-model="windDirection" name="windDirection" @keypress="checkNumber" />
                </div>
                <div class="form-input first-input">
                    <label>Wind Speed - MPH</label>
                    <input type="text" v-model="windSpeed" name="windSpeed" @keypress="checkNumber" />
                </div>

                <div class="form-input">
                    <label>Day of the year</label>
                    <input type="date" v-model="day" name="day" />
                </div>
                <div class="form-input">
                    <label>Time of the day</label>
                    <input type="time" v-model="time" name="time" />
                </div>
                <button @click="onSubmit" class="btn btn-block">
                    <span v-if="loading === true">
                        <i class="fa fa-spinner fa-spin"></i> Loading...
                    </span>
                    <span v-else>
                        Predict Solar Irradiance
                    </span>

                </button>
            </form>
        </div>
        <PredictResultComponent v-show="showModal" @close-modal="closeModal" :result="result">
        </PredictResultComponent>
    </div>
</template>
  
<script>
import HeaderComponent from '../components/Header.vue';
import PredictResultComponent from '../components/PredictResult.vue';

export default {
    name: 'SolarPage',
    components: {
        HeaderComponent,
        PredictResultComponent
    },
    data() {
        return {
            temperature: '',
            pressure: '',
            humidity: '',
            windDirection: '',
            windSpeed: '',
            day: '',
            time: '',
            loading: false,
            result: {},
            showModal: false,
        }
    },
    methods: {
        checkNumber(event) {
            // Check if the key pressed is a number
            const isNumber = /^[0-9]+$/.test(event.key);
            if (!isNumber) {
                // Prevent input if the key pressed is not a number
                event.preventDefault();
            }
        },
        closeModal() {
            // hide pop-up
            this.showModal = false
        },
        onSubmit(e) {
            e.preventDefault();
            if (this.loading === false) {
                if (!this.temperature) {
                    alert('Please input a temperature');
                    return;
                } else if (!this.pressure) {
                    alert('Please input a pressure');
                    return;
                } else if (!this.humidity) {
                    alert('Please input a humidity');
                    return;
                } else if (!this.windDirection) {
                    alert('Please input a wind direction');
                    return;
                } else if (!this.windSpeed) {
                    alert('Please input a wind speed');
                    return;
                } else if (!this.day) {
                    alert('Please input a day');
                    return;
                } else if (!this.time) {
                    alert('Please input a time');
                    return;
                }

                const newTask = {
                    temperature: this.temperature,
                    pressure: this.pressure,
                    humidity: this.humidity,
                    wind_direction: this.windDirection,
                    wind_speed: this.windSpeed,
                    day_of_year: this.day,
                    time_of_day: this.time
                }

                console.log('newTask is ', newTask);
                this.loading = true;

                this.predict(newTask);

            }
        },
        async predict(newTask) {
            console.log(`${newTask}`);
            try {
                const res = await fetch('https://temt-energy.herokuapp.com/predict', {
                    method: 'POST',
                    body: JSON.stringify(newTask),
                    headers: {
                        'Content-type': 'application/json',
                    },
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();
                this.loading = false;

                this.result = {
                    "solarIrradiance": data["solar_irradiance"],
                }

                this.showModal = true;
            } catch (error) {
                this.loading = false;
                // Handle the error and display an appropriate message
                console.error(error);
                const errorMessage = 'An error occurred while processing your request. Please try again later.';
                alert(errorMessage);
            }
        },
        clearFields() {
            this.temperature = "";
            this.pressure = "";
            this.humidity = "";
            this.windDirection = "";
            this.windSpeed = "";
            this.day = "";
            this.time = "";
        }
    }

}
</script>


  
<style scoped>
h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    width: 100%;
    text-align: left;

}

h4 {
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 2.5rem;
}

.form-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;

}

.form-box {
    flex-wrap: wrap;
    width: 45rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.first-input {
    margin-right: 40px;
}
</style>