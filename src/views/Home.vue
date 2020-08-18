<template>
  <div class="home">
    <div class="left-panel">
      <wx-searchbox></wx-searchbox>
    </div>
  </div>
</template>

<script>
  import WxSearchbox from '../components/searchbox';

  export default {
    name: 'WxHome',
    components: {
      WxSearchbox
    },
    created() {

    }
  }
</script>

<style lang="scss">
  .left-panel {
    overflow: hidden;
    position: absolute;
    left: 20px;
    top: 20px;
    bottom: 60px;
    pointer-events: none;
  }
</style>
