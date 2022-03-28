<template>
  <div class="cards-container">
    <div class="cards-filter">
      <div class="cards-filter-container cards-sub-container">
        <a-select class="cards-filter-author"
                  mode="multiple"
                  placeholder="Выберите автора"
                  showArrow="false"
                  :size="'large'"
                  :getPopupContainer="trigger => trigger.parentNode"
                  @change="handleChange">
          <a-icon slot="suffixIcon" type="user" />
          <a-select-option v-for="userId in 10" v-bind:value="(Math.random(userId) + 1).toString(36).substring(7)">
            {{(Math.random(userId) + 1).toString(36).substring(7)}}
          </a-select-option>
        </a-select>
        <a-range-picker class="cards-filter-range"
                        :size="'large'"
                        :placeholder="['От', 'До']"
                        :getCalendarContainer="trigger => trigger.parentNode"
                        @change="onChange" />
      </div>
    </div>
    <div class="cards-list cards-sub-container">
      <a-card v-for="cardId in 9" class="cards__item" title="Заголовок карточки">
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

<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  },
};
</script>

<style scoped lang="scss">
.cards-container {
  margin: 60px auto;

  .cards-sub-container {
    width: $cards-container-width;
    margin: 0 auto;
  }

  .cards-filter {
    position: sticky;
    top: $header-height - 0.1px;
    z-index: 2;
    display: flex;
    align-items: center;
    font-weight: $font-regular;
    height: $cards-filter-height;
    background-color: $cards-filter-bg;

    .cards-filter-container {
      position: relative;
      display: flex;
      align-items: center;
      column-gap: 20px;

      .cards-filter-author {
        width: 295px;

        ::v-deep .ant-select-selection--multiple {
          height: 41px;
          overflow-x: auto;

          .ant-select-arrow {
            margin-right: 5px;
          }
        }
      }

      .cards-filter-range {
        width: 331px;

        ::v-deep .ant-calendar-picker-input {
          .ant-calendar-range-picker-input {
            text-align: left;
          }

          .ant-calendar-range-picker-separator {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .cards-list {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: $cards-container-width;
    margin-top: 24px;

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
