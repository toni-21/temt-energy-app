<template>
    <div class="slider-meter">
        <div class="slider-brace"></div>
        <div class="slider-pointer" :style="{ marginLeft: `${value / 1350 * 600}px` }"></div>
        <div class="slider">
            <div class="slider-bg red"></div>
            <div class="slider-bg orange"></div>
            <div class="slider-bg light-green"></div>
            <div class="slider-bg dark-green"></div>
        </div>
        <div class="slider-brace"></div>
    </div>
</template>

<script>
export default {
    name: 'SliderComponent',
    props: {
        value: Number
    }

}
</script>

<style scoped>
.slider-meter {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    width: 600px;
}

.slider {
    position: relative;
    height: 35px;
    width: 100%;
    background-color: #ddd;
    transition: width 0.5s ease-in-out;
}

.slider-brace {
    width: 4px;
    height: 82px;
    background-color: white;
}

.slider-pointer {
    position: absolute;
    width: 4px;
    height: 45px;
    background-color: white;
    z-index: 1;
}


.slider-bg {
    position: absolute;
    top: 0;
    bottom: 0;
}

.red {
    left: 0;
    right: 75%;
    background-color: red;
}

.orange {
    left: 25%;
    right: 50%;
    background-color: orange;
}

.light-green {
    left: 50%;
    right: 25%;
    background-color: rgba(142, 240, 44, 1);

}

.dark-green {
    left: 75%;
    right: 0;
    background-color: rgba(27, 190, 0, 1);

}

.slider-label {
    margin-left: 10px;
    font-weight: bold;
}
</style>