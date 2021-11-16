<template>
  <div class="bestsellers">
    <h2>Our Bestsellers</h2>
    <div
      class="inner"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="shop-card--container">
        <ShopCard
          v-for="(item, index) of bestsellers"
          :key="index"
          :product="item"
          class="shop-card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShopCard from '@/components/shop/ShopCard.vue';
import { ref, onMounted } from 'vue';
export default {
  name: 'Bestsellers',
  components: {
    ShopCard,
  },

  setup() {
    let shopCardContainer = ref({});

    let counter = 0,
      width = 280;

    onMounted(() => {
      shopCardContainer.value = document.querySelector('.shop-card--container');
    });

    const onToRight = () => {
      if (counter >= 2) {
        return;
      }

      counter++;

      shopCardContainer.value.style.transform = `translate(-${width *
        counter}px)`;
    };

    const onToLeft = () => {
      if (counter < 0) {
        return;
      }

      counter--;

      shopCardContainer.value.style.transform = `translate(-${width *
        counter}px)`;
    };

    let xStart = null,
      yStart = null;

    let rightSwipe = false,
      leftSwipe = false;

    const onTouchStart = (event) => {
      xStart = event.touches[0].clientX;
      yStart = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      if (!xStart || !yStart) {
        return;
      }

      let xEnd = event.touches[0].clientX,
        yEnd = event.touches[0].clientY;

      let xDiff = xStart - xEnd,
        yDiff = yStart - yEnd;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff < 0) {
          rightSwipe = true;
          leftSwipe = false;
        } else {
          rightSwipe = false;
          leftSwipe = true;
        }
      }

      if (rightSwipe || leftSwipe) {
        event.preventDefault();
      }
    };

    const onTouchEnd = () => {
      if (leftSwipe) {
        onToRight();
      }

      if (rightSwipe) {
        onToLeft();
      }

      rightSwipe = false;
      leftSwipe = false;
    };

    return {
      bestsellers: [
        {
          id: 0,
          title: 'Bouquet "Autumn"',
          price: 25,
          image:
            'https://static.tildacdn.com/tild6663-6137-4639-b163-643233656364/4.jpg',
        },
        {
          id: 1,
          title: 'Muse',
          price: 43,
          image:
            'https://static.tildacdn.com/tild3861-3739-4136-b330-336137383632/XL1.jpg',
        },
        {
          id: 2,
          title: 'Pink silk',
          price: 67,
          image:
            'https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg',
        },
      ],

      onToRight,
      onToLeft,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/media/breakpoints.scss';
@import '@/style/variables.scss';

.inner {
  position: relative;

  display: flex;
  justify-content: space-between;

  @include media('<=phone') {
    justify-content: flex-start;
    align-items: center;
  }
}

.shop-card--container {
  @include media('<=phone') {
    display: flex;
    justify-content: space-between;

    min-width: 880px;
    transition: all 0.4s ease-in;
  }
}

.shop-card {
  @include media('<=phone') {
  }
}
</style>
