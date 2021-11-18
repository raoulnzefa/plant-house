<template>
  <div class="shop">
    <h1>Shop</h1>
    <FilterBlock
      @onSelectOption="getSelectedOptions"
      v-if="!$store.state.isTabletScreen"
    />
    <p>The entire assortment of bouquets can be viewed on this page</p>

    <div class="products-area">
      <ShopCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        class="margin-bottom"
      />
    </div>
  </div>
</template>

<script>
import ShopCard from '@/components/shop/ShopCard.vue';
import FilterBlock from '@/components/shop/FilterBlock.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
// import { filterProducts } from '@/modules/shop/filterProducts.js';

export default {
  name: 'Shop',
  components: {
    ShopCard,
    FilterBlock,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    const selectedOptions = ref([]);
    let filteredProducts = [];

    const getSelectedOptions = (selected) => {
      selectedOptions.value = selected;

      filteredProducts = filterProducts(
        selectedOptions.value,
        Array.from(products.value)
      );
    };

    return {
      getSelectedOptions,
      filteredProducts,
      products,
      selectedOptions,
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
  margin-bottom: 25px;
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
