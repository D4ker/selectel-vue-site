<template>
  <div class="container">
    <a-carousel>
      <div class="carousel__item">
        <img src="~/assets/img/carousel-item.png" alt="Carousel Item">
      </div>
      <div class="carousel__item">
        <img src="~/assets/img/carousel-item.png" alt="Carousel Item">
      </div>
      <div class="carousel__item">
        <img src="~/assets/img/carousel-item.png" alt="Carousel Item">
      </div>
    </a-carousel>
  </div>
</template>

<style scoped lang="scss">
.ant-carousel {
  ::v-deep .slick-slide {
    height: 546px;
  }
}

.carousel__item {
  img {
    width: 100%;
    height: 546px;
    object-fit: cover;
  }
}
</style>
