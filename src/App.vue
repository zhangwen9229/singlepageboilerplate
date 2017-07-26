<template>
  <div id="app">
    <router-view class="page"></router-view>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/main.css'
export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, san s-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
