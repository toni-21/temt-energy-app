<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body {
  background-color: rgba(48, 40, 40, 1);
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

input {
  width: 324px;
  height: 48px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
  background: rgba(80, 76, 76, 1);
  border: 4px solid rgba(90, 90, 90, 1);
  border-radius: 6px;
  color: white;
}

.landing {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(assets/sunset_background.png);
  background-color: #fff;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
}

* {
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  padding: 2rem 3.6rem 3.6rem 3rem;
  overflow: auto;
  margin-left: 7.5rem;
  margin-right: 7.5rem;
  margin-bottom: 10rem;
  background-color: rgba(60, 56, 56, 1);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  display: inline-block;
  border-radius: 12px;
}

.form-header {
  padding: 0rem 0rem 2rem 4rem;
  width: 100%;
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 75%;
  justify-self: center;
  height: 56px;
  margin-left: auto;
  margin-right: auto;
  padding: 3px 7px;
  font-size: 17px;
  background: rgba(255, 148, 33, 1);
  border: 4px solid rgba(255, 194, 128, 1);
  border-radius: 6px;
  color: white;
}
</style>
