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
        <button>Add to card</button>
      </div>
    </div>
  </div>
</template>

<script>
import { toKebabCase } from '@/modules/toKebabCase.js';
export default {
  props: {
    product: {
      type: Object,
    },
  },
  setup() {
    return {
      toKebabCase,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.shop-card {
  height: 380px;
  width: 280px;
  // border: 1px solid black;
  cursor: pointer;

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
    border: 1px solid black;
    border-top: none;

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
    }
  }
}

.shop-card:hover .image {
  transform: scale(1.05);
}
</style>
