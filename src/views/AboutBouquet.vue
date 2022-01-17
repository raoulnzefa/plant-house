<template>
  <div class="about-bouquet">
    <div class="header-image header-image--right">
      <img src="../assets/png/about_header.png" alt="plant-header" />
    </div>
    <div class="header-image header-image--left">
      <img src="../assets/png/about_header.png" alt="plant-header" />
    </div>

    <div class="info container">
      <div class="info--inner">
        <div class="slider-block">
          <div
            class="slider"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend.passive="onTouchEnd"
          >
            <div class="slider--container">
              <div
                class="slider-item"
                v-for="(image, index) in product.images"
                :key="index"
                :style="`background-image: url('${image}')`"
              ></div>
            </div>

            <div class="arrow-right--container" @click="toNextImage">
              <div class="slider--arrow-right">
                <img src="../assets/icons/arrow-right.png" alt="" />
              </div>
            </div>

            <div class="arrow-left--container" @click="toPreviousImage">
              <div class="slider--arrow-left">
                <img src="../assets/icons/arrow-left.png" alt="" />
              </div>
            </div>
          </div>

          <div class="slider-preview">
            <div
              class="slider-preview--item"
              v-for="(image, index) of product.images"
              :key="index"
              :data-count="index"
              @click="onMoveToDotImage"
              :style="{ 'background-image': `url(${image})` }"
            >
              <div class="inner"></div>
            </div>
          </div>
        </div>

        <div class="description">
          <Breadcrumb
            :routeInfo="{
              mainPage: 'Shop',
              subPage: {
                pathName: `Shop ${product.type}`,
                name: product.type,
              },
              currentPage: product.title,
            }"
          />

          <h1>{{ product.title }}</h1>

          <div class="price" v-if="!productPrice">
            From {{ product.priceInfo[0].price }}$
          </div>
          <div class="price" v-else>{{ productPrice }}$</div>

          <div class="size">
            <span class="title">Choose size:</span>

            <div class="size-item--container">
              <div
                class="size-item"
                v-for="(item, index) of product.details.size"
                :key="index"
                @click="onSetQuerySizeParam(item)"
                :data-size="item"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div
            class="quantity"
            v-if="productQuantity !== 0 && product.type === 'plants'"
          >
            <div class="title">Plants left:</div>
            <span>
              {{
                productQuantity && productQuantity !== 0
                  ? productQuantity
                  : 'choose size first'
              }}
            </span>
          </div>

          <div
            class="not-available"
            v-if="productQuantity === 0 && product.type === 'plants'"
          >
            Out of stock
          </div>

          <div class="horizontal-line"></div>

          <div class="button--add-to-the-cart">
            <button
              class="button"
              @click="onAddToCart"
              :disabled="productPrice === 0 || productQuantity === 0"
            >
              Add to Cart
              <div class="cart-icon"></div>
            </button>
          </div>

          <div class="details screen788">
            <span class="title">Some details</span>
            <p>
              {{ product.description }}
            </p>
          </div>

          <div class="more-details">
            <div class="pet-friendly" v-if="product.type === 'plants'">
              <span class="title">Pet friendly:</span>
              <span>{{ product.details.isPetFriendly ? 'Yes' : 'No' }}</span>
            </div>
            <div class="types-of-flowers" v-else>
              <span class="title">Flowers used: </span>
              <span
                v-for="(flower, index) of product.details.typesOfFlowers"
                :key="index"
                class="flowers-list"
              >
                {{
                  (index === 0 ? flower.toCapitalizeLetter() : flower) +
                    (index === product.details.typesOfFlowers.length - 1
                      ? '.'
                      : ',')
                }}
              </span>
            </div>
          </div>

          <div class="horizontal-line" v-if="product.type === 'plants'"></div>

          <div class="plant-care" v-if="product.type === 'plants'">
            <div class="title">Plant care</div>
            <div class="plant-care--list">
              <ul>
                <li v-for="(item, index) of product.plantCare" :key="index">
                  <div
                    class="icon"
                    :style="{ 'background-image': `url(${item.icon})` }"
                  ></div>
                  {{ item.description }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="details screen788-show">
        <span class="title">Some details</span>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
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
    const router = useRouter();
    const route = useRoute();

    const title = prop.product.title;
    const image = prop.product.image;
    const id = prop.product.id;
    const productPrice = ref(0);
    const productQuantity = ref('');
    const productSize = ref('');

    let payload = { title, price: productPrice, size: productSize, image, id };

    const onAddToCart = () => {
      store.commit('addCartItem', payload);
    };

    onMounted(() => {
      document.title = title.toCapitalizeLetter();

      // QUERY PARAM SIZE

      if (route.query.size) {
        setPriceInfoBySize(route.query.size);
      }

      watch(
        () => route.query,
        (value) => {
          if (route.name === 'About Bouquet') setPriceInfoBySize(value.size);
        }
      );

      // SLIDER
      sliderContainer = document.querySelector('.slider--container');

      setActiveDot();
    });

    // SET PRODUCT INFO BY SIZE

    const onSetQuerySizeParam = (size) => {
      router.push({ name: route.name, query: { size } });
    };

    const setActiveSizeClass = (size) => {
      const sizeItems = document.querySelectorAll('.size-item');
      Array.from(sizeItems).map((item) => {
        if (item.dataset.size === size) item.classList.add('active');
        else item.classList.remove('active');

        return item;
      });
    };

    const setPriceInfoBySize = (size) => {
      productSize.value = size;

      let matchedProductPriceInfo = prop.product.priceInfo.find(
        (item) => item.type === productSize.value
      );
      productPrice.value = matchedProductPriceInfo.price;
      productQuantity.value = matchedProductPriceInfo.quantity;

      setActiveSizeClass(size);
    };

    // SLIDER

    let sliderContainer = {};

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
        counter = -1;
      }

      let width = document.querySelector('.slider-item').clientWidth;

      counter++;
      sliderContainer.style.transform = `translate(-${width * counter}px)`;

      setActiveDot();
    };

    const toPreviousImage = () => {
      if (counter - 1 < 0) {
        counter = prop.product.images.length;
      }

      let width = document.querySelector('.slider-item').clientWidth;

      counter--;
      sliderContainer.style.transform = `translate(-${width * counter}px)`;

      setActiveDot();
    };

    const setActiveDot = () => {
      const imageDot = document.querySelectorAll('.slider-preview--item');

      Array.from(imageDot).forEach((dot) => {
        dot.classList.remove('active');

        if (+dot.dataset.count === counter) {
          dot.classList.add('active');
        }
      });
    };

    const onMoveToDotImage = ({ target }) => {
      counter = +target.closest('.slider-preview--item').dataset.count;

      let width = document.querySelector('.slider-item').clientWidth;

      sliderContainer.style.transform = `translate(-${width * counter}px)`;
      setActiveDot();
    };

    return {
      productPrice,
      productQuantity,

      onAddToCart,

      onSetQuerySizeParam,

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
  margin-top: 95px;

  @include media('<=tablet', '>phone') {
    margin-top: 80px;
  }
  @include media('<=phone') {
    margin-top: 100vw;
  }
}

