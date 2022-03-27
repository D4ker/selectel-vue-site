<template>
  <div class="header-container container">
    <div class="header__logo">
      <a href="/">
        <img src="~/assets/img/selectel-logo-header.svg" alt="Selectel">
      </a>
    </div>
    <div class="header-contacts">
      <a class="header-contacts__phone" href="tel:88005550675">8 800 555 06 75</a>
      <a href="mailto:sales@selectel.ru">sales@selectel.ru</a>
    </div>
  </div>
</template>

<style lang="scss">
.header-container {
  display: grid;
  grid-template-areas: "header-logo header-contacts";
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100%;
  padding: $header-padding;

  .header__logo {
    grid-area: header-logo;
    box-sizing: border-box;
  }

  .header-contacts {
    grid-area: header-contacts;
    display: flex;
    justify-content: flex-end;

    @include reset-link-color($header-contacts-color, $header-contacts-opacity);

    .header-contacts__phone {
      margin-right: $header-phone-margin;
    }
  }
}
</style>
