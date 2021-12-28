<template>
  <header>
    <div
      class="header"
      v-if="$route.name === 'Home' || $store.state.isTabletScreen"
    >
      <div class="container">
        <div class="logo" v-if="!$store.state.isTabletScreen">
          Plant House
        </div>

        <Menu />
      </div>
    </div>

    <ScrollMenu
      v-if="$store.state.isScrollMenu && !$store.state.isTabletScreen"
    />
  </header>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

import ScrollMenu from '../page/ScrollMenu.vue';
import Menu from '@/components/page/Menu.vue';

export default {
  name: 'Header',
  components: {
    Menu,
    ScrollMenu,
  },

  setup() {
    const store = useStore();

    return {
      isScrollMenu: computed(() => store.state.isScrollMenu),
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
// @import '@/style/media/breakpoints.scss';
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0;
}

.header {
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;

  padding: 20px 15px 0;

  z-index: 9999;
}

.logo {
  padding: 0;

  line-height: 1;
  font-size: 24px;
}

.logo::after {
  content: '';
  display: block;

  min-height: 1px;
  width: 100%;
  margin-top: 5px;

  background-color: $font-color;
}
</style>
