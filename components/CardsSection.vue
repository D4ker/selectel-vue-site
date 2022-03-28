<template>
  <div class="cards-container">
    <div class="cards-filter">
      <div class="cards-filter-container cards-sub-container">
        <a-select class="cards-filter-author"
                  mode="multiple"
                  placeholder="Выберите автора"
                  :showArrow="true"
                  :size="'large'"
                  :getPopupContainer="trigger => trigger.parentNode"
                  @change="handleChange">
          <a-icon slot="suffixIcon" type="user"/>
          <a-select-option v-for="author of authors" :key="author.id" :value="author.id">
            {{ author.name }}
          </a-select-option>
        </a-select>
        <a-range-picker class="cards-filter-range"
                        :size="'large'"
                        :placeholder="['От', 'До']"
                        :getCalendarContainer="trigger => trigger.parentNode"
                        @change="onChange"/>
      </div>
    </div>
    <div class="cards-list cards-sub-container">
      <a-card v-for="card of filteredCards" :key="card.id" class="cards-list__item" :title="upFirstLetter(card.title)">
        <div class="card-body">
          <p>{{ upFirstLetter(card.body) }}</p>
          <div class="badges-container">
            <a-badge class="card-name" :count="authors[+card.userId - 1].name"/>
            <a-badge class="card-date" :count="card.date.format"/>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data: () => ({
    authors: [],
    cards: [],
    authorsFilter: [],
    datesFilter: []
  }),
  async mounted() {
    this.authors = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');

    this.cards = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
    this.cards.forEach(card => card.date = generateRandomDate(new Date(2008, 7, 8).getTime()));
  },
  computed: {
    filteredCards() {
      console.log(!!this.authorsFilter.length);
      console.log(!!this.datesFilter.length);
      if (!this.authorsFilter.length && !this.datesFilter.length) {
        console.log(1);
        return this.cards;
      } else if (this.authorsFilter.length && this.datesFilter.length) {
        console.log(2);
        return this.cards.filter(card => this.authorsFilter.includes(+card.userId) &&
          (card.date.time >= this.datesFilter[0] && card.date.time <= this.datesFilter[1]));
      } else if (this.authorsFilter.length || this.datesFilter.length) {
        console.log(3);
        return this.cards.filter(card => this.authorsFilter.includes(+card.userId) ||
          (card.date.time >= this.datesFilter[0] && card.date.time <= this.datesFilter[1]));
      }
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

function generateRandomDate(startTime) {
  const time = new Date(startTime + Math.random() * (new Date().getTime() - startTime)).setHours(0, 0, 0, 0);
  const dtFormat = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return {
    time: time,
    format: dtFormat.format(time).slice(0, -3)
  };
}
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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: $cards-container-width;
    margin-top: 24px;

    .cards-list__item {
      width: 295px;
      font-weight: $font-regular;

      ::v-deep .ant-card-head-title {
        font-weight: $font-semi-bold;
      }

      ::v-deep .ant-card-body {
        height: 204px;
      }

      .card-body {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;

        p {
          overflow: hidden;
          text-overflow: clip;
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
}
</style>
