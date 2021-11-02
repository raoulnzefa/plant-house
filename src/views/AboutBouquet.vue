<template>
  <div class="about-bouquet">
    <Breadcrumb
      :routeInfo="{
        mainPage: 'Shop',
        currentPage: product.title,
      }"
    />

    <div class="info">
      <div class="description">
        <h1>{{ product.title }}</h1>
        <p>
          {{ product.description }}
        </p>
        <button class="button" @click="onAddToCart">Add to the Cart</button>
      </div>

      <div class="slider">
        <div class="arrows">
          <img
            src="../assets/icons/arrow-left.png"
            alt="Arrow Left"
            class="arrow"
            @click="moveSlide('left')"
          />
          <img
            src="../assets/icons/arrow-left.png"
            alt="Arrow Right"
            class="arrow arrow-right"
            @click="moveSlide('right')"
          />
        </div>
        <div class="slider-items">
          <div
            class="slider-item"
            v-for="(image, index) of product.images"
            :key="index"
          >
            <img
              class="slider-image"
              :src="image"
              :alt="product.title + ' ' + index"
            />
          </div>
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

    const prepareSlider = (direction) => {
      const slidesContainer = document.querySelector('.slider-items');

      let sliderItems = document.querySelectorAll('.slider-item');

      if (direction === 'right') {
        let firstSlide = sliderItems[0];

        firstSlide.remove();
        slidesContainer.append(firstSlide);
      } else {
        let lastSlide = sliderItems[sliderItems.length - 1];

        lastSlide.remove();
        slidesContainer.prepend(lastSlide);
      }

      // setTimeout(() => {
      //   slidesContainer.style.transition = 'none';
      slidesContainer.style.left = -sliderItems[0].clientWidth + 'px';
      // }, 2000);
    };

    onMounted(prepareSlider);

    const moveSlide = (arrow = 'right') => {
      const slidesContainer = document.querySelector('.slider-items');

      let sliderItem = document.querySelector('.slider-item');
      const itemWidth = sliderItem.clientWidth;

      let slidesContainerLeft = +slidesContainer.style.left.replace('px', '');

      if (arrow === 'left') {
        slidesContainer.style.left = slidesContainerLeft + itemWidth + 'px';

        prepareSlider(arrow);
      } else {
        slidesContainer.style.left = slidesContainerLeft - itemWidth + 'px';

        prepareSlider(arrow);
      }
    };

    return {
      moveSlide,
      onAddToCart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
a {
  color: $primary-color;
  cursor: pointer;
  text-decoration: underline;
}

.margin-right {
  margin-right: 8px;
}

h1 {
  margin: 0 0 35px;
  color: $primary-color-dark;
}

.info {
  display: flex;
  justify-content: space-between;

  .description {
    margin-right: 65px;
  }

  .button {
    margin-top: 45px;
  }
}

.slider {
  position: relative;

  display: flex;
  align-items: center;
  min-width: $slider-width-ab;
  height: $slider-width-ab;
  overflow: hidden;

  &-items {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;

    // transition: all 0.1s ease-in;
  }

  &-image {
    width: $slider-width-ab;
  }

  .arrows {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;

    .arrow {
      width: 25px;
      height: 30px;
      opacity: 0.2;

      cursor: pointer;
      z-index: 100;
      margin-left: 18px;

      transition: opacity 0.1s linear;

      &:hover {
        opacity: 0.6;
      }

      &-right {
        transform: rotate(180deg);
        margin: 0 18px 0 0;
      }
    }
  }
}
</style>
