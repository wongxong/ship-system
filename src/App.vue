<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
