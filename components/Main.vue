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
    display: flex;
    justify-content: center;
    height: $header-height;
    min-width: 100vw;
    background-color: $header-bg;
  }

  .main {
    flex-grow: 1;
    margin-top: $header-height;
  }

  .footer {
    display: flex;
    justify-content: center;
    background-color: $footer-bg;
  }
}
</style>
