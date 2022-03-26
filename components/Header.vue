<template>
  <div class="header__container container">
    <div class="header__logo">
      <a href="/">Selectel</a>
    </div>
    <div class="header__contacts">
      <a class="header__contacts_phone" href="tel:88005550675">8 800 555 06 75</a>
      <a href="mailto:sales@selectel.ru">sales@selectel.ru</a>
    </div>
  </div>
</template>

<style>
.header__container {
  display: grid;
  grid-template-areas: "header-logo header-contacts";
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  height: 88px;
  padding: 0 138px;
}

.header__logo {
  grid-area: header-logo;
}

.header__contacts {
  grid-area: header-contacts;
  display: flex;
  justify-content: flex-end;
}

.header__contacts_phone {
  margin-right: 48px;
}
</style>
