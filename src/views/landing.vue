
<template>

  <div class="page landing-page">
    <div class="landing-prompt">
      <h2>Hi, I'm Laura</h2>
      <h2>I'm a visual designer, can read dogs' minds, will kill for mochis, and like to&nbsp;fish.</h2>
    </div>

    <div class="landing-img">
      <router-link
        class="shadow-button"
        to="/work"
      >
        View My Work
      </router-link>
    </div>
  </div>

</template>



<script>

export default {
  name: 'landing',
  components: {
  }
}

</script>



<style lang="scss">

@import "../assets/scss/variables";


.landing-page {
  padding-bottom: 12px;

  .landing-prompt {
    padding: 6px 20px 32px;
    text-align: center;

    h2 {
      line-height: 1.6em;
      font-weight: 600;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .landing-img {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 0;
    height: 200px;
    padding: 20px;
    text-align: right;
    background-image: url('../assets/bg-side-profile-bw.jpg');
    background-size: cover;
    background-position: left center;

    .shadow-button {
      flex: 0 0 auto;
    }
  }
}

</style>