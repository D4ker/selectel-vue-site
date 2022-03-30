<template>
  <div class="header__container container">
    <div class="header__logo">
      <nuxt-link to="/">
        <img src="~/assets/img/selectel-logo-header.svg" alt="Selectel">
      </nuxt-link>
    </div>
    <div class="header__contacts">
      <a class="header__phone" href="tel:88005550675">
        <p class="header__contacts_large">8 800 555 06 75</p>
        <a-icon class="header__contacts_small" type="phone" theme="filled" />
      </a>
      <a href="mailto:sales@selectel.ru">
        <p class="header__contacts_large">sales@selectel.ru</p>
        <a-icon class="header__contacts_small" type="mail" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header__container {
  display: grid;
  grid-template-areas: "header-logo header-contacts";
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100%;
  padding: $header-padding;

  @media (max-width: $medium-resolution) {
    padding: $header-padding-medium;
  }

  .header__logo {
    grid-area: header-logo;
    box-sizing: border-box;
  }

  .header__contacts {
    grid-area: header-contacts;
    display: flex;
    justify-content: flex-end;

    @include reset-link-color($header-contacts-color, $header-contacts-opacity);

    p {
      @include reset-margins();
    }

    .header__phone {
      margin-right: $header-phone-margin;
    }

    .header__contacts_small {
      display: none;

      @media (max-width: $medium-resolution) {
        display: block;
      }
    }

    .header__contacts_large {
      display: block;

      @media (max-width: $medium-resolution) {
        display: none;
      }
    }
  }
}
</style>
