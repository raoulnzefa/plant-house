<template>
  <div class="why-plant-house" ref="whyPlantHouseBlock">
    <h2>Why Plant House?</h2>
    <div class="why-plant-house__inner">
      <div class="why-plant-house__item">
        <div class="image image__1 observer"></div>
        <div class="title">Unbeatable quality</div>
        <div class="description">
          We source directly from top-rated growers, so we can sell the finest
          quality plants at the very best prices.
        </div>
      </div>
      <div class="why-plant-house__item">
        <div class="image image__2 observer"></div>
        <div class="title">Delivery to your door</div>
        <div class="description">
          We’ll bring your plants to your door, anywhere in Ukraine. If you’re
          not 100% happy, tell us within 30 days and we’ll sort it.
        </div>
      </div>
      <div class="why-plant-house__item">
        <div class="image image__3 observer"></div>
        <div class="title">All the help you need</div>
        <div class="description">
          We’ll send you a free plant-parenting course and our plant doctors are
          always on call.
        </div>
      </div>
    </div>
  </div>
  <ObserverVue
    v-if="isMounted"
    :options="{
      threshold: 0.6,
    }"
    @intersecting="handleIntersection"
    :targets="[whyPlantHouseBlock]"
  />
</template>

<script>
import { onMounted, ref } from 'vue';
import ObserverVue from '../page/ObserverVue.vue';

export default {
  name: 'WhyPlantHouse',
  components: {
    ObserverVue,
  },
  setup() {
    const whyPlantHouseBlock = ref(null);

    const handleIntersection = ({ observer }) => {
      const images = Array.from(document.querySelectorAll('.image'));
      let ms = 0;

      images.forEach((image) => {
        setTimeout(() => {
          image.classList.remove('observer');
        }, ms);
        ms += 500;
      });

      observer.disconnect();
    };

    const isMounted = ref(false);

    onMounted(() => {
      isMounted.value = true;
    });

    return {
      whyPlantHouseBlock,
      handleIntersection,
      isMounted,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';
.why-plant-house {
  margin-top: 50px;
  padding: 80px 35px 100px;
  border: 1px solid $green-color;

  h2 {
    text-align: center;
    font-weight: bold;
    color: $font-color;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @include media('<=788px', '>phone') {
      flex-direction: column;
      align-items: center;
    }
  }

  &__item {
    width: 300px;
    text-align: center;
    line-height: 1.4;

    padding-bottom: 25px;
  }

  &__item:first-of-type {
    @include media('<=1124px', '>788px') {
      margin-left: 25px;
    }
  }

  &__item:nth-of-type(2) {
    @include media('<=1124px', '>788px') {
      margin-right: 25px;
    }
  }

  &__item:last-of-type {
    @include media('<=1124px', '>788px') {
      margin: 0 auto;
      padding-bottom: 0;
    }
  }

  .image {
    width: 150px;
    height: 150px;

    margin: 0 auto 10px;

    background-size: contain;

    transition: opacity 0.5s ease-in, transform 0.5s ease-in;

    &__1 {
      background-image: url('../../assets/img/home/why-1.svg');
    }
    &__2 {
      background-image: url('../../assets/img/home/why-2.svg');
    }
    &__3 {
      background-image: url('../../assets/img/home/why-3.svg');
    }
  }

  .image.observer {
    opacity: 0;
    transform: translateY(25%);
  }

  .title {
    font-weight: bold;
  }
}
</style>
