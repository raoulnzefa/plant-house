<template>
  <h1>All {{ productsType }}</h1>

  <FilterBlock
    v-if="!$store.state.isTabletScreen"
    @sort-products="getSortProducts"
    :filterType="productsType"
  />

  <div class="products-info">
    <div class="count-of-products">
      {{ filteredProducts.length + ' ' }}
      result{{ filteredProducts.length !== 1 ? 's' : '' }}
    </div>
  </div>

  <div class="products-area">
    <div
      class="products-area--card"
      :class="{ 'one-product': filteredProducts.length === 1 }"
      v-for="(product, index) in filteredProducts"
      :key="index"
    >
      <ShopCard :product="product" />
    </div>

    <div
      class="products-area--filler"
      v-show="filteredProducts.length % 3 !== 0"
    ></div>

    <div v-if="!filteredProducts.length" class="not-found">
      No products found :(
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

import ShopCard from '@/components/shop/ShopCard.vue';
import FilterBlock from '@/components/shop/FilterBlock.vue';

export default {
  name: 'Content Field',
  components: {
    ShopCard,
    FilterBlock,
  },

  props: {
    productsType: {
      type: String,
      default: 'plants',
    },
  },

  setup(props) {
    const store = useStore();
    const products = computed(() =>
      store.getters.getProductsByType(props.productsType)
    );

    const sortType = ref('No sort');

    let filteredProducts = computed(() =>
      store.getters.getFilteredProducts(
        sortType.value,
        products.value,
        props.productsType
      )
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

<style scoped lang="scss">
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

h1 {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  margin-top: 95px;
  margin-bottom: 25px;

  text-align: center;

  @include media('<=phone') {
    margin-top: 75px;
  }
}

h1::after {
  content: '';
  display: block;

  text-align: center;

  width: 80px;
  height: 2px;

  margin-top: 10px;

  background-color: $orange-color;
}

.products-info {
  margin: 25px 0;
}

.products-area {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 45px;
  width: 100%;

  @include media('<=930px') {
    // grid-template-columns: 1fr 1fr;
  }

  @include media('<=phone') {
    // grid-template-columns: 1fr;
  }

  &--card {
    margin-bottom: 45px;
  }

  &--filler {
    min-width: 280px;
  }

  .one-product {
    justify-self: flex-start;
  }
}

.card {
  margin-bottom: 25%;
  padding: 0 25px;

  @include media('<=tablet') {
    margin-bottom: 25px;
  }
}

.not-found {
  font-weight: bold;
  padding: 25px;
}
</style>
