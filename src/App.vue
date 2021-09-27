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
  <Footer />
</template>

<script>
import Header from '@/components/page/Header.vue';
import Footer from '@/components/page/Footer.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    Header,
    Footer,
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
    background: rgb(238, 237, 233);
    background: linear-gradient(
      0deg,
      rgba(238, 237, 233, 1) 11%,
      rgba(238, 237, 233, 0.7441351540616247) 68%,
      rgba(238, 237, 233, 0.5144432773109244) 100%
    );
  }
}
</style>
