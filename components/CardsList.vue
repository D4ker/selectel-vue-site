<template>
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
</template>

<script>
export default {
  props: {
    authorsFilter: {
      type: Array,
      required: true
    },
    datesFilter: {
      type: Array,
      required: true
    }
  },
  computed: {
    cards() {
      return this.$store.getters['cards/cards'];
    },
    filteredCards() {
      if (!this.authorsFilter.length && !this.datesFilter.length) {
        return this.cards;
      }
      return this.cards.filter(card => {
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
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
