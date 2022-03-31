<template>
  <div class="carousel__skeleton">
    <a-skeleton v-for="carouselSkeletonId in 2" :key="carouselSkeletonId" class="carousel__skeleton-item" active/>
  </div>
</template>
