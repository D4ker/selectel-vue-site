<template>
  <div class="main-container">
    <section class="carousel">
      <Carousel/>
    </section>
    <section class="cards">
      <CardsSection/>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import CardsSection from '@/components/CardsSection';

export default {
  components: {
    Carousel,
    CardsSection
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: $container-width;
  margin: 0 auto;
}
</style>
