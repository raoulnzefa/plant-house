<template>
  <div class="shop">
    <h1>Shop</h1>
    <p class="info">
      The entire assortment of bouquets can be viewed on this page
    </p>

    <FilterBlock
      v-if="!$store.state.isTabletScreen"
      @sort-products="getSortProducts"
    />

    <div class="products-area">
      <ShopCard
        v-for="(product, index) in filteredProducts"
        :key="index"
        :product="product"
        class="margin-bottom"
      />

      <div v-if="!filteredProducts.length">No bouquets found :(</div>
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

h1 {
  @include media('<=phone') {
    margin-top: 75px;
  }
}

p {
  margin-top: -50px;
  margin-bottom: 15px;
}

.products-area {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
}

.margin-bottom {
  margin-bottom: 25%;
  @include media('<=tablet') {
    margin-bottom: 25px;
  }
}
</style>

<style lang="scss"></style>
