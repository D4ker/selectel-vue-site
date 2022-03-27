<template>
  <div class="layout">
    <header class="header">
      <Header/>
    </header>
    <main class="main">
      <section class="carousel">
        <Carousel/>
      </section>
      <section class="cards">
        <CardsSection/>
      </section>
    </main>
    <footer class="footer">
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import CardsSection from '@/components/CardsSection';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Carousel,
    CardsSection,
    Footer
  }
}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $header-height;
    z-index: 999;
    background-color: $header-bg;
  }

  .main {
    flex-grow: 1;
    margin-top: $header-height;
  }

  .footer {
    width: 100%;
    background-color: $footer-bg;
  }
}
</style>
