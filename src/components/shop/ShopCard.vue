<template>
  <div class="shop-card">
    <div class="bestseller-tag" v-if="product.isBestseller">Bestseller</div>
    <div class="image--container">
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
    </div>

    <div class="info">
      <h3>{{ product.title.toUpperCase() }}</h3>
      <div class="price-and-add">
        <div class="price">{{ product.price }}$</div>
        <button v-if="$store.state.isTabletScreen" @click="onAddToCart">
          Add to cart
        </button>
      </div>
      <div class="hover-line"></div>
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
  position: relative;

  width: 280px;

  cursor: pointer;

  // border-radius: 10px;
  transition: all 0.2s linear;

  @include media('<=phone') {
    border-radius: 10px;
    overflow: hidden;
  }

  h3 {
    padding-top: 0;
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 18px;
    line-height: 1;

    @include media('<=tablet') {
      padding-top: 20px;
      margin-bottom: 25px;

      font-size: 20px;
    }
  }

  .image--container {
    overflow: hidden;

    // border-radius: 10px 10px 0 0;
  }

  .image {
    height: 280px;
    width: 100%;
    transition: all 0.2s linear;

    // border-radius: 10px 10px 0 0;
  }

  .info {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100px;
    border-bottom: 1px solid $primary-color-opacity;
    border-left: 1px solid $primary-color-opacity;

    padding-left: 15px;

    @include media('<=tablet') {
      display: block;
      text-align: center;
      padding-bottom: 45px;
      padding-left: 0;

      border-radius: 0 0 10px 10px;
      border: 1px solid $primary-color-opacity;
      border-top: none;
    }

    @include media('<=phone') {
      border-radius: 0 0 10px 10px;
    }

    .price-and-add {
      display: flex;
      justify-content: space-between;

      @include media('<=tablet') {
        padding: 0 15px 0;
      }
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

  .bestseller-tag {
    position: absolute;
    top: 15px;
    left: 0;

    padding: 5px 10px;
    color: $background-color;
    font-size: 12px;

    border-radius: 0 5px 5px 0;
    background-color: #9dad6f;

    z-index: 100;
  }
}

.hover-line {
  position: absolute;
  top: 0;
  right: 0;

  height: 0;
  width: 1px;

  // border-radius: 15px;

  background-color: $font-color;

  animation: 0.2s ease-in hideLine;

  @include media('<=tablet') {
    animation: none;
  }
}

.shop-card:hover .hover-line {
  height: inherit;
  animation: 0.2s ease-in showLine;

  @include media('<=tablet') {
    height: 0;
    animation: none;
  }
}

.shop-card:hover .image {
  transform: scale(1.05);
  @include media('<=tablet') {
    transform: none;
  }
}

@keyframes showLine {
  from {
    height: 0;
  }

  to {
    height: inherit;
  }
}

@keyframes hideLine {
  from {
    height: inherit;
  }

  to {
    height: 0;
  }
}
</style>
