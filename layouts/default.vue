<template>
  <div class="layout">
    <header class="header">
      <TheHeader />
    </header>
    <main class="main">
      <nuxt />
    </main>
    <footer class="footer">
      <TheFooter />
    </footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheHeader,
    TheFooter
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

.container {
  width: 100%;
  max-width: $container-width;
  margin: 0 auto;
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
