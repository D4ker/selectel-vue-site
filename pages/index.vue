<template>
  <div class="main__container">
    <section class="carousel">
      <SectionCarousel />
    </section>
    <section class="cards">
      <SectionCards />
    </section>
  </div>
</template>

<script>
import SectionCarousel from '@/components/SectionCarousel';
import SectionCards from '@/components/SectionCards';

export default {
  components: {
    SectionCarousel,
    SectionCards
  }
}
</script>