.header-image {
  position: absolute;
  height: 70px;

  overflow: hidden;

  &--right {
    top: 0;
    right: 0;
    transform: scale(-1, 1) rotate(180deg);

    img {
      height: 255px;
    }
  }

  &--left {
    top: -10px;
    left: 0;
    transform: scale(-1, 1) rotate(-90deg);

    img {
      height: 70px;
    }
  }
}

.margin-right {
  margin-right: 8px;
}

h1 {
  margin: 0 0 25px;
  color: $font-color;

  @include media('<=phone') {
    margin-top: 0 !important;
  }
}

h1::before {
  @include media('<=tablet') {
    display: none;
  }
}

.title {
  display: block;

  max-width: 110px;
  min-width: 110px;
  width: 110px;

  margin-right: 15px;
  font-weight: bold;
}

.price {
  margin-bottom: 25px;

  font-size: 24px;
}

.size {
  display: flex;
  margin-bottom: 25px;

  &-item {
    text-transform: capitalize;
    margin-right: 15px;

    cursor: pointer;

    @include media('<=788px', '>630px') {
      margin-bottom: 8px;
      margin-right: 0;
    }
  }

  &-item:last-of-type {
    @include media('<=788px', '>630px') {
      margin-bottom: 0;
    }
  }

  &-item--container {
    display: flex;

    @include media('<=788px', '>630px') {
      max-width: 60px;
      flex-wrap: wrap;
    }
  }

  &-item::after {
    content: '';
    display: block;

    min-height: 1px;
    width: 0;

    margin-top: 3px;

    background-color: black;

    transition: all 0.2s linear;
  }

  &-item:hover::after {
    width: auto;
  }

  &-item.active::after {
    width: auto;
    background-color: $orange-color;
  }
}

