<template>
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
        <a-select-option v-for="author of authors" :key="author.id" :value="author.id">
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
</template>

<script>
import moment from "moment";

export default {
  computed: {
    authors() {
      return this.$store.getters['cards/authors'];
    }
  },
  methods: {
    handleChange(authors) {
      this.$emit('authorsFilter', authors);
    },
    onChange(dates) {
      this.$emit('datesFilter', dates.map(date => moment(date).toDate().setHours(0, 0, 0, 0)));
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
