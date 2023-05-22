<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
            <div class="close" @click="$emit('close-modal')">
                <i class="fa fa-times" style="font-size:30px " aria-hidden="true"></i>
            </div>
            <div class="h4">Market Viability Report</div>
            <div class="h6">Summary</div>
            <div class="result-detail">The average spending power for the specified town is:</div>
            <div class="result-answer">
                ₦ {{ result.spendingPower }}.
            </div>
            <div class="result-detail">The annual revenue potential is:</div>
            <div class="result-answer">
                ₦ {{ result.revenuePotential }}.

            </div>
            <div class="result-detail">The cost of the project spread across 25 years is:</div>
            <div class="result-answer">
                ₦ {{ result.projectCost }}.

            </div>
            <div class="result-detail">The projected net annual revenue after accounting for cost is:</div>
            <div class="result-answer">
                ₦ {{ result.netRevenue }}.

            </div>
            <!-- <button @click="downloadReport" class="btn btn-block">
                <span v-if="loading === true">
                    <i class="fa fa-spinner fa-spin"></i> Loading...
                </span>
                <span v-else>
                    Download Report
                </span>
            </button> -->
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'MeasureResultComponent',
    props: {
        result: Object
    },
    data() {
        return {
            loading: false,
            report: null
        }
    },
    methods: {
        // async downloadReport() {
        //      this.loading = true;

        //     const newTask = {
        //         "Average_SpendingPower_Of_Town": this.result.spendingPower,
        //         "Potential_Revenue": this.result.revenuePotential,
        //         "Spread_Cost_of_Production": this.result.projectCost,
        //         "Net_Revenue": this.result.netRevenue
        //     }

        //     fetch('https://temt-energy.herokuapp.com/measure/download', {
        //         method: 'POST',
        //         body: JSON.stringify(newTask),
        //         headers: {
        //             'Content-Type': 'application/pdf',
        //         },
        //     })
        //         .then((response) => response.blob())
        //         .then((blob) => {
        //             // Create a URL object from the returned blob
        //             const url = window.URL.createObjectURL(blob);

        //             // Create an anchor element and set the href attribute to the URL
        //             const link = document.createElement('a');
        //             link.href = url;

        //             // Set the download attribute and click the link to start the download
        //             link.setAttribute('download', 'market_viability_report.pdf');
        //             link.click();

        //             // Clean up the URL object
        //             window.URL.revokeObjectURL(url);
        //              this.loading = true;
        //         })
        //         .catch((error) => {
        //              this.loading = true;
        //             console.error('Error downloading PDF:', error);
        //         });

        // }
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
    padding: 1rem 2.5rem 2.5rem 2.5rem;
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

.result-detail {
    color: white;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
    line-height: 10px;
}

.result-answer {
    color: rgba(255, 148, 33, 1);
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 10px;
}

button {
    margin-bottom: 30px;
}
</style>
