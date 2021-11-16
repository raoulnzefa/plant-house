<template>
  <div :class="{ 'filler-block': isScrollMenu && !isTabletScreen }"></div>

  <div class="nav" :class="{ 'nav-scroll': isScrollMenu && !isTabletScreen }">
    <div v-show="isTabletScreen" class="menu-icon--block">
      <div class="menu-icon--container">
        <div class="menu-icon" @click="onOpenMenu"></div>
        <div class="logo logo--mobile">~ Flower Home ~</div>
      </div>
    </div>
    <div
      class="nav--inner"
      :class="{ 'nav--inner--scroll': isScrollMenu && !isTabletScreen }"
    >
      <div
        class="nav-item"
        :class="{ 'nav-item--scroll': isScrollMenu && !isTabletScreen }"
      >
        <div
          class="logo"
          @click="$router.push({ name: 'Home' })"
          v-if="isScrollMenu || isTabletScreen"
        >
          ~ Flower Home ~
        </div>
        <router-link
          v-for="(item, index) of menu"
          :key="index"
          :to="{ name: item }"
        >
          {{ item }}
        </router-link>

        <router-link
          :to="{ name: 'My Cart' }"
          v-if="!isScrollMenu || isTabletScreen"
        >
          <div class="cart-menu display-flex">
            <span style="margin-right: 5px">Cart</span>
            <div class="cart-icon--relative">
              <div class="cart-icon-container"></div>
              <div class="cart-menu--counter" v-show="cartMenuCounter">
                {{ cartMenuCounter }}
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div
        v-if="isScrollMenu && !isTabletScreen"
        class="nav-item nav-item--scroll"
      >
        <router-link :to="{ name: 'My Cart' }">
          <div class="cart-menu display-flex">
            <span style="margin-right: 5px">Cart</span>
            <div class="cart-icon-container"></div>
            <div class="cart-menu--counter" v-show="cartMenuCounter">
              {{ cartMenuCounter }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div v-if="!isScrollMenu && !isTabletScreen" class="horizontal-line"></div>
  <div id="menu-observer" v-show="isHomePage"></div>
</template>

<script>
import { computed, onMounted, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  name: 'Menu',

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

      menuBlock = document.querySelector('.nav');

      window.addEventListener('resize', () => {
        store.commit('changeIsTabletScreen', innerWidth <= 768);
      });
    });

    let isMenuOpen = false;

    const onOpenMenu = ({ target }) => {
      isMenuOpen = !isMenuOpen;

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
          target
            .closest('.menu-icon--container')
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

    watch(
      () => route.path,
      () => {
        menuBlock.classList.remove('open-menu');
        document
          .querySelector('.menu-icon')
          .classList.remove('menu-icon--open');
      }
    );

    return {
      menu: computed(() => store.state.menu),
      cartMenuCounter: computed(() => store.state.cart.length),
      isScrollMenu,
      isHomePage,
      isTabletScreen,

      onOpenMenu,
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

.display-flex {
  display: flex;
  align-items: center;
}

.filler-block {
  height: 50px;
  width: 1px;
}

.nav {
  width: 60%;
  margin: 0 auto;

  font-weight: bolder;

  z-index: 10000;

  &-scroll {
    position: fixed;
    top: 0;

    width: 100%;

    background-color: $primary-color-light;

    backdrop-filter: blur(0.5rem);
    animation: fromToptoBottom 1s;
  }

  &--inner--scroll {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 5px 40px;
  }

  &-item {
    display: flex;
    justify-content: space-between;
  }

  &-item--scroll {
    align-items: center;
  }

  a {
    padding: 10px 15px;
    color: $font-color;

    transition: all 0.2s linear;
  }

  a::after {
    content: '';
    display: block;
    width: 100%;
    min-height: 2px;
    background-color: none;
    margin-top: 5px;
  }

  a.router-link-active::after {
    background-color: $primary-color;
  }

  a.router-link-active:hover {
    color: $font-color;
  }

  a:visited {
    color: $font-color;
  }

  a:hover {
    color: $accent-color;
  }

  @include media('<=tablet') {
    position: fixed;
    top: 0;
    left: -$menu-width-tablet - 10px;

    width: $menu-width-tablet;
    min-height: 100vh;
    margin: 0;

    background-color: $primary-color-light;
    background-size: cover;

    transition: left 0.4s ease-out;

    &--inner {
      backdrop-filter: blur(0.8rem);
      height: 100vh;
    }

    &-item {
      flex-direction: column;
      text-align: center;
    }

    a {
      padding: 20px 15px;
    }

    a:hover {
      color: $font-color;
    }

    a::after {
      min-height: 0px;
    }

    a:last-of-type {
      align-self: center !important;
      width: 100%;

      cursor: pointer;
    }

    a.router-link-active {
      color: $primary-color-dark;
    }

    a.router-link-active:hover {
      color: $primary-color-dark;
    }

    a.router-link-active::after {
      min-height: 0;
    }

    .logo {
      margin: 45px 0 25px;
    }

    .display-flex {
      justify-content: center;
    }

    .cart-icon--relative {
      position: relative;
    }
  }

  @include media('<=phone') {
    left: -$menu-width-phone - 10px;

    width: $menu-width-phone;
  }
}

.menu-icon--block {
  position: fixed;
  top: 0;
  left: 0;

  background-color: $background-color-light;
  backdrop-filter: blur(0.2rem);
}

.menu-icon--container {
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;

  padding: 10px 15px;

  transition: all 0.4s ease-out;
}

.menu-icon {
  width: 35px;
  height: 35px;

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

  font-family: Italianno, cursive;
  cursor: pointer;

  &--mobile {
    @include media('<=tablet') {
      font-size: 32px;
      color: $primary-color-dark;

      margin: 0 !important;
      padding: 0;
      padding-top: 5px;

      font-weight: bold;

      z-index: 1000;
    }
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

<style>
.bgc--green {
  background-color: green;
}

.bgc--red {
  background-color: red;
}
</style>
