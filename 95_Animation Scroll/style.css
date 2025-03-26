html {
  font-size: calc(10000vw / 1920);
}
@media (min-aspect-ratio: 1440/1080) {
  html {
    font-size: calc(10000vh / 1080);
  }
}

:root {
  --main-font: "Work Sans", sans-serif;
  --color-black: #000000;
  --color-black-light: #181b1a;
  --color-light-purity: #E0D8EB;
  --color-fat-tuesday: #341F37;
  --color-bashful-pancy: #D8CEE6;
  --color-sugar-crystal: #F9F5FF;
  --color-white: #ffffff;
}

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  background: var(--color-fat-tuesday);
  margin: 0;
}

body,
main {
  overflow-x: hidden;
}

body {
  width: 100%;
  height: 100%;
  background: var(--color-light-purity);
  font-family: var(--main-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-light-purity);
  background-image: url("https://cdn.zajno.com/dev/codepen/cicada/texture.png");
  background-repeat: repeat;
  mix-blend-mode: soft-light;
}
body::after {
  content: "";
  position: fixed;
  bottom: -3.76rem;
  left: 50%;
  width: 22.42rem;
  height: 8.86rem;
  background: var(--color-sugar-crystal);
  filter: blur(2.5rem);
  transform: translateX(-50%);
  z-index: 0;
}
body.mobile-menu-open {
  overflow: hidden;
}
body.modal-active {
  overflow: hidden;
}

main {
  position: relative;
  width: 100%;
  height: 10000px;
  flex: 1 0 auto;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: auto;
  z-index: 100;
}
.header-wrapp {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.4rem;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 1.37rem;
}
.header-main {
  display: flex;
  align-items: center;
  gap: 0.16rem;
}
.header-logo {
  width: 1.34rem;
  height: max-content;
}
.header-logo img {
  display: block;
  width: 100%;
  height: auto;
}
.header-title {
  max-width: 0.89rem;
  font-size: 0.12rem;
  font-weight: 500;
  letter-spacing: -0.005rem;
  line-height: 1.2;
  margin-top: 0.04rem;
}
.header-search {
  display: flex;
  align-items: center;
  gap: 0.08rem;
}
.header-search__btn {
  width: 0.13rem;
}
.header-search__btn img {
  display: block;
  width: 100%;
  height: auto;
}
.header-search__input {
  background: transparent;
  border: none;
  font-family: var(--main-font);
  font-size: 0.16rem;
  font-weight: 500;
  letter-spacing: -0.0065rem;
}
.header-search__input::placeholder {
  color: var(--color-fat-tuesday);
}
.header-right {
  display: flex;
  align-items: center;
  gap: 0.78rem;
}
.header-contact {
  position: relative;
  font-family: var(--main-font);
  font-size: 0.16rem;
  font-weight: 500;
  letter-spacing: -0.0065rem;
  background: none;
  color: var(--color-fat-tuesday);
  border: none;
  padding: 0;
}
.header-contact::before {
  content: "";
  position: absolute;
  bottom: -0.04rem;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
}
.header-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.35rem;
  height: 0.35rem;
  aspect-ratio: 1/1;
  background: var(--color-fat-tuesday);
  border-radius: 50%;
  border: 1px solid var(--color-fat-tuesday);
}
.header-menu img {
  width: 0.1465rem;
}

.footer {
  width: 100%;
  flex: 0 0 auto;
}

a {
  text-decoration: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
}

.fluid-container {
  width: 100%;
  position: relative;
}

.container {
  position: relative;
  width: var(--container-width);
  min-width: var(--container-width);
  margin: 0 auto;
}

.row {
  display: flex;
  flex-direction: row;
}

.row-reverse {
  display: flex;
  flex-direction: row-reverse;
}

.column {
  display: flex;
  flex-direction: column;
}

.column-reverse {
  display: flex;
  flex-direction: column-reverse;
}

.s-visible,
.xs-visible,
.xxs-visible {
  display: none;
}

.lazy {
  opacity: 0;
  transition: opacity 0.4s ease;
}
.lazyLoaded {
  opacity: 1;
}

input::-webkit-input-placeholder, input::placeholder {
  transition: all 0.3s;
}
input:focus::-webkit-input-placeholder, input:focus::placeholder {
  color: transparent;
}

button[type=submit] {
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
  .s-hidden {
    display: none;
  }

  .s-visible {
    display: block;
  }
}
@media only screen and (max-width: 850px) {
  .xs-hidden {
    display: none;
  }

  .xs-visible {
    display: block;
  }
}
@media only screen and (max-width: 690px) {
  body.modal-active {
    position: fixed;
  }

  .xxs-visible {
    display: block;
  }

  .xxs-hidden {
    display: none;
  }
}
#main {
  padding: 0.1rem;
}

.banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.4rem;
  overflow: hidden;
  z-index: 1;
}
.banner-slide {
  z-index: 2;
}
.banner-title {
  position: absolute;
  top: 1.95rem;
  max-width: 9.57rem;
  font-size: 1rem;
  line-height: 1.1;
  letter-spacing: -0.07rem;
  text-align: center;
  z-index: 3;
}
.banner-title span {
  position: relative;
  display: inline-block;
}
.banner-title span::before {
  content: "";
  position: absolute;
  bottom: -0.04rem;
  left: 0;
  width: 100%;
  border-bottom: 4px solid currentColor;
  transform: rotate(-3deg);
}
.banner-subtitle {
  position: absolute;
  top: 2.8rem;
  font-size: 1rem;
  line-height: 1.1;
  letter-spacing: -0.07rem;
  text-align: center;
  opacity: 0;
  z-index: 1;
}
.banner-text {
  position: absolute;
  top: 1.89rem;
  max-width: 6.87rem;
  font-size: 0.42rem;
  line-height: 1.1;
  letter-spacing: -0.0295rem;
  opacity: 0;
  z-index: 1;
}
.banner-tree {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 19rem;
  height: auto;
  transform: translateX(-50%);
  transform-origin: bottom;
  z-index: 2;
}
.banner-tree img, .banner-tree video {
  display: block;
  width: 100%;
}

