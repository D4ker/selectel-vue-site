<template>
  <div class="cards-container">
    <div class="cards-filter">

    </div>
    <div class="cards-list">
      <a-card v-for="n in 9" class="cards__item" title="Заголовок карточки">
        <p>Задайте любой вопрос о продукте, его настройках,
          трудностях в работе или неполадках.
          Поддержка работает 24/7, специалисты ответят
          в течение 15 минут и помогут со всем разобраться.
        </p>
        <div class="badges-container">
          <a-badge class="card-name" count="Василий Пупкин"/>
          <a-badge class="card-date" count="24 февраля 2022"/>
        </div>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cards-container {
  margin: 60px auto;

  .cards-filter {
    height: $cards-filter-height;
    background-color: $cards-filter-bg;
  }

  .cards-list {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: $cards-container-width;
    margin: 24px auto 0 auto;

    .cards__item {
      width: 295px;
      height: 258px;
      font-weight: $font-regular;

      ::v-deep .ant-card-head-title {
        font-weight: $font-semi-bold;
      }

      p {
        line-height: 20px;
      }

      .badges-container {
        display: flex;
        justify-content: flex-start;
        gap: 10px;

        .card-name {
          ::v-deep .ant-badge-count {
            background: #092433;
          }
        }

        .card-date {
          ::v-deep .ant-badge-count {
            background: white;
            color: #595959;
            box-shadow: 0 0 0 1px #d9d9d9 inset;
          }
        }
      }
    }
  }
}
</style>
