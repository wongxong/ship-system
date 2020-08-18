<template>
  <div>
    signin
  </div>
</template>

<script>
  export default {
    name: 'WxSignin',
    data() {
      return {

      }
    },
    created() {
      window.aaa = this;
      console.log('signin page => ', this.$route);
      const { redirect_url } = this.$route.query;

      if(redirect_url) {
        window.sessionStorage.setItem('admin-auth', true);
        setTimeout(() => {
          this.$router.replace(redirect_url);
        }, 2000);
      }
    }
  }
</script>

<style lang="scss">

</style>