<template>
  <div class="home">
    <h1>Home</h1>
    <InfoBlock :id="1" />
    <InfoBlock :id="2" imgLocation="right" />
    <Bestsellers class="bestsellers" />

    <h2>“There are always flowers for those who want to see them.”</h2>
    <div class="horizontal-line--small"></div>
    <h3>~ Henri Matisse</h3>
    <div class="parent"></div>
    <DeliveryConfirmedModal v-show="$store.state.isShowModal" />
  </div>
</template>

<script>
import InfoBlock from '@/components/home/InfoBlock.vue';
import PhotoCollage from '@/components/home/PhotoCollage.vue';
import Bestsellers from '@/components/home/Bestsellers.vue';
import DeliveryConfirmedModal from '@/components/home/DeliveryConfirmedModal.vue';

export default {
  name: 'Home',
  components: {
    InfoBlock,
    PhotoCollage,
    Bestsellers,
    DeliveryConfirmedModal,
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.parent {
  margin-bottom: 130px;
}

h2 {
  font-family: Italianno, cursive;
  font-size: 45px;
  text-align: center;
  color: $font-color;

  margin-top: 120px;
  margin-bottom: 30px;
}

h3 {
  text-align: center;
  color: $primary-color-dark;
  margin: -25px 0 100px;
  font-weight: 300;
}

.bestsellers {
  margin: 100px 0;
}
</style>

<style lang="scss">
@import '@/style/media/breakpoints.scss';

h1 {
  @include media('<=phone') {
    font-size: 32px;
    margin-top: 75px !important;
    margin-bottom: 35px;
  }
}
</style>
