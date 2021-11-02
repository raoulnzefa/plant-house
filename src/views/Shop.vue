<template>
  <div class="shop">
    <h1>Shop</h1>
    <FilterBlock @onSelectOption="getSelectedOptions" />
    {{ filteredProducts }}
    <!-- <p>the entire assortment of bouquets can be viewed on this page</p> -->
    <!-- {{ filteredProducts.length !== 0 ? filteredProducts : products }} -->
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

      // console.log(Array.from(products.value));

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
.shop {
  h1 {
    margin-bottom: 15px;
  }
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
}
</style>