.quantity {
  display: flex;
}

.not-available {
  color: red;
}

.info {
  display: flex;
  justify-content: space-between;

  flex-direction: column;

  &--inner {
    display: flex;

    @include media('<=630px') {
      flex-direction: column;
    }
  }

  .description {
    margin-left: 65px;
    transition: all 0.2s linear;
    width: 100%;

    @include media('<=630px') {
      margin-left: 0;
    }
  }

  .button {
    margin-top: 45px;
  }
}

.details {
  display: flex;
  margin-bottom: 25px;

  .title {
    line-height: 1.8;
    font-weight: bold;
  }
}

.pet-friendly,
.types-of-flowers {
  display: flex;
  margin-bottom: 45px;
}

.flowers-list {
  padding-right: 5px;
}

.plant-care {
  display: flex;
  margin-bottom: 25px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .icon {
    width: 25px;
    height: 25px;

    margin-right: 15px;

    background-size: contain;
    background-repeat: no-repeat;
  }
}

.slider {
  position: relative;
  overflow: hidden;

  min-width: $slider-width-ab;
  min-height: $slider-width-ab;

  max-width: $slider-width-ab;
  max-height: $slider-width-ab;

  @include media('<=930px', '>788px') {
    min-width: 350px;
    min-height: 350px;

    max-width: 350px;
    max-height: 350px;
  }

  @include media('<=788px', '>tablet') {
    min-width: 300px;
    min-height: 300px;

    max-width: 300px;
    max-height: 300px;
  }

  @include media('<=tablet', '>630px') {
    min-width: $slider-width-tablet;
    min-height: $slider-width-tablet;

    max-width: $slider-width-tablet;
    max-height: $slider-width-tablet;
  }

  @include media('<=630px', '>phone') {
    min-width: $container-width-630 - 30px;
    min-height: $container-width-630 - 30px;

    max-width: $container-width-630 - 30px;
    max-height: $container-width-630 - 30px;
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

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @include media('<=930px', '>788px') {
      min-width: 350px;
      min-height: 350px;

      max-width: 350px;
      max-height: 350px;
    }

    @include media('<=788px', '>tablet') {
      min-width: 300px;
      min-height: 300px;

      max-width: 300px;
      max-height: 300px;
    }

    @include media('<=tablet', '>630px') {
      min-width: $slider-width-tablet;
      min-height: $slider-width-tablet;

      max-width: $slider-width-tablet;
      max-height: $slider-width-tablet;
    }

    @include media('<=630px', '>phone') {
      min-width: $container-width-630 - 30px;
      min-height: $container-width-630 - 30px;

      max-width: $container-width-630 - 30px;
      max-height: $container-width-630 - 30px;
    }

    @include media('<=phone') {
      min-width: 100vw;
      min-height: 100vw;

      background-size: cover;
      background-position: center;
    }
  }

  .arrow-right--container,
  .arrow-left--container {
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;

    height: $slider-width-ab;
    cursor: pointer;

    @include media('<=930px', '>788px') {
      height: 350px;
    }

    @include media('<=788px', '>tablet') {
      height: 300px;
    }

    @include media('<=tablet', '>630px') {
      height: $slider-width-tablet;
    }

    @include media('<=630px', '>phone') {
      height: $container-width-630 - 30px;
    }

    @include media('<=phone') {
      height: 100vw;
    }
  }

  .arrow-right--container {
    justify-content: flex-end;
    right: 0;
    width: 60%;
  }

  .arrow-left--container {
    left: 0;
    width: 40%;
  }

  &--arrow-right,
  &--arrow-left {
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0.1;

    cursor: pointer;
    transition: opacity 0.2s linear;

    img {
      width: 25px;
      height: 25px;
    }

    @include media('<=phone') {
      display: none;
    }
  }

  &--arrow-left {
    margin-left: 5px;
  }

  &--arrow-right {
    margin-right: 5px;
  }

  .arrow-right--container:hover &--arrow-right,
  .arrow-left--container:hover &--arrow-left {
    opacity: 1;
  }
}

