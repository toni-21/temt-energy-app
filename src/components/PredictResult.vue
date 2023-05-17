<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
            <div class="close" @click="$emit('close-modal')">
                <i class="fa fa-times" style="font-size:30px " aria-hidden="true"></i>
            </div>
            <div class="h4">Solar Irradiance Results</div>
            <div class="h6">1013 Watts/m&sup2;</div>
            <div>
                <SliderComponent :value="result.solarIrradiance" />
            </div>
            <div class="result-guide">
                <div class="guide-row">
                    <div class="guide-color dark-green"></div>
                    <div class="guide-range">> 1000</div>
                    <div class="guide-spacer"></div>
                    <div class="guide-label">Very good</div>
                </div>
                <div class="guide-row">
                    <div class="guide-color light-green"></div>
                    <div class="guide-range">700 - 1000</div>
                    <div class="guide-spacer"></div>
                    <div class="guide-label">Good</div>
                </div>
                <div class="guide-row">
                    <div class="guide-color amber"></div>
                    <div class="guide-range">300 - 700</div>
                    <div class="guide-spacer"></div>
                    <div class="guide-label">Poor</div>
                </div>
                <div class="guide-row">
                    <div class="guide-color red"></div>
                    <div class="guide-range">0 - 300</div>
                    <div class="guide-spacer"></div>
                    <div class="guide-label">Very poor</div>
                </div>
            </div>

        </div>

    </div>
</template>
  
<script>
import SliderComponent from '../components/Slider.vue';
export default {
    name: 'PredictResultComponent',
    components: {
        SliderComponent
    },
    props: {
        result: Object
    },
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
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: rgba(36, 255, 0, 1);
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 5px;
}

p {
    color: white;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 50px;
    line-height: 20px;
}

.result-guide {
    display: flex;
    flex-direction: column;
    width: 235px;
}

.guide-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
}

.guide-color {
    width: 16px;
    height: 16px;
    margin-right: 16px;
}

.guide-range {
    font-weight: 500;
    font-size: 16px;
    color: white;
}

.guide-spacer {
    flex-grow: 1
}

.guide-label {
    font-weight: 500;
    font-size: 16px;
    color: white;
}

.dark-green {
    background-color: rgba(45, 135, 30, 1);
}

.light-green {
    background-color: rgba(36, 255, 0, 1);

}

.amber {
    background-color: rgba(255, 168, 0, 1);

}

.red {
    background-color: rgba(255, 0, 0, 1);

}
</style>
