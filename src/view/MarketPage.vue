<template>
    <div class="input-page">
        <HeaderComponent></HeaderComponent>

        <div class="form-header">
            <span style="color: white">Measure </span>
            <span style="color: rgba(255, 148, 33, 1)">Market Availability</span>
        </div>
        <div class="container">
            <h3 class="form-title">Please Input your readings</h3>
            <h4>Readings you input will be used to calculate the market viability of the area.</h4>
            <form class="form-box" @submit="onSubmit">

                <div class="form-input first-input">
                    <label>Average Household Income</label>
                    <input type="text" v-model="householdIncome" name="householdIncome" @keypress="checkNumber" />
                </div>
                <div class="form-input">
                    <label>Average Business Income</label>
                    <input type="text" v-model="businessIncome" name="businessIncome" @keypress="checkNumber" />
                </div>

                <div class="form-input first-input">
                    <label>Average Household Costs</label>
                    <input type="text" v-model="householdCost" name="householdCost" @keypress="checkNumber" />
                </div>
                <div class="form-input">
                    <label>Average Business Costs</label>
                    <input type="text" v-model="businessCost" name="businessCost" @keypress="checkNumber" />
                </div>

                <div class="form-input first-input">
                    <label>Estimated Cost of Project</label>
                    <input type="text" v-model="projectCost" name="projectCost" @keypress="checkNumber" />
                </div>
                <div class="form-input">
                    <label>Estimated Annual Operational costs</label>
                    <input type="text" v-model="operationalCost" name="operationalCost" @keypress="checkNumber" />
                </div>
                <button @click="onSubmit" class="btn btn-block">
                    <span v-if="loading === true">
                        <i class="fa fa-spinner fa-spin"></i> Loading...
                    </span>
                    <span v-else>
                        Measure Market Availability
                    </span>
                </button>
            </form>
        </div>
        <MeasureResultComponent v-show="showModal" @close-modal="closeModal" :result="result">
        </MeasureResultComponent>
    </div>
</template>
  
<script>
import HeaderComponent from '../components/Header.vue';
import MeasureResultComponent from '../components/MeasureResult.vue';

export default {
    name: 'MarketPage',
    components: {
        HeaderComponent,
        MeasureResultComponent,
    },
    data() {
        return {
            householdIncome: '',
            businessIncome: '',
            householdCost: '',
            businessCost: '',
            projectCost: '',
            operationalCost: '',
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
            console.log('newTask ass');
            if (this.loading === false) {
                if (!this.householdIncome) {
                    alert('Please input average household income');
                    return;
                }
                else if (!this.businessIncome) {
                    alert('Please input average business income');
                    return;
                }
                else if (!this.householdCost) {
                    alert('Please input average household cost');
                    return;
                }
                else if (!this.businessCost) {
                    alert('Please input average business cost');
                    return;
                }
                else if (!this.projectCost) {
                    alert('Please input estimated cost of project');
                    return;
                } else if (!this.operationalCost) {
                    alert('Please input estimated annual operational cost');
                    return;
                }

                const newTask = {
                    householdIncome: this.householdIncome,
                    businessIncome: this.businessIncome,
                    householdCost: this.householdCost,
                    businessCost: this.businessCost,
                    projectCost: this.projectCost,
                    operationalCost: this.operationalCost,
                }

                console.log('newTask is ', newTask);

                this.loading = true;

                this.measure(newTask);
            }
        },
        async measure(newTask) {
            // console.log(`${newTask}`);
            try {
                const res = await fetch('http://localhost:5000/measure', {
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
                    "spendingPower": data["Average_SpendingPower_Of_Town"],
                    "revenuePotential": data["Potential_Revenue"],
                    "projectCost": data["Spread_Cost_of_Production"],
                    "netRevenue": data["Net_Revenue"],
                }

                this.showModal = true;
            } catch (error) {
                // Handle the error and display an appropriate message
                this.loading = false;
                console.error(error);
                const errorMessage = 'An error occurred while processing your request. Please try again later.';
                alert(errorMessage);
            }
        }, clearFields() {
            this.householdIncome = "";
            this.businessIncome = "";
            this.householdCost = "";
            this.businessCost = "";
            this.projectCost = "";
            this.operationalCost = "";
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