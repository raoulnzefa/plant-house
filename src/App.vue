<template class="app">
  <Header class="app-header" />
  <main>
    <router-view></router-view>
    <div
      v-if="
        $store.state.isTabletScreen &&
          $route.name !== 'My Cart' &&
          $route.name !== 'Delivery' &&
          $route.name !== 'Order Confirmation'
      "
      class="app--shopping-bag"
      @click="$router.push({ name: 'My Cart' })"
    >
      <div class="shopping-bag"></div>
    </div>
  </main>
  <Footer class="app-footer" />
</template>

<script>
import Footer from '@/components/page/Footer.vue';
import Header from '@/components/page/Header.vue';

import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    Footer,
    Header,
  },

  setup() {
    const store = useStore();

    onMounted(() => {
      window.addEventListener('resize', () => {
        store.commit('changeIsTabletScreen', innerWidth <= 768);
        store.commit('changeIsMobileScreen', innerWidth <= 425);
        store.commit('setInnerHeight', innerHeight);
      });
    });

    return {};
  },
};
</script>

<style lang="scss">
@import '../src/style/reset.css';
@import '../src/style/index.scss';

@import '../src/style/variables.scss';
@import '@/style/media/breakpoints.scss';
html {
  height: 100%;

  overflow: auto;
}

body {
  // for window.scrollTo
  height: 100%;

  @include media('<=phone') {
    position: relative;

    overflow-x: hidden;
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1 0 auto;
}

.app-footer,
.app-header {
  flex: 0 0 auto;
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
  z-index: 100;

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

  &::before {
    @include media('<=tablet') {
      content: '';
      display: inline-block;

      min-height: 25px;
      width: 2px;

      margin-right: 15px;

      background-color: $orange-color;
    }
  }
}

h3 {
  color: $primary-color-dark;
  font-weight: 300;
  text-transform: uppercase;
}
</style>
