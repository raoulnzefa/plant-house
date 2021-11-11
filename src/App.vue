<template>
  <div class="container">
    <header class="header">
      <div class="bgc" v-show="$store.state.isHomePage">
        <div class="gradient"></div>
      </div>
      <div v-show="$store.state.isHomePage">
        <div class="logo" style="padding-bottom: 25px;">
          ~ Flower Home ~
        </div>
      </div>
      <Menu />
    </header>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
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
</style>

<style lang="scss">
@import '../src/style/variables.scss';

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
</style>
