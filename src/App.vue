<template>
  <div class="container">
    <div class="header">
      <div class="bgc">
        <div class="gradient"></div>
      </div>
      <Header />
      <div class="nav">
        <router-link
          v-for="(item, index) of menu"
          :key="index"
          :to="{ name: item }"
        >
          {{ item }}
        </router-link>
      </div>
    </div>

    <div class="horizontal-line"></div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import Header from '@/components/page/Header.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    Header,
  },

  setup() {
    const store = useStore();

    return {
      menu: computed(() => store.state.menu),
    };
  },
};
</script>

<style lang="scss">
@import '../src/style/reset.css';
@import '../src/style/index.scss';
</style>

<style scoped lang="scss">
@import '../src/style/variables.scss';

.header {
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav {
    display: flex;
    justify-content: space-between;

    width: 60%;
    margin-bottom: 5px;

    a {
      padding: 10px 15px;
      border-radius: 10px;
      color: $font-color;

      transition: all 0.2s linear;
    }

    a.router-link-active::after {
      content: '';
      display: block;
      width: 100%;
      min-height: 2px;
      background-color: $primary-color;
      margin-top: 5px;
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
  }

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
    background: linear-gradient(
      0deg,
      rgba(247, 246, 241, 1) 17%,
      rgba(247, 246, 241, 0.8449754901960784) 56%,
      rgba(247, 246, 241, 0.738532913165266) 79%,
      rgba(247, 246, 241, 0.5172443977591037) 100%
    );
  }
}
</style>
