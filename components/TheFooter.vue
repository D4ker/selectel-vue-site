<template>
  <div class="footer__container container">
    <div class="footer__info">
      <div class="footer__logo">
        <nuxt-link to="/">
          <img src="~/assets/img/selectel-logo-footer.svg" alt="Selectel">
        </nuxt-link>
      </div>
      <div class="footer__copyright">
        <p>© ООО «Селектел», 2008—2022</p>
        <p>Лицензия на телематические услуги №176267</p>
      </div>
    </div>
    <div class="footer__menu">
      <ul class="footer__nav">
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
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 268px;
  height: $footer-height;
  padding: $footer-padding;

  @media (max-width: $large-resolution) {
    gap: 40px;
  }

  @media (max-width: $small-resolution) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 397px;
    padding: 30px 15px;
  }

  .footer__info {
    display: flex;
    width: $footer-info-width;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: $small-resolution) {
      order: 1;
    }

    .footer__copyright {
      font-weight: $font-regular;
      color: $footer-copyright-color;
      opacity: $footer-copyright-opacity;
      max-width: 220px;

      p {
        @include reset-margins;
      }
    }
  }

  .footer__menu {
    display: grid;
    height: 100%;
    grid-template-areas: "footer-nav footer-nav footer-nav footer-nav"
                          "footer-socials . . .";
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    width: 100%;

    .footer__nav {
      grid-area: footer-nav;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(4, 1fr);

      @media (max-width: $large-resolution) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: $medium-resolution) {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(2, 1fr);
      }

      @include reset-link-color($footer-nav-color);
      @include reset-list;
    }

    .footer__socials {
      grid-area: footer-socials;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      @include reset-list;
    }
  }
}
</style>