.wings {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
}
.wings-svg {
  position: absolute;
  left: 50%;
  bottom: 0.95rem;
  width: 95vw;
  height: auto;
  transform: translateX(-50%);
  z-index: 3;
}
.wings-svg svg {
  width: 100%;
  height: auto;
}
.wings-hidden {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.tree {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  z-index: 1;
}
.tree-name {
  position: absolute;
  top: 0.92rem;
  left: 50%;
  font-size: 0.51rem;
  letter-spacing: -0.0357rem;
  opacity: 0;
  transform: translateX(-50%);
}
.tree-wrapp {
  position: absolute;
  top: 3.32rem;
  left: 50%;
  display: block;
  width: 9.5rem;
  transform: translateX(-50%);
  z-index: 1;
}
.tree-svg {
  display: none;
  width: 100%;
  height: auto;
}
.tree-circle {
  position: absolute;
  top: 1rem;
  left: 50%;
  width: 8.62rem;
  height: auto;
  aspect-ratio: 1/1;
  box-shadow: 0 0 0 1px var(--color-fat-tuesday);
  border-radius: 50%;
  transform: translateX(-50%) scale(0);
}
.tree-circle__small {
  box-shadow: 0 0 0 3px var(--color-fat-tuesday);
}
.tree-title {
  position: absolute;
  max-width: 2rem;
  font-size: 0.2rem;
  font-weight: 400;
  letter-spacing: -0.009rem;
  padding: 0.18rem;
  cursor: pointer;
  z-index: 2;
}
.tree-title span {
  opacity: 0;
  transform: translateY(100%);
}
.tree-title_top {
  top: -0.25rem;
  left: 50%;
  transform: translate(-50%, -100%);
  transform-origin: bottom center;
}
.tree-title_left-top {
  top: 0.57rem;
  right: 6.11rem;
  transform: translate(-100%, -50%);
  transform-origin: bottom right;
}
.tree-title_left {
  top: 2.13rem;
  left: -0.1rem;
  transform: translate(-100%, 0%);
  transform-origin: bottom right;
}
.tree-title_right-top {
  top: 0.57rem;
  left: 5.69rem;
  transform: translate(100%, -50%);
  transform-origin: bottom left;
}
.tree-title_right {
  top: 2.13rem;
  right: -0.1rem;
  transform: translate(100%, 0%);
  transform-origin: bottom left;
}
.tree-title__decor {
  position: absolute;
  top: 50%;
  width: 0.08rem;
  height: auto;
  transform: translateY(-50%);
  opacity: 0;
}
.tree-title__decor.left {
  left: 0.06rem;
}
.tree-title__decor.right {
  right: 0.06rem;
}
.tree-ball {
  position: absolute;
  width: 0.14rem;
  height: 0.14rem;
  cursor: pointer;
  aspect-ratio: 1/1;
  opacity: 0;
  z-index: 2;
}
.tree-ball_top {
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
}
.tree-ball_left-top {
  top: 0.6rem;
  right: 7.39rem;
  transform: translate(0%, -50%);
}
.tree-ball_left {
  top: 2.5rem;
  left: 0;
  transform: translate(-50%, -100%);
}
.tree-ball_right-top {
  top: 0.6rem;
  left: 7.39rem;
  transform: translate(0%, -50%);
}
.tree-ball_right {
  top: 2.5rem;
  right: 0;
  transform: translate(50%, -100%);
}
.tree-ball span {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
  background: var(--color-fat-tuesday);
  border-radius: 50%;
  pointer-events: none;
}
.tree-ball span:not(:first-child) {
  opacity: 0;
}
.tree-wings {
  position: absolute;
  bottom: -1.22rem;
  left: 50%;
  width: 15.15rem;
  height: 5.04rem;
  max-height: 100vh;
  transform: translateX(-50%);
  opacity: 0;
  z-index: 1;
}
.tree-wings__item {
  position: absolute;
}
.tree-wings__item img {
  width: 100%;
  height: auto;
}
.tree-wings__center {
  position: absolute;
  top: 1.28rem;
  left: 50%;
  width: 1.34rem;
  transform: translateX(-50%);
}
.tree-wings__top-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 7.05rem;
  transform-origin: center right;
}
.tree-wings__top-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 7.05rem;
  transform-origin: center left;
}
.tree-wings__bottom-left {
  position: absolute;
  top: 2.586rem;
  left: 3.496rem;
  width: 3.9rem;
  transform-origin: top right;
}
.tree-wings__bottom-right {
  position: absolute;
  top: 2.586rem;
  right: 3.496rem;
  width: 3.9rem;
  transform-origin: top left;
}

.sound {
  position: fixed;
  bottom: 0.63rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.045rem;
  width: 0.44rem;
  aspect-ratio: 1/1;
  background: var(--color-bashful-pancy);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  z-index: 100;
}
.sound-item {
  width: 0.03rem;
  height: 0.1rem;
  border-radius: 0.03rem;
  background: var(--color-fat-tuesday);
}
.sound-item:nth-child(odd) {
  height: 0.15rem;
}