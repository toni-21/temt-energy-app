<template>
  <button class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: { text: String },
  // methods:{
  //     onClick(){
  //         this.$emit('go-to-page')
  //     }
  // }
}
</script>

<style scoped>
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
font-size: 16px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>

