<template>
  <nav class="nav nav-scroll">
    <div class="nav--inner nav--inner--scroll">
      <div class="display-flex">
        <div class="logo" @click="$router.push({ name: 'Home' })">
          Plant House
        </div>
        <div
          class="nav-item nav-item--scroll"
          v-for="(item, index) of menu"
          :key="index"
        >
          <router-link :to="{ name: item.name }">
            <div class="nav-item--container">
              {{ item.name }}
              <div class="menu-arrow" v-if="item.submenu.length"></div>
            </div>
          </router-link>
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
      </div>

      <div class="nav-item nav-item--scroll">
        <router-link :to="{ name: 'My Cart' }">
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
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Scroll Menu',

  setup() {
    const store = useStore();

    return {
      isTabletScreen: computed(() => store.state.isTabletScreen),
      menu: computed(() => store.state.menu),
      cartMenuCounter: computed(() => store.state.cart.length),
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.display-flex {
  display: flex;
  align-items: center;
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
  width: 60%;
  margin: 0 auto;

  font-weight: bolder;

  z-index: 10000;

  &-scroll {
    position: fixed;
    top: 0;

    min-width: 100vw;

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
    position: relative;
    z-index: 505;

    display: flex;
    flex-direction: column;

    &--container {
      display: flex;
      align-items: center;
    }
  }

  &-item:hover .menu-arrow {
    transform: rotate(-90deg);
  }

  &-item--scroll {
    align-items: center;
  }

  a {
    padding: 10px 15px;
    color: $font-color;

    transition: all 0.2s linear;
  }

  a::after,
  .logo::after {
    content: '';
    display: block;

    width: 100%;
    min-height: 1px;
    background-color: none;
    margin-top: 5px;

    transition: background-color 0.2s linear;
  }

  &-item:hover a {
    color: $orange-color !important;
  }

  a.router-link-active::after {
    background-color: $font-color;
  }

  a.router-link-active:hover {
    color: $font-color !important;
  }

  a:visited {
    color: $font-color;
  }
}

.submenu {
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 500;

  max-height: 0;
  overflow: hidden;

  transform: translate(-50%, 100%);

  transition: max-height 0.2s;

  &--inner {
    border: 2px solid $font-color;
    background-color: $background-color;
    border-radius: 2px;
  }

  &-item {
    padding: 20px 25px;
    font-weight: normal;

    cursor: pointer;
    transition: background-color 0.2s linear;
  }

  &-item:hover {
    background-color: $green-color-light;
  }
}

.nav-item:hover .submenu {
  max-height: 120px;
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
  padding: 0;

  line-height: 1;
  font-size: 22px;
  margin-right: 25px;
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
