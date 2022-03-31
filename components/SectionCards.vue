<template>
  <div class="cards__container">
    <div class="cards-filter">
      <div class="cards-filter__container cards__sub-container">
        <a-select class="cards-filter__author"
                  mode="multiple"
                  placeholder="Выберите автора"
                  :showArrow="true"
                  :size="'large'"
                  :getPopupContainer="trigger => trigger.parentNode"
                  @change="handleChange">
          <a-icon slot="suffixIcon" type="user"/>
          <a-select-option v-for="author of cards.authors" :key="author.id" :value="author.id">
            {{ author.name }}
          </a-select-option>
        </a-select>
        <a-range-picker class="cards-filter__range"
                        :size="'large'"
                        :placeholder="['От', 'До']"
                        :getCalendarContainer="trigger => trigger.parentNode"
                        @change="onChange"/>
      </div>
    </div>
    <div class="cards-list cards__sub-container">
      <a-card v-for="card of filteredCards" :key="card.id" class="card" :title="upFirstLetter(card.title)">
        <div class="card__body">
          <p>{{ upFirstLetter(card.body) }}</p>
          <div class="card__badges">
            <a-badge class="card__author" :count="card.author"/>
            <a-badge class="card__date" :count="card.date.format"/>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  async fetch() {
    await this.$store.dispatch('cards/fetch');
  },
  data: () => ({
    authorsFilter: [],
    datesFilter: []
  }),
  computed: {
    cards() {
      return {
        authors: this.$store.getters['cards/authors'],
        data: this.$store.getters['cards/cards']
      }
    },
    filteredCards() {
      if (!this.authorsFilter.length && !this.datesFilter.length) {
        return this.cards.data;
      }
      return this.cards.data.filter(card => {
        const isFilteredAuthor = this.authorsFilter.includes(+card.userId);
        const isDateInFilteredRange = card.date.time >= this.datesFilter[0] && card.date.time <= this.datesFilter[1];
        return (isFilteredAuthor && isDateInFilteredRange) || (isFilteredAuthor && !this.datesFilter.length) ||
          (!this.authorsFilter.length && isDateInFilteredRange);
      });
    }
  },
  methods: {
    upFirstLetter(str) {
      return str[0].toUpperCase() + str.slice(1);
    },
    handleChange(authors) {
      this.authorsFilter = authors;
    },
    onChange(dates) {
      this.datesFilter = dates.map(date => moment(date).toDate().setHours(0, 0, 0, 0));
    }
  }
};
</script>

<style scoped lang="scss">
.cards__container {
  margin: 60px auto;

  @media (max-width: $small-resolution) {
    margin: 32px auto;
  }

  .cards__sub-container {
    width: 100%;
    max-width: $cards-container-width;
    margin: 0 auto;

    @media (max-width: $small-resolution) {
      max-width: $cards-item-width-mobile;
      padding: 16px 15px;
    }
  }

  .cards-filter {
    position: sticky;
    top: $header-height - 0.1px;
    z-index: 2;
    display: flex;
    align-items: center;
    font-weight: $font-regular;
    min-height: $cards-filter-height;
    background-color: white;

    @media (max-width: $small-resolution) {
      top: $header-height-mobile;
    }

    .cards-filter__container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 12px;

      @media (max-width: $cards-container-width) {
        justify-content: center;
      }

      .cards-filter__author {
        width: 100%;
        max-width: $cards-item-width;

        @media (max-width: $small-resolution) {
          max-width: $cards-item-width-mobile;
        }

        ::v-deep .ant-select-selection--multiple {
          max-height: 41px;
          overflow-x: auto;

          .ant-select-arrow {
            margin-right: 5px;
          }
        }
      }

      .cards-filter__range {
        width: 100%;
        max-width: 331px;

        @media (max-width: $cards-container-width) {
          max-width: $cards-item-width;
        }

        @media (max-width: $small-resolution) {
          max-width: $cards-item-width-mobile;
        }

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
    grid-template-columns: repeat(auto-fit, minmax($cards-item-width, auto));
    gap: 20px;
    margin-top: 24px;
    justify-content: center;

    @media (max-width: $small-resolution) {
      gap: 10px;
      margin-top: 16px;
    }

    .card {
      font-weight: $font-regular;
      max-width: $cards-item-width;

      @media (max-width: $small-resolution) {
        max-width: $cards-item-width-mobile;
      }

      ::v-deep .ant-card-head-title {
        font-weight: $font-semi-bold;
      }

      ::v-deep .ant-card-body {
        height: 200px;
        max-width: $cards-item-width;
      }

      .card__body {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;

        p {
          overflow: hidden;
          text-overflow: clip;
          line-height: 20px;
        }

        .card__badges {
          .card__author {
            margin-right: 10px;

            ::v-deep .ant-badge-count {
              background: $color-blue;
            }
          }

          .card__date {
            ::v-deep .ant-badge-count {
              background: white;
              color: $color-gray;
              box-shadow: 0 0 0 1px #d9d9d9 inset;
            }
          }
        }
      }
    }
  }
}
</style>
