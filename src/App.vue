
<template>
  <div id="app">

    <my-header />

    <router-view/>

    <my-footer />

  </div>
</template>



<script>

import MyHeader from './components/header.vue';
import MyFooter from './components/footer.vue';


export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
  }
}

</script>



<style lang="scss">

@import "./assets/scss/variables";

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', arial, sans-serif;
  color: $grey-dark;
}
.page {
  min-height: calc(100vh - 220px);
}


h2 {
  font-size: 20px;
  margin: 0 0 24px;
}


button,
a {
  &.shadow-button {
    position: relative;
    display: inline-block;
    padding: 10px 12px 9px;
    border: 0;
    background-color: $white;
    border-radius: 0;
    text-transform: uppercase;
    color: $grey-dark;
    text-decoration: none;

    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 100%;
      border: 2px solid $aqua;
      transform: translate(-6px, 4px);
    }

    &:active {
      opacity: 0;
    }

    @media (min-width: 600px) {
      transition: transform 0.3s;

      &:hover {
        &:after {
          transform: translate(0, 0);
        }
      }
    }
  }
}

</style>
