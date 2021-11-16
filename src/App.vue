<template class="app">
  <div class="container">
    <header class="header">
      <div class="bgc" v-show="$store.state.isHomePage">
        <div class="gradient"></div>
      </div>
      <div v-show="$store.state.isHomePage || $store.state.isTabletScreen">
        <div class="logo" style="padding-bottom: 25px;">
          ~ Flower Home ~
        </div>
      </div>
      <Menu />
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>

  <div
    v-if="$store.state.isTabletScreen && $route.name !== 'My Cart'"
    class="app--shopping-bag"
    @click="$router.push({ name: 'My Cart' })"
  >
    <div class="shopping-bag"></div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/page/Footer.vue';
import Menu from '@/components/page/Menu.vue';

export default {
  components: {
    Footer,
    Menu,
  },
};
</script>

<style lang="scss">
@import '../src/style/reset.css';
@import '../src/style/index.scss';

@import '../src/style/variables.scss';
@import '@/style/media/breakpoints.scss';

html,
body {
  @include media('<=phone') {
    overflow-x: hidden;
  }
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;

  .bgc,
  .gradient {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 180px;
  }

  .bgc {
    background: url('../src/assets/img/back-flowers.jpeg') no-repeat;
    z-index: -1;
  }

  .gradient {
    background: rgb(238, 237, 233);
    background: linear-gradient(
      0deg,
      rgba(238, 237, 233, 1) 11%,
      rgba(238, 237, 233, 0.7441351540616247) 68%,
      rgba(238, 237, 233, 0.5144432773109244) 100%
    );
  }
}

.app--shopping-bag {
  position: fixed;
  bottom: 25px;
  right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  border-radius: 50%;
  background-color: $accent-color;

  .shopping-bag {
    width: 25px;
    height: 25px;

    background-image: url('../src/assets/icons/shopping-bag.png');
    background-size: contain;
  }
}

h1 {
  @include media('<=tablet') {
    margin: 85px 0 35px;
  }
}
</style>

<style lang="scss" scoped>
@import '../src/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.logo {
  @include media('<=tablet') {
    position: fixed;

    top: 25px;
    right: 25px;

    font-size: 35px;
    color: $primary-color-dark;

    margin: 0;
    padding: 0;

    z-index: 1000;
  }
}
</style>
