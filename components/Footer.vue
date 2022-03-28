<template>
  <div class="footer-container container">
    <div class="footer-info">
      <div class="footer-info__logo">
        <a href="/">
          <img src="~/assets/img/selectel-logo-footer.svg" alt="Selectel">
        </a>
      </div>
      <div class="footer-info__copyright">
        <p>© ООО «Селектел», 2008—2022</p>
        <p>
          Лицензия на телематические
          <br>
          услуги №176267
        </p>
      </div>
    </div>
    <div class="footer-menu">
      <ul class="footer-nav">
        <li class="footer-nav__item">
          <a href="/">Серверы</a>
        </li>
        <li class="footer-nav__item">
          <a href="/">Оборудование</a>
        </li>
        <li class="footer-nav__item">
          <a href="/">Дата-центры</a>
        </li>
        <li class="footer-nav__item">
          <a href="/">Блог</a>
        </li>
        <li class="footer-nav__item">
          <a href="/">Облако</a>
        </li>
        <li class="footer-nav__item">
          <a href="/">Решения</a>
        </li>
        <li class="footer-nav__item">
          <a href="/">О компании</a>
        </li>
        <li class="footer-nav__item">
          <a href="/">Офисы</a>
        </li>
      </ul>
      <ul class="footer-socials">
        <li class="footer-socials__item">
          <a href="https://t.me/selectel">
            <img src="~/assets/img/telegram.svg" alt="Telegram">
          </a>
        </li>
        <li class="footer-socials__item">
          <a href="https://www.facebook.com/selectel">
            <img src="~/assets/img/facebook.svg" alt="Facebook">
          </a>
        </li>
        <li class="footer-socials__item">
          <a href="https://vk.com/selectel">
            <img src="~/assets/img/vk.svg" alt="VK">
          </a>
        </li>
        <li class="footer-socials__item">
          <a href="https://twitter.com/selectel">
            <img src="~/assets/img/twitter.svg" alt="Twitter">
          </a>
        </li>
        <li class="footer-socials__item">
          <a href="https://habr.com/ru/company/selectel">
            <img src="~/assets/img/habr.svg" alt="Habr">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  display: grid;
  grid-template-areas: "footer-info footer-menu";
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 268px;
  height: $footer-height;
  padding: $footer-padding;

  .footer-info {
    grid-area: footer-info;
    display: flex;
    width: $footer-info-width;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    .footer-info__copyright {
      font-weight: $font-regular;
      color: $footer-copyright-color;
      opacity: $footer-copyright-opacity;

      p {
        @include reset-margins;
      }
    }
  }

  .footer-menu {
    grid-area: footer-menu;
    display: grid;
    height: 100%;
    grid-template-areas: "footer-nav footer-nav footer-nav footer-nav"
                          "footer-socials . . .";
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);

    .footer-nav {
      grid-area: footer-nav;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(4, 1fr);

      @include reset-link-color($footer-nav-color);
      @include reset-list;
    }

    .footer-socials {
      grid-area: footer-socials;
      display: flex;
      align-items: end;
      justify-content: space-between;
      @include reset-list;
    }
  }
}
</style>
