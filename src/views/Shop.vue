<template>
  <div class="shop">
    <div class="container">
      <h1 v-if="$route.name === 'Shop'">Shop</h1>

      <div class="choose-product" v-if="$route.name === 'Shop'">
        <h2>Choose category you need</h2>
        <div class="choose-product--inner">
          <div class="choose-product--item">
            <router-link class="plants" :to="{ name: 'Shop plants' }">
              <span>Plants</span>
              <div class="image"></div>
            </router-link>
          </div>
          <div class="choose-product--item">
            <router-link class="bouquets" :to="{ name: 'Shop flowers' }">
              <span>Flowers</span>
              <div class="image"></div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- <p class="info">
        The entire assortment of bouquets can be viewed on this page
      </p> -->

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ShopCard from '@/components/shop/ShopCard.vue';
import FilterBlock from '@/components/shop/FilterBlock.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

export default {
  name: 'Shop',
  components: {
    ShopCard,
    FilterBlock,
  },

  setup() {
    document.title = 'Shop';

    const store = useStore();
    const products = computed(() => store.state.products);
    let sortType = ref('No sort');

    let filteredProducts = computed(() =>
      store.getters.getFilteredProducts(sortType.value)
    );

    const getSortProducts = (sortTypeEmit) => {
      sortType.value = sortTypeEmit;
    };

    return {
      products,
      getSortProducts,
      filteredProducts,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/media/breakpoints.scss';
@import '@/style/variables.scss';

h1 {
  margin-top: 95px;
  margin-bottom: 25px;
  @include media('<=phone') {
    margin-top: 75px;
  }
}

h2 {
  text-align: center;
}

p {
  margin-top: -50px;
  margin-bottom: 15px;
}

.info {
  margin-bottom: 25px;
}

.choose-product {
  margin-bottom: 55px;

  &--inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &--item {
    height: 105px;
    min-width: 49%;

    border: 2px solid $orange-color;
  }

  .plants,
  .bouquets {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    color: $font-color;
    font-weight: bold;

    transition: all 0.2s linear;
    cursor: pointer;
  }

  .image {
    width: 45px;
    height: 45px;

    margin-left: 8px;

    background-size: contain;
    transition: all 0.2s linear;
  }

  .plants .image {
    background-image: url('../assets/icons/shop/plant.svg');
  }

  // .plants:hover .image {
  //   background-image: url('../assets/icons/shop/plant-hover.png');
  // }

  .bouquets .image {
    background-image: url('../assets/icons/shop/flower.svg');
  }

  // .bouquets:hover .image {
  //   background-image: url('../assets/icons/shop/flower-hover.png');
  // }

  .plants:hover,
  .bouquets:hover {
    background-color: $orange-color-light;
  }
}
</style>

<style lang="scss">
@import '@/style/media/breakpoints.scss';
</style>
