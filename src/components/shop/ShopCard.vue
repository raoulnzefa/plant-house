<template>
  <div class="shop-card">
    <div class="shop-card__bestseller-tag" v-if="product.isBestseller">
      Bestseller
    </div>
    <div class="shop-card__image">
      <div
        class="image"
        ref="imgBlock"
        @click="
          $router.push({
            name: 'About Bouquet',
            params: { bouquet: toKebabCase(product.title) },
          })
        "
        :data-image-link="product.image"
      ></div>
    </div>

    <div class="shop-card__info">
      <h3>{{ product.title.toUpperCase() }}</h3>
      <div class="price">
        <span style="font-size: 14px">From</span>
        <span class="price__number"
          >{{ ' ' + product.priceInfo[0].price }}$</span
        >
      </div>
      <div class="hover-line"></div>
    </div>
  </div>
</template>

<script>
import { toKebabCase } from '@/modules/toKebabCase.js';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
    },
    withoutObserver: {
      type: Boolean,
      default: false,
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

    // lazy loading

    let imgBlock = ref(null);

    const handleImageDownloading = () => {
      let img = new Image();

      img.onload = function () {
        imgBlock.value.style.backgroundImage = `url(${image})`;
      };

      img.src = image;
    };

    onMounted(() => {
      if (prop.withoutObserver) {
        handleImageDownloading();
      }
    });

    return {
      toKebabCase,
      onAddToCart,
      store,
      imgBlock,
      handleImageDownloading,
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

  transition: all 0.2s linear;

  @include media('<=tablet') {
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
      margin-bottom: 20px;
    }
  }

  .shop-card__image {
    overflow: hidden;
  }

  .image {
    height: 280px;
    width: 100%;
    transition: all 0.2s linear;

    background-image: url('../../assets/img/shop/placeholder.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
  }

  .price {
    margin-top: 15px;

    .price__number {
      font-weight: bold;
    }
  }

  .shop-card__info {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 120px;
    border-bottom: 1px solid $primary-color-opacity;
    border-left: 1px solid $primary-color-opacity;

    padding-left: 15px;

    @include media('<=tablet') {
      display: block;
      text-align: center;

      padding-bottom: 45px;
      padding-left: 0;

      height: 100px;

      border-radius: 0 0 10px 10px;
      border: 1px solid $primary-color-opacity;
      border-top: none;
    }

    @include media('<=phone') {
      border-radius: 0 0 10px 10px;
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

  .shop-card__bestseller-tag {
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

  background-color: $orange-color;

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
