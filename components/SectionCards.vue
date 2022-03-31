<template>
  <div class="cards__container">
    <CardsFilter
      @authorsFilter="(recAuthorsFilter) => this.authorsFilter = recAuthorsFilter"
      @datesFilter="(recDatesFilterV) => this.datesFilter = recDatesFilterV"/>
    <CardsListSkeleton v-if="cardsIsLoaded"/>
    <CardsList
      v-else
      :authorsFilter="authorsFilter"
      :datesFilter="datesFilter"/>
  </div>
</template>

<script>
import CardsFilter from '@/components/CardsFilter';
import CardsList from '@/components/CardsList';
import CardsListSkeleton from '@/components/CardsListSkeleton';

export default {
  components: {
    CardsFilter,
    CardsList,
    CardsListSkeleton
  },
  data: () => ({
    authorsFilter: [],
    datesFilter: [],
    cardsIsLoaded: true
  }),
  async fetch() {
    await this.$store.dispatch('cards/fetch');
    this.cardsIsLoaded = false;
  }
};
</script>

<style lang="scss">
.cards__sub-container {
  width: 100%;
  max-width: $cards-container-width;
  margin: 0 auto;

  @media (max-width: $small-resolution) {
    max-width: $cards-item-width-mobile;
    padding: 16px 15px;
  }
}
</style>

<style scoped lang="scss">
.cards__container {
  margin: 60px auto;

  @media (max-width: $small-resolution) {
    margin: 32px auto;
  }
}
</style>
