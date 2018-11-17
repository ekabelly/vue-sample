<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/registration">registration</router-link>
    <router-link to="/registrations">registrations</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
