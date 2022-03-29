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

    @media (max-width: $small-resolution) {
      height: 280px;
    }
  }
}

.carousel__item {
  position: relative;

  img {
    position: relative;
    width: 100%;
    height: 546px;
    object-fit: cover;

    @media (max-width: $small-resolution) {
      height: 280px;
    }
  }

  .carousel-info {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0 0 7% 18%;
    color: white;

    @media (max-width: $small-resolution) {
      margin: 0 0 10% 2%;
    }

    .carousel-title {
      font-size: 2em;
      margin-bottom: 24px;

      @media (max-width: $small-resolution) {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }

    .carousel-description {
      width: 453px;
      font-weight: $font-regular;
      font-size: 16px;
      margin: 0;

      @media (max-width: $small-resolution) {
        font-size: 14px;
      }
    }
  }
}
</style>
