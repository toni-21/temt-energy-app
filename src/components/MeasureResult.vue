<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
            <div class="close" @click="$emit('close-modal')">
                <i class="fa fa-times" style="font-size:30px " aria-hidden="true"></i>
            </div>
            <div class="h4">Market Viability Report</div>
            <div class="h6">Summary</div>
            <p>The average spending power for the specified town
                is: {{ result.spendingPower }}.<br>The annual revenue potential is: {{ result.revenuePotential }}.<br>The
                cost
                of the project spread over a
                period of 25years is: {{ result.projectCost }} annually.<br> The projected net annual revenue after
                accounting for cost
                of project is: {{ result.netRevenue }}.<br></p>
            <button @click="downloadReport" class="btn btn-block">
                Download Report
            </button>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'MeasureResultComponent',
    props: {
        result: Object
    },
    methods: {
        downloadReport() { }
    }
}
</script>
  

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    text-align: left;
    background-color: rgba(57, 57, 57, 1);
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4%;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: auto;
    padding: 0%;
    padding: 1rem 2.5rem 1rem 2.5rem;
    border-radius: 20px;
}

.close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    color: rgba(255, 99, 11, 1);

}

.h4 {
    color: white;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 25px;

}

.h6 {
    color: white;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 5px;
}

p {
    color: white;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 50px;
    line-height: 24px;
}

button {
    margin-bottom: 30px;
}
</style>
