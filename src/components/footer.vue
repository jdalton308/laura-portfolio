
<template>

  <footer>
    <div class="social-links">
      <a
        href=""
        aria-label="new tab"
        target="_blank"
      >
        <img src="../assets/icon-linkedin.png" alt="linkedin icon">
      </a>
      <a
        href=""
        aria-label="new tab"
        target="_blank"
      >
        <img src="../assets/icon-insta.png" alt="instagram icon">
      </a>
      <a
        href=""
        aria-label="new tab"
        target="_blank"
      >
        <img src="../assets/icon-email.png" alt="email icon">
      </a>
    </div>
  </footer>

</template>



<script>

// import Logo from './logo.vue';


export default {
  name: '',
  components: {
    // Logo,
  }
}

</script>



<style lang="scss">

@import "../assets/scss/variables";


footer {
  padding-bottom: 24px;
  background-color: $grey-dark;

  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px 20px;
    background-color: $white;

    a {
      img {
        display: inline-block;
        height: 38px;
        width: 38px;
        margin: 0 28px;
      }
    }
  }
}

</style>
