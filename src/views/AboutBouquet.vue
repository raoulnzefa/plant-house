<template>
  <div class="about-bouquet">
    <div class="info">
      <Breadcrumb
        :routeInfo="{
          mainPage: 'Shop',
          currentPage: product.title,
        }"
      />

      <div class="info--inner">
        <div class="description">
          <h1>{{ product.title }}</h1>
          <p>
            {{ product.description }}
          </p>
          <div class="button--continue">
            <button class="button" @click="onAddToCart">Add to the Cart</button>
          </div>
        </div>

        <div
          class="slider"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <div class="slider--container">
            <div
              class="slider-item"
              v-for="(image, index) in product.images"
              :key="index"
              :style="`background-image: url('${image}')`"
            ></div>
          </div>
          <div class="slider--images-counter">
            <div
              class="image-dot"
              v-for="(_, index) in product.images"
              :key="index"
              :data-count="index"
              @click="onMoveToDotImage"
            ></div>
          </div>
          <div class="slider--arrow-right" @click="toNextImage"></div>
          <div class="slider--arrow-left" @click="toPreviousImage"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watch, toRefs, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { toKebabCase } from '@/modules/toKebabCase.js';
import Breadcrumb from '@/components/page/Breadcrumb.vue';

export default {
  name: 'About Bouquet',
  props: {
    product: {
      type: Object,
    },
  },

  components: {
    Breadcrumb,
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

    // SLIDER

    let sliderContainer = {};

    onMounted(() => {
      sliderContainer = document.querySelector('.slider--container');

      setActiveDot();
    });

    let xStart = null,
      yStart = null;
    let leftSwipe = false,
      rightSwipe = false;

    const onTouchStart = (event) => {
      xStart = event.touches[0].clientX;
      yStart = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      let xEnd = event.touches[0].clientX,
        yEnd = event.touches[0].clientY;

      let xDiff = xStart - xEnd,
        yDiff = yStart - yEnd;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        leftSwipe = xDiff > 0;
        rightSwipe = xDiff < 0;
      }

      if (rightSwipe || leftSwipe) {
        event.preventDefault();
      }
    };

    const onTouchEnd = () => {
      if (leftSwipe) {
        toNextImage();
      } else if (rightSwipe) {
        toPreviousImage();
      }

      leftSwipe = false;
      rightSwipe = false;
    };

    let counter = 0;

    const toNextImage = () => {
      if (counter + 1 > prop.product.images.length - 1) {
        return;
      }

      let width = document.querySelector('.slider-item').clientWidth;

      counter++;
      sliderContainer.style.transform = `translate(-${width * counter}px)`;

      setActiveDot();
    };

    const toPreviousImage = () => {
      if (counter - 1 < 0) {
        return;
      }

      let width = document.querySelector('.slider-item').clientWidth;

      counter--;
      sliderContainer.style.transform = `translate(-${width * counter}px)`;

      setActiveDot();
    };

    const setActiveDot = () => {
      const imageDot = document.querySelectorAll('.image-dot');

      Array.from(imageDot).forEach((dot) => {
        dot.classList.remove('active');

        if (+dot.dataset.count === counter) {
          dot.classList.add('active');
        }
      });
    };

    const onMoveToDotImage = ({ target }) => {
      counter = +target.dataset.count;

      let width = document.querySelector('.slider-item').clientWidth;

      sliderContainer.style.transform = `translate(-${width * counter}px)`;
      setActiveDot();
    };

    return {
      onAddToCart,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onMoveToDotImage,
      toPreviousImage,
      toNextImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

a {
  color: $primary-color;
  cursor: pointer;
  text-decoration: underline;
}

.about-bouquet {
  @include media('<=tablet', '>phone') {
    margin-top: 80px;
  }
  @include media('<=phone') {
    margin-top: 110vw;
  }
}

.margin-right {
  margin-right: 8px;
}

h1 {
  margin: 0 0 35px;
  color: $primary-color-dark;
}

h1::before {
  @include media('<=tablet') {
    display: none;
  }
}

.info {
  display: flex;
  justify-content: space-between;

  flex-direction: column;

  &--inner {
    display: flex;
  }

  .description {
    margin-right: 65px;

    @include media('<=phone') {
      margin-right: 0;
    }
  }

  .button {
    margin-top: 45px;
  }
}

.slider {
  position: relative;
  overflow: hidden;

  min-width: $slider-width-ab;
  min-height: $slider-width-ab;

  max-width: $slider-width-ab;
  max-height: $slider-width-ab;

  @include media('<=tablet', '>phone') {
    min-width: $slider-width-tablet;
    min-height: $slider-width-tablet;

    max-width: $slider-width-tablet;
    max-height: $slider-width-tablet;
  }

  @include media('<=phone') {
    position: absolute;
    top: 0;
    left: 0;

    min-width: 100vw;
    min-height: 100vw;

    max-width: 100vw;
    max-height: 100vw;
  }

  &--container {
    display: flex;

    width: 100%;
    transition: all 0.3s ease-in;
  }

  &-item {
    min-width: $slider-width-ab;
    min-height: $slider-width-ab;

    background-size: contain;

    @include media('<=tablet', '>phone') {
      min-width: $slider-width-tablet;
      min-height: $slider-width-tablet;

      max-width: $slider-width-tablet;
      max-height: $slider-width-tablet;
    }

    @include media('<=phone') {
      min-width: 100vw;
      min-height: 100vw;

      background-size: contain;
    }
  }

  &--images-counter {
    position: absolute;

    display: flex;

    bottom: 20px;
    left: 50%;

    transform: translateX(-50%);
    z-index: 100;

    @include media('<=phone') {
      top: 93vw;
      left: 50vw;
    }
  }

  .image-dot {
    height: 8px;
    width: 8px;

    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.288);

    margin-right: 8px;

    transition: all 0.3s linear;

    cursor: pointer;

    &.active {
      background-color: $accent-color;
    }
  }

  .image-dot:last-of-type {
    margin-right: 0;
  }

  &--arrow-right,
  &--arrow-left {
    position: absolute;
    top: 50%;

    width: 25px;
    height: 25px;
    opacity: 0.3;

    background-size: contain;

    cursor: pointer;
    transition: opacity 0.2s linear;

    @include media('<=phone') {
      display: none;
    }
  }

  &--arrow-left {
    left: 5px;
    background-image: url('../assets/icons/arrow-left.png');
    transform: translateY(-50%);
  }

  &--arrow-right {
    right: 5px;
    background-image: url('../assets/icons/arrow-right.png');

    transform: translateY(-50%);
  }

  &--arrow-right:hover,
  &--arrow-left:hover {
    opacity: 0.8;
  }
}

.button--continue {
  display: flex;
  justify-content: center;
}
</style>
