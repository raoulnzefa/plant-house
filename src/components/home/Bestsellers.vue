<template>
  <div class="bestsellers">
    <h2>Our best products</h2>
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
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Bestsellers',
  components: {
    ShopCard,
  },

  setup() {
    const store = useStore();

    let shopCardContainer = ref({});
    const bestsellers = ref(null);

    let isWidth930Point = innerWidth <= 930;

    const getBestsellers = () => {
      if (innerWidth > 930 && isWidth930Point) {
        bestsellers.value = store.getters.getBestsellers(3);
        isWidth930Point = false;
      }
      if (innerWidth <= 930 && !isWidth930Point) {
        bestsellers.value = store.getters.getBestsellers(4);

        isWidth930Point = true;
      }
    };

    let counter = 0,
      width = 280;

    onMounted(() => {
      shopCardContainer.value = document.querySelector('.shop-card--container');

      if (innerWidth > 930) {
        bestsellers.value = store.getters.getBestsellers(3);
      } else {
        bestsellers.value = store.getters.getBestsellers(4);
      }

      window.addEventListener('resize', getBestsellers);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', getBestsellers);
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
      if (innerWidth > 425) return;

      xStart = event.touches[0].clientX;
      yStart = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      if (!xStart || !yStart || innerWidth > 425) {
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
      if (innerWidth > 425) return;

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
      bestsellers,

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

h2 {
  text-align: center;
  margin-bottom: 55px;
  text-transform: capitalize;
}

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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;

  @include media('<=phone') {
    min-width: 880px;
    transition: all 0.4s ease-in;
  }
}

.shop-card {
  @include media('<=930px') {
    margin-bottom: 45px;
  }
}

.shop-card:last-of-type {
  @include media('<=phone') {
    display: none;
  }
}
</style>
