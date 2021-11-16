<template>
  <div class="shop-card">
    <div
      class="image"
      :style="
        `background: url(${product.image}) center center no-repeat; background-size: cover;`
      "
      @click="
        $router.push({
          name: 'About Bouquet',
          params: { bouquet: toKebabCase(product.title) },
        })
      "
    ></div>
    <div class="info">
      <h3>{{ product.title }}</h3>
      <div class="price-and-add">
        <div class="price">{{ product.price }}$</div>
        <button @click="onAddToCart">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { toKebabCase } from '@/modules/toKebabCase.js';
import { useStore } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
    },
  },

  setup(prop) {
    const store = useStore();

    const title = prop.product.title;
    const price = prop.product.price;
    const image = prop.product.image;
    const id = prop.product.id;

    let payload = { title, price, image, id };

    const onAddToCart = () => {
      store.commit('addCartItem', payload);
    };

    return {
      toKebabCase,
      onAddToCart,
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.shop-card {
  height: 380px;
  width: 280px;

  cursor: pointer;

  @include media('<=phone') {
    border-radius: 10px;
    overflow: hidden;
  }

  h3 {
    padding-top: 15px;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 300;
  }

  .image {
    height: 280px;
    width: 100%;
    transition: all 0.2s linear;
  }

  .info {
    height: 380px - 280px;
    border: 1px solid $primary-color-dark;
    border-top: none;

    border-radius: 0 0 10px 10px;

    .price-and-add {
      display: flex;
      justify-content: space-between;
      margin: 0 15px 0;
    }

    button {
      background-color: inherit;
      transition: color 0.2s linear;
      border: none;
      padding: 0;
    }

    button:hover {
      color: $accent-color;
      @include media('<=phone') {
        color: inherit;
      }
    }
  }
}

.shop-card:hover .image {
  transform: scale(1.05);
  @include media('<=phone') {
    transform: none;
  }
}
</style>
