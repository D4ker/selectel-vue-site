<template>
  <div class="container">
    <a-carousel>
      <div v-for="carouselImgId in 3" class="carousel__item">
        <img src="~/assets/img/carousel-item.png" alt="Carousel Item">
        <div class="carousel-info">
          <p class="carousel-title">IT-инфраструктура для бизнеса</p>
          <p class="carousel-description">
            Мы предлагаем комплексные решения для всех уровней
            бизнеса: от индивидуальных предпринимателей до крупных
            международных компаний. Более 20 000 клиентов по всему
            миру доверяют Selectel.
          </p>
        </div>
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
    position: relative;
    width: 100%;
    height: 546px;
    object-fit: cover;
  }

  .carousel-info {
    position: absolute;
    bottom: 0;
    margin: 0 0 100px 258px;

    color: white;

    .carousel-title {
      font-size: 2em;
      margin-bottom: 24px;
    }

    .carousel-description {
      width: 453px;
      font-weight: $font-regular;
      font-size: 16px;
      margin: 0;
    }
  }
}
</style>
