<template>
  <div class="footer__container container">
    <div class="footer__logo">
      <a href="/">Selectel</a>
    </div>
    <div class="footer__copyright">
      <p>Copyright</p>
    </div>
    <div class="footer-nav">

    </div>
    <ul class="footer-socials">
      <li class="footer-socials__item">
        Telegram
      </li>
      <li class="footer-socials__item">
        Facebook
      </li>
      <li class="footer-socials__item">
        VK
      </li>
      <li class="footer-socials__item">
        Twitter
      </li>
      <li class="footer-socials__item">
        Habr
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer__container {
  display: grid;
  grid-template-areas: "footer-logo . footer-nav footer-nav footer-nav footer-nav"
                        "footer-copyright . footer-socials . . .";
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(6, 1fr);
  height: 321px;
  padding: 0 138px;
}

.footer__logo {
  grid-area: footer-logo;
}

.footer-nav {
  grid-area: footer-nav;
}

.footer__copyright {
  grid-area: footer-copyright;
}

.footer-socials {
  grid-area: footer-socials;
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.footer-socials__item {
  box-sizing: border-box;
  color: aliceblue;
}
</style>
