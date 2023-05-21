<template>
    <div class="landing">
      <HeaderComponent></HeaderComponent>
      <HomeComponent></HomeComponent>  
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/Header.vue';
  import HomeComponent from '../components/Home.vue';
  
  export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      HomeComponent
    }
  }
  </script>
  
 