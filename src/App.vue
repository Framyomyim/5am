<template>
  <div>
    <div v-if="this.isLogin === null">
      <LoginPage v-if="toLogin === '/'"></LoginPage>
      <RegisterPage v-else></RegisterPage>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
  import LoginPage from '@/views/LoginPage';
  import RegisterPage from '@/views/RegisterPage';

  export default {
    name: 'App',
    data() {
      return {
        isLogin: localStorage.getItem('logged_in'),
        toLogin: this.$router.currentRoute.path
      };
    },
    components: {
      LoginPage,
      RegisterPage
    },
    mounted() {
      console.log(this.toLogin);
    },
    watch: {
      $route() {
        this.toLogin = this.$router.currentRoute.path;
      }
    }
  }
</script>

<style>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    padding: 0;
    margin: 0;
  }

  * {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>