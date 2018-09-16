
<template>

  <div class="logo">
    <div class="outer"></div>
    <div class="inner"></div>
  </div>

</template>



<script>
export default {
  name: 'logo',
  props: {
  }
}
</script>



<style lang="scss">

@import "../assets/scss/variables";

.logo {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;

  .outer {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid $aqua;
  }
  .inner {
    position: absolute;
    z-index: -1;
    top: 0;
    right: -25%;
    width: 50%;
    height: 50%;
    background-color: $grey-dark;
    border-radius: 50%;
  }
}

</style>
