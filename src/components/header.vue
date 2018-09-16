
<template>

  <header>
    <div class="logo-container">
      <logo />
    </div>
    <nav>
      <router-link
        to="/work"
      >
        Creative Work
      </router-link>
      <router-link
        to="/experience"
      >
        Experience
      </router-link>
    </nav>
  </header>

</template>



<script>

import Logo from './logo.vue';


export default {
  name: '',
  components: {
    Logo,
  }
}

</script>



<style lang="scss">

@import "../assets/scss/variables";


header {
  padding: 22px 16px;
  text-align: center;
  background-color: $white;

  @media (min-width: 600px) {
    display: flex;
  }

  .logo-container {
    display: inline-block;
    height: 30px;
    width: 30px;

    @media (min-width: 600px) {
      flex: 0 0 auto;
      margin-right: 24px;
    }
  }

  nav {
    display: none;

    @media (min-width: 600px) {
      display: inline-block;
      text-align: left;
    }
  }
}

</style>
