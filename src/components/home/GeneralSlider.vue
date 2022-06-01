<template>
  <div id="general-slider" class="general-slider">
    <div class="block-item block-item--1" @click="moveSlide">
      <div class="block-item--1--container">
        <div
          class="block-image"
          v-for="(item, index) in generalHeaderSlider"
          :key="index"
          :style="`background-image: url(${item.sliderBlock.imgSrc})`"
        ></div>
      </div>
    </div>

    <div class="block-item block-item--2 info-block">
      <div class="block-item--2--container">
        <div
          class="info-block--inner"
          v-for="(item, index) in generalHeaderSlider"
          :key="index"
        >
          <h2>
            {{ item.blockInfo.header }}
          </h2>
          <p>
            {{ item.blockInfo.text }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="block-item block-item--3 shop-block"
      @click="$router.push({ name: 'Shop' })"
    >
      <div class="shop-block--inner">
        <h3>Discover more</h3>
      </div>
    </div>
    <div class="block-item block-item--4"></div>

    <div class="slider-block">
      <div
        v-for="(_, index) in generalHeaderSlider"
        :key="index"
        class="slider-counter"
        :class="{ active: index === 0 }"
        @click="moveSlide(index)"
      >
        <span>
          {{ index < 10 ? '0' + (index + 1) : index + 1 }}
        </span>
        <div class="timer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'General Slider',

  setup() {
    const store = useStore();

    let imageWidthSlider = 0,
      imageWidthInfo = 0,
      counter = 1;

    let timerConterID;

    const blockImagesLength = computed(
      () => store.state.generalHeaderSlider.length
    );

    const setSliderBlockPosition = () => {
      document.querySelector('.slider-block').style.left =
        document.querySelector('.block-item--1').clientWidth -
        document.querySelector('.slider-block').clientWidth -
        10 +
        'px';
    };

    const setSize = (blockImages, parentBlock) => {
      Array.from(blockImages).map((item) => {
        item.style.minWidth = parentBlock.clientWidth + 'px';
        item.style.height = parentBlock.clientHeight + 'px';

        return item;
      });

      parentBlock.classList.contains('info-block')
        ? (imageWidthInfo = parentBlock.clientWidth)
        : (imageWidthSlider = parentBlock.clientWidth);
    };

    const setActiveSlide = () => {
      const sliderCounters = document.querySelectorAll('.slider-counter');

      Array.from(sliderCounters).map((item) => {
        item.classList.remove('active');
      });

      sliderCounters[counter].classList.add('active');
    };

    const moveSlide = (counterID = null) => {
      if (counter + 1 > blockImagesLength.value) {
        counter = 0;
      }

      if (!isNaN(counterID) && (counterID || counterID === 0)) {
        counter = counterID;
      }

      clearInterval(timerConterID);

      document.querySelector(
        '.block-item--1--container'
      ).style.transform = `translateX(-${counter * imageWidthSlider}px)`;

      document.querySelector(
        '.block-item--2--container'
      ).style.transform = `translateX(-${counter * imageWidthInfo}px)`;

      setActiveSlide();

      counter++;

      timerConterID = setInterval(moveSlide, 5000);
    };

    const resizeSlider = () => {
      let generalSlider = document.querySelector('.general-slider');
      generalSlider.style.height = innerHeight + 'px';
      generalSlider.style.width = innerWidth + 'px';

      const blockImages = document.querySelectorAll('.block-image');
      const infoBlockInners = document.querySelectorAll('.info-block--inner');

      setSize(blockImages, document.querySelector('.block-item--1'));
      setSize(infoBlockInners, document.querySelector('.block-item--2'));

      setSliderBlockPosition();

      moveSlide(--counter);
    };

    onMounted(() => {
      resizeSlider();

      window.addEventListener('resize', resizeSlider);

      timerConterID = setInterval(moveSlide, 5000);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resizeSlider);

      clearInterval(timerConterID);
    });

    return {
      generalHeaderSlider: computed(() => store.state.generalHeaderSlider),

      moveSlide,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

h2 {
  font-size: 56px;
  color: $font-color;
  line-height: 1.2;

  margin: 25px 0 25px;

  @include media('<=800px', '>=768px') {
    font-size: 42px;
    margin-top: 0;
    margin-bottom: 25px;
  }

  @include media('<768px', '>371px') {
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 15px;
  }

  @include media('<=371px') {
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 15px;
  }
}

h3 {
  font-weight: bold;
  font-size: 18px;
  margin-top: 65px;
  color: $orange-color;

  transition: all 0.2s linear;
}

.general-slider {
  position: relative;
  display: grid;
  grid-template-columns: 40% 1fr 1fr;
  grid-template-rows: 60% 1fr;

  @include media('<=800px', '>371px') {
    grid-template-columns: 50% 1fr;
    grid-template-rows: 40% 1fr 1fr;
  }
  @include media('<=371px') {
    grid-template-columns: 50% 1fr;
    grid-template-rows: 40% 2fr 1fr;
  }

  .block-item,
  .block-image,
  .shop-block--inner {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .block-item {
    overflow: hidden;
  }

  .block-item--1 {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    cursor: pointer;

    &--container {
      display: flex;

      transition: all 0.4s ease-in-out;
    }

    @include media('<800px') {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }
  }

  .block-item--2 {
    grid-column: 2 / 4;
    grid-row: 1 / 2;

    background-color: $background-color;

    @include media('<800px') {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    &--container {
      display: flex;

      transition: all 0.4s ease-in-out;
    }
  }

  .block-item--3,
  .block-item--4 {
    grid-row: 2 / 3;

    @include media('<800px') {
      grid-row: 3 / 4;
    }
  }

  .block-item--3 {
    grid-column: 2 / 3;

    background-image: url('../../assets/img/home/general-4.webp');

    @include media('<800px') {
      grid-column: 1 / 2;
    }
  }

  .block-item--4 {
    grid-column: 3 / 4;

    background-image: url('../../assets/img/home/general-3.webp');

    @include media('<800px') {
      grid-column: 2 / 3;
    }
  }

  .info-block {
    display: flex;
    align-items: center;

    &--inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 0 105px;

      @include media('<800px') {
        padding: 45px;
        text-align: center;
      }

      @include media('<=phone') {
        padding: 10px 15px;
      }
    }

    p {
      @include media('<=800px') {
        text-align: center;
      }
      @include media('<=371px') {
        font-size: 14px;
      }
    }
  }

  .shop-block {
    position: relative;

    cursor: pointer;
    overflow: hidden;

    &--inner {
      display: flex;
      justify-content: center;

      height: 100%;
      width: 100%;

      background-image: url('../../assets/img/home/general-4.webp');
      transition: all 0.2s linear;
    }

    &--inner:hover {
      transform: scale(1.2);
    }

    &--inner:hover h3 {
      transform: scale(0.8);
      color: $green-color;
    }
  }

  .slider-block {
    position: absolute;
    bottom: 25px;

    @include media('<800px') {
      bottom: 62%;
    }

    .slider-counter {
      position: relative;

      display: flex;
      align-items: center;

      font-size: 12px;
      color: rgba(0, 0, 0, 0.438);

      margin-bottom: 15px;

      cursor: pointer;

      span {
        transition: all 0.2s linear;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      & .timer {
        content: '';
        display: block;

        width: 5px;
        height: 5px;
        overflow: hidden;

        margin-left: 5px;

        border-radius: 50%;

        background-color: rgba(0, 0, 0, 0.192);
      }

      &.active {
        color: $font-color;
      }

      &.active span {
        transform: scale(2) translateX(-40%);
      }

      &.active .timer {
        position: relative;

        height: 35px;
        background-color: inherit;

        border: 1px solid $font-color-opacity;
        border-radius: 5px;

        z-index: 5;
      }

      &.active .timer::before {
        content: '';

        position: absolute;
        bottom: 0;
        right: 0;

        display: block;

        height: 35px;
        width: 5px;

        background-color: $green-color;

        animation: 5s linear fillingCounter;

        z-index: 4;
      }
    }
  }
}

@keyframes fillingCounter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
