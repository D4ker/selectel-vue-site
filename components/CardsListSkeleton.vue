<template>
  <div class="cards__skeleton cards__sub-container">
    <a-skeleton class="cards__skeleton-item" v-for="cardSkeletonId in 9" :key="cardSkeletonId" active/>
  </div>
</template>

<style scoped lang="scss">
.cards__skeleton {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax($cards-item-width, auto));
  gap: 20px;
  justify-content: center;
}
</style>