.slider-preview {
  display: flex;
  flex-wrap: wrap;

  margin-top: 15px;

  &--item {
    width: $slider-width-ab / 4 - 4px;
    height: $slider-width-ab / 4 - 4px;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    cursor: pointer;

    margin-right: 5px;
    margin-bottom: 5px;

    @include media('<=930px', '>788px') {
      width: 350px / 4 - 4px;
      height: 350px / 4 - 4px;

      margin-bottom: 25px;
    }

    @include media('<=788px', '>tablet') {
      width: 300px / 4 - 4px;
      height: 300px / 4 - 4px;

      margin-bottom: 25px;
    }

    @include media('<=tablet', '>630px') {
      width: $slider-width-tablet / 4 - 4px;
      height: $slider-width-tablet / 4 - 4px;

      margin-bottom: 25px;
    }

    @include media('<=630px', '>phone') {
      width: ($container-width-630 - 30px) / 4 - 4px;
      height: ($container-width-630 - 30px) / 4 - 4px;

      margin-bottom: 25px;
    }

    @include media('<=phone') {
      width: ($container-width-phone - 30px) / 4 - 4px;
      height: ($container-width-phone - 30px) / 4 - 4px;

      margin-bottom: 25px;
    }

    &:nth-child(4n + 4) {
      margin-right: 0;
    }

    .inner {
      height: 100%;
      width: 100%;

      border: 3px solid inherit;

      transition: all 0.2s linear;

      @include media('<=phone') {
        border: 2px solid inherit;
      }
    }
  }

  &--item:hover .inner {
    background-color: rgba(0, 0, 0, 0.301);
  }

  &--item.active .inner {
    border: 3px solid $orange-color;

    @include media('<=phone') {
      border: 2px solid $orange-color;
    }
  }

  &--item.active:hover .inner {
    background-color: inherit;
  }
}

.horizontal-line {
  margin-bottom: 25px;
}

.button--add-to-the-cart {
  margin-bottom: 25px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0 !important;

    width: 100%;
    padding: 25px 0;

    border-radius: 0;
    border-color: $green-color;

    font-weight: bold;
    font-size: 16px;
  }

  button:hover {
    background-color: $green-color-light;
  }

  button:disabled {
    border-color: grey;
    color: grey;
    cursor: not-allowed;
  }

  button:disabled:hover {
    background-color: $background-color;
  }

  .cart-icon {
    min-width: 25px;
    min-height: 25px;

    margin-left: 10px;

    background-image: url('../assets/icons/cart-icon.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.screen788 {
  @include media('<=788px', '>630px') {
    display: none;
  }
}

.screen788-show {
  display: none;

  @include media('<=788px', '>630px') {
    display: block;
    margin-bottom: 75px;
  }
}
</style>
