<template>
  <div class="shop">
    <h1>Shop</h1>
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
import { useStore } from 'vuex';
import { computed, onBeforeMount } from 'vue';

export default {
  name: 'Shop',
  components: {
    ShopCard,
  },
  setup() {
    const store = useStore();
    // onBeforeMount(() => {
    //   store.dispatch('getProducts');
    // });
    return {
      products: computed(() => store.state.products),
    };
  },
};
</script>

<style lang="scss" scoped>
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
