<template>
  <div>
    <nav class="nav">
      <div v-show="isTabletScreen" class="menu-icon--block">
        <div class="menu-icon--container">
          <div class="menu-icon" @click="onOpenMenu"></div>

          <div class="logo--mobile">Plant House</div>

          <div>
            <router-link :to="{ name: 'My Cart' }">
              <div class="cart-menu display-flex">
                <div class="cart-icon--relative">
                  <div class="cart-icon-container"></div>
                  <div class="cart-menu--counter" v-show="cartMenuCounter">
                    {{ cartMenuCounter }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="nav--inner">
        <div
          class="nav-item"
          v-for="(item, index) of menu"
          :key="index"
          @click="openSubmenu"
        >
          <router-link
            v-if="
              (isTabletScreen && item.submenu.length === 0) || !isTabletScreen
            "
            :to="{ name: item.name }"
          >
            <div class="nav-item--container">
              {{ item.name }}
              <div class="menu-arrow" v-if="item.submenu.length"></div>
            </div>
          </router-link>

          <div
            v-else
            class="submenu-mobile-title "
            :class="{ 'nav-item--container': !isTabletScreen }"
          >
            {{ item.name }}
            <div class="menu-arrow"></div>
          </div>

          <div class="submenu" v-if="item.submenu.length">
            <div class="submenu--inner">
              <div
                class="submenu-item"
                v-for="(subItem, subIndex) of menu[index].submenu"
                :key="subIndex"
                @click="$router.push({ name: `Shop ${subItem.toLowerCase()}` })"
              >
                {{ subItem }}
              </div>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <router-link :to="{ name: 'My Cart' }">
            <div class="cart-menu display-flex">
              <span style="margin-right: 5px" v-if="isTabletScreen">Cart</span>
              <div class="cart-icon--relative">
                <div class="cart-icon-container"></div>
                <div class="cart-menu--counter" v-show="cartMenuCounter">
                  {{ cartMenuCounter }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
    <div id="menu-observer" v-show="isHomePage"></div>
  </div>
</template>

<script>
import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import ScrollMenu from '../page/ScrollMenu.vue';

export default {
  name: 'Menu',
  components: {
    ScrollMenu,
  },

  setup() {
    const store = useStore();
    const route = useRoute();

    const isScrollMenu = computed(() => store.state.isScrollMenu);
    const isHomePage = computed(() => store.state.isHomePage);
    const isTabletScreen = computed(() => store.state.isTabletScreen);

    let menuBlock = {};

    onMounted(() => {
      const callbackObserverMenu = (entries) => {
        entries.forEach((entry) => {
          store.commit('changeMenuValue', !entry.isIntersecting);
        });
      };

      let observer = new IntersectionObserver(callbackObserverMenu, {
        threshold: 1,
      });

      observer.observe(document.querySelector('#menu-observer'));

      menuBlock = document.querySelector('nav');
    });

    let isMenuOpen = false;

    let xStart = null,
      yStart = null;
    let leftSwipe = false;

    const onTouchStart = (event) => {
      xStart = event.touches[0].clientX;
      yStart = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      let xEnd = event.touches[0].clientX,
        yEnd = event.touches[0].clientY;

      let xDiff = xStart - xEnd,
        yDiff = yStart - yEnd;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        leftSwipe = xDiff > 0;
      }
    };

    const onTouchEnd = () => {
      if (leftSwipe) {
        menuBlock.classList.toggle('open-menu');
        document
          .querySelector('.menu-icon--container')
          .classList.toggle('menu-icon--open');

        removeListeners();
      }
    };

    const removeListeners = () => {
      document.body.removeEventListener('touchstart', onTouchStart);
      document.body.removeEventListener('touchmove', onTouchMove);
      document.body.removeEventListener('touchend', onTouchEnd);

      isMenuOpen = false;
    };

    watch(
      () => route.path,
      () => {
        if (isTabletScreen.value) {
          menuBlock.classList.remove('open-menu');
          document
            .querySelector('.menu-icon--container')
            .classList.remove('menu-icon--open');
          isMenuOpen = false;

          removeListeners();
        }
      }
    );

    const onOpenMenu = ({ target }) => {
      isMenuOpen = !isMenuOpen;

      if (isMenuOpen) {
        document.body.addEventListener('touchstart', onTouchStart);
        document.body.addEventListener('touchmove', onTouchMove);
        document.body.addEventListener('touchend', onTouchEnd);
      } else {
        removeListeners();
      }

      menuBlock.classList.toggle('open-menu');
      target
        .closest('.menu-icon--container')
        .classList.toggle('menu-icon--open');
    };

    let animationTimeout = null;

    const openSubmenu = ({ target }) => {
      if (!isTabletScreen.value) return;

      const submenu = target.closest('.nav-item').lastChild;

      if (submenu.nodeName === '#comment') return;

      const submenuClientHeight =
        submenu.children[0].offsetHeight * submenu.children.length;

      submenu.style.maxHeight = `${submenuClientHeight}px`;

      submenu.classList.toggle('open-submenu');

      clearTimeout(animationTimeout);

      if (submenu.classList.contains('open-submenu')) {
        animationTimeout = setTimeout(() => {
          submenu.style.maxHeight = 'none';
        }, 500);
      } else {
        animationTimeout = setTimeout(() => {
          submenu.style.maxHeight = 0;
        }, 0);
      }

      const menuArrows = document.querySelectorAll('.menu-arrow');

      Array.from(menuArrows).map((item) => {
        if (item.closest('.nav-item') === target.closest('.nav-item')) {
          item.classList.toggle('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    return {
      menu: computed(() => store.state.menu),
      cartMenuCounter: computed(() => store.state.cart.length),
      isScrollMenu,
      isHomePage,
      isTabletScreen,

      onOpenMenu,
      openSubmenu,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

#menu-observer {
  height: 1px;
}

.menu-arrow {
  display: inline-block;

  height: 15px;
  width: 15px;
  margin-left: 5px;

  background-image: url('../../assets/icons/arrow-right.png');
  background-size: contain;

  transform: rotate(90deg);
  transition: transform 0.2s ease-in;
}

.menu-arrow.active {
  transform: rotate(-90deg);
}

.nav {
  width: 30%;

  font-weight: bolder;

  z-index: 10000;

  @include media('<=tablet') {
    position: fixed;
    top: 0;
    left: -$menu-width-tablet - 10px;

    width: $menu-width-tablet;
    min-height: 100vh;
    margin: 0;

    transition: left 0.4s ease-out;
  }

  @include media('<=phone') {
    left: -$menu-width-phone - 10px;

    width: $menu-width-phone;
  }

  &--inner {
    display: flex;
    align-items: center;

    @include media('<=tablet') {
      flex-direction: column;
      align-items: center;

      backdrop-filter: blur(0.8rem);
      height: 100vh;

      padding-top: 45px;
    }
  }

  &-item {
    position: relative;
    z-index: 505;

    display: flex;
    flex-direction: column;

    @include media('<=tablet') {
      flex-direction: column;
      text-align: center;

      font-weight: bold;
    }

    &--container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-item:hover .menu-arrow {
    @include media('>tablet') {
      transform: rotate(-90deg);
    }
  }

  a,
  .submenu-mobile-title {
    padding: 10px 15px;
    color: $font-color;

    transition: color 0.2s linear;
    cursor: pointer;

    @include media('<=tablet') {
      padding: 20px 15px;
      margin-bottom: 25px;
    }
  }

  a::after {
    content: '';
    display: block;

    max-width: 100%;
    min-height: 1px;
    background-color: none;
    margin-top: 5px;

    transition: all 0.2s linear;

    @include media('<=tablet') {
      min-height: 0px;
    }
  }

  &-item:hover a {
    color: $orange-color !important;
  }

  a.router-link-active::after {
    background-color: $font-color;

    @include media('<=tablet') {
      min-height: 0;
    }
  }

  a.router-link-active {
    @include media('<=tablet') {
      color: $primary-color-dark;
    }
  }

  a.router-link-active:hover {
    color: $font-color !important;

    @include media('<=tablet') {
      color: $primary-color-dark;
    }
  }

  a:visited {
    color: $font-color;
  }

  a:last-of-type {
    @include media('<=tablet') {
      align-self: center !important;
      width: 100%;

      cursor: pointer;
    }
  }

  .logo {
    @include media('<=tablet') {
      margin: 45px 0 25px;
    }
  }

  .display-flex {
    @include media('<=tablet') {
      justify-content: center;
    }
  }

  .cart-icon--relative {
    @include media('<=tablet') {
      position: relative;
    }
  }
}

// SUBMENU

.submenu {
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 500;

  max-height: 0;
  overflow: hidden;

  transform: translate(-50%, 100%);

  transition: max-height 0.2s;

  @include media('<=tablet') {
    position: static;
    top: 0;
    left: 0;
    transform: translate(0, 0);

    margin-top: -25px;
    margin-bottom: 25px;

    transition: max-height 0.5s;
  }

  &--inner {
    border: 2px solid $font-color;
    background-color: $background-color;
    border-radius: 2px;

    @include media('<=tablet') {
      border-radius: 8px;
      border-width: 1px;
      border-color: $green-color;

      background-color: $orange-color-light;
    }
  }

  &-item {
    padding: 20px 25px;
    font-weight: normal;

    cursor: pointer;
    transition: all 0.2s linear;

    @include media('<=tablet') {
      padding: 20px 45px;
    }
  }

  &-item:hover {
    background-color: $green-color-light;
  }
}

.nav-item:hover .submenu {
  @include media('>tablet') {
    max-height: 120px;
  }
}

.menu-icon--block {
  position: fixed;
  top: 0;
  left: 0;

  backdrop-filter: blur(0.1rem);
}

.menu-icon--container {
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  width: 100vw;

  padding: 10px 15px;

  transition: all 0.4s ease-out;
}

.menu-icon {
  width: 30px;
  height: 30px;

  background-image: url('../../assets/icons/menu.png');

  background-size: contain;

  border-radius: 8px;

  cursor: pointer;

  z-index: 1000;
}

.menu-icon--open {
  left: $menu-width-tablet;

  @include media('<=phone') {
    left: $menu-width-phone;
  }
}

.open-menu {
  left: 0px;
}

.cart-menu {
  position: relative;

  @include media('<=tablet') {
    display: flex;
    align-items: center;
  }

  img {
    width: 21px;
  }

  &--counter {
    position: absolute;
    top: -10px;
    right: -10px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 12px;
    width: 12px;

    font-size: 8px;
    font-weight: bold;
    color: rgb(238, 237, 233);

    border-radius: 50%;
    background-color: $accent-color;

    animation: shake 3s infinite;
  }

  .cart-icon-container {
    height: 21px;
    width: 21px;

    background-image: url('../../assets/icons/cart-icon.png');
    background-size: contain;

    transition: all 0.2s linear;
  }
}

.logo {
  font-size: 35px;
  font-weight: normal;
  color: $font-color;
  padding: 0 15px;
  cursor: pointer;
}

.logo--mobile {
  @include media('<=tablet') {
    font-size: 20px;
    color: $font-color;

    margin: 0 !important;
    padding: 0;

    font-weight: bold;

    z-index: 1000;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    min-height: 1px;
    background-color: black;
    margin-top: 5px;
  }
}

.horizontal-line {
  margin-top: 15px;
  background-color: $primary-color-light;
}

.horizontal-line--scroll {
  margin-top: 0;
  background-color: $primary-color-light;
}

@keyframes fromToptoBottom {
  0% {
    top: -50px;
  }

  100% {
    top: 0;
  }
}

@keyframes shake {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }

  20%,
  40%,
  60%,
  80% {
    transform: scale(1.2) rotate(-10deg);
  }

  10%,
  30%,
  50%,
  70% {
    transform: scale(1.2) rotate(10deg);
  }
}
</style>
