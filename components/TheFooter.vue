<template>
  <div class="container">
    <div class="footer__container">
      <div class="footer__logo">
        <nuxt-link to="/">
          <img src="~/assets/img/selectel-logo-footer.svg" alt="Selectel">
        </nuxt-link>
      </div>
      <nav class="footer__nav">
        <ul class="footer__nav-container">
          <li class="footer__nav-item">
            <nuxt-link to="/servers">Серверы</nuxt-link>
          </li>
          <li class="footer__nav-item">
            <nuxt-link to="/equipment">Оборудование</nuxt-link>
          </li>
          <li class="footer__nav-item">
            <nuxt-link to="/data-centers">Дата-центры</nuxt-link>
          </li>
          <li class="footer__nav-item">
            <nuxt-link to="/blog">Блог</nuxt-link>
          </li>
          <li class="footer__nav-item">
            <nuxt-link to="/cloud">Облако</nuxt-link>
          </li>
          <li class="footer__nav-item">
            <nuxt-link to="/solutions">Решения</nuxt-link>
          </li>
          <li class="footer__nav-item">
            <nuxt-link to="/about">О компании</nuxt-link>
          </li>
          <li class="footer__nav-item">
            <nuxt-link to="/offices">Офисы</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="footer__copyright">
        <p>© ООО «Селектел», 2008—2022</p>
        <p>Лицензия на телематические услуги №176267</p>
      </div>
      <ul class="footer__socials">
        <li class="footer__socials-item">
          <a href="https://t.me/selectel" target="_blank">
            <img src="~/assets/img/telegram.svg" alt="Telegram">
          </a>
        </li>
        <li class="footer__socials-item">
          <a href="https://www.facebook.com/selectel" target="_blank">
            <img src="~/assets/img/facebook.svg" alt="Facebook">
          </a>
        </li>
        <li class="footer__socials-item">
          <a href="https://vk.com/selectel" target="_blank">
            <img src="~/assets/img/vk.svg" alt="VK">
          </a>
        </li>
        <li class="footer__socials-item">
          <a href="https://twitter.com/selectel" target="_blank">
            <img src="~/assets/img/twitter.svg" alt="Twitter">
          </a>
        </li>
        <li class="footer__socials-item">
          <a href="https://habr.com/ru/company/selectel" target="_blank">
            <img src="~/assets/img/habr.svg" alt="Habr">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer__container {
  display: grid;
  grid-template-columns: auto minmax(auto, $footer-nav-width);
  grid-template-rows: auto auto;
  justify-content: space-between;
  align-content: space-between;
  column-gap: 20px;
  height: $footer-height;
  padding: $footer-padding;

  @media (max-width: $small-resolution) {
    grid-template-columns: none;
    column-gap: 0;
    height: $footer-height-mobile;
    padding: $footer-padding-mobile;
  }

  .footer__logo {
    position: relative;

    @media (max-width: $small-resolution) {
      order: -2;

      img {
        max-width: 157px;
        object-fit: cover;
      }
    }
  }

  .footer__copyright {
    font-weight: $font-regular;
    color: $color-white;
    max-width: 220px;

    @media (max-width: $small-resolution) {
      max-width: 100%;
    }

    p {
      @include reset-margins;
    }
  }

  .footer__nav-container {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    @include reset-list;

    @media (max-width: $medium-resolution) {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }

    a {
      color: white;
    }
  }

  .footer__socials {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: $footer-nav-width / 4;
    width: 100%;
    @include reset-list;

    @media (max-width: $small-resolution) {
      order: -1;
      max-width: 182px;
    }
  }
}
</style>
