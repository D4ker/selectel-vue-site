<template>
  <div class="container">
    <a-carousel>
      <div v-for="carouselImgId in 3" :key="carouselImgId" class="carousel__item">
        <img src="~/assets/img/carousel-item.png" alt="Carousel Item">
        <div class="carousel__info">
          <div class="carousel__info-container">
            <p class="carousel__title">IT-инфраструктура для бизнеса</p>
            <p class="carousel__description">
              Мы предлагаем комплексные решения для всех уровней
              бизнеса: от индивидуальных предпринимателей до крупных
              международных компаний. Более 20 000 клиентов по всему
              миру доверяют Selectel.
            </p>
          </div>
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<style scoped lang="scss">
.ant-carousel {
  ::v-deep .slick-slide {
    width: 100%;
    height: 100%;
    min-height: 280px;
    max-height: 546px;
  }
}

.carousel__item {
  position: relative;

  img {
    width: 100%;
    height: 100%;
    min-height: 280px;
    max-height: 546px;
    object-fit: cover;
  }

  .carousel__info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 989px;
    padding: 0 0 100px 15px;

    @media (max-width: $small-resolution) {
      padding-bottom: 35px;
    }

    .carousel__info-container {
      margin: 0 auto;
      color: white;
      max-width: 490px;

      .carousel__title {
        font-size: 2rem;
        margin-bottom: 24px;

        @media (max-width: $small-resolution) {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }
      }

      .carousel__description {
        max-width: 453px;
        font-weight: $font-regular;
        font-size: 1rem;
        margin: 0;

        @media (max-width: $small-resolution) {
          font-size: 0.875rem;
        }
      }
    }
  }
}
</style>
