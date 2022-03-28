<template>
  <div class="layout">
    <header class="header">
      <Header/>
    </header>
    <main class="main">
      <nuxt/>
    </main>
    <footer class="footer">
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html {
  font-family: Manrope, sans-serif;

  body {
    font-weight: $font-medium;
  }
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .header {
    position: sticky;
    top: 0;
    width: 100%;
    height: $header-height;
    z-index: 999;
    background-color: $header-bg;
  }

  .main {
    flex-grow: 1;
  }

  .footer {
    width: 100%;
    background-color: $footer-bg;
  }
}
</style>
