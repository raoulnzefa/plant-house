<template>
  <div class="info-block" :class="imgLocation" ref="infoBlock">
    <div class="info-block__container container" :class="imgLocation">
      <div
        class="img observer"
        :style="`background-image: url('${img}')`"
        ref="imageBlock"
      ></div>
      <div class="description observer" ref="descriptionBlock">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <div class="horizontal-line"></div>
    </div>
  </div>
  <ObserverVue
    :options="{
      threshold: 0.6,
    }"
    @intersecting="handleIntersection"
    :targets="[infoBlock]"
  />
</template>

<script>
import { computed, toRefs, ref } from 'vue';
import { useStore } from 'vuex';
import ObserverVue from '../page/ObserverVue.vue';

export default {
  name: 'InfoBlock',
  props: {
    imgLocation: {
      type: String,
      default: 'left',
    },
    id: {
      type: Number,
      default: 1,
    },
  },
  components: {
    ObserverVue,
  },

  setup(props) {
    const store = useStore();

    const infoBlock = ref([]),
      imageBlock = ref(null),
      descriptionBlock = ref(null);

    const handleIntersection = ({ observer }) => {
      descriptionBlock.value.classList.remove('observer');

      setTimeout(() => {
        imageBlock.value.classList.remove('observer');
      }, 500);

      observer.disconnect();
    };

    const info = computed(() => store.getters.getInfo(props.id));

    const { img, description, title } = toRefs(info.value);

    return {
      img,
      description,
      title,
      infoBlock,
      imageBlock,
      descriptionBlock,
      handleIntersection,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/media/breakpoints.scss';
@import '@/style/variables.scss';

h2 {
  @include media('<=630px') {
    font-size: 18px;
    margin-bottom: 10px;
  }
}

.horizontal-line {
  display: none;

  @include media('<=630px') {
    position: absolute;
    top: 280px;

    display: block;

    max-width: 220px;

    background-color: $orange-color;
  }
}

.left .horizontal-line {
  @include media('<=630px') {
    left: -50%;
  }
}

.right .horizontal-line {
  @include media('<=630px') {
    right: -50%;
  }
}

.info-block {
  position: relative;

  padding: 100px 0;

  overflow: hidden;

  .container {
    margin-bottom: 0;
  }

  &__container {
    position: relative;
    z-index: 5;

    display: flex;
    justify-content: space-between;
  }

  @include media('<=630px') {
    position: relative;
  }

  @include media('<=phone') {
    margin-bottom: 35px;
  }

  &::before,
  &::after {
    content: '';

    position: absolute;

    display: block;

    width: 2px;
    min-height: 200vw;

    background-color: $orange-color;

    @include media('<=630px', '>phone') {
      display: none;
    }
  }

  &::before {
    top: -115%;
    right: 80%;

    transform: rotate(80deg);

    @include media('<=788px', '>630px') {
      top: -70%;
    }
  }

  &::after {
    top: -100%;
    right: 50%;

    transform: rotate(-20deg);

    @include media('<=788px', '>630px') {
      right: 60%;
    }
  }

  &.right::before {
    top: -115%;
    left: 80%;

    transform: rotate(-80deg);

    @include media('<=788px', '>630px') {
      top: -70%;
    }
  }

  &.right::after {
    top: -100%;
    left: 50%;

    transform: rotate(20deg);

    @include media('<=788px', '>630px') {
      left: 60%;
    }
  }
}

.description {
  display: flex;
  flex-direction: column;
  margin-left: 45px;

  background-color: $background-color-light;

  opacity: 1;
  transition: transform 0.5s linear, opacity 0.5s linear;

  @include media('<=630px') {
    padding: 25px 15px;
    min-width: 400px;
    max-width: 400px;

    margin-left: 0;

    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.788);
    backdrop-filter: blur(0.1rem);
    border: 1px solid $primary-color-light;
  }

  @include media('<=615px') {
    min-width: 350px;
    max-width: 350px;
  }

  @include media('<=550px') {
    min-width: 300px;
    max-width: 300px;
  }

  @include media('<=phone') {
    min-width: 250px;
    max-width: 250px;
  }
}

.description.observer {
  transform: translateY(-15%);
  opacity: 0;
}

.left .description {
  margin: 0 0 0 45px;

  @include media('<=630px') {
    position: relative;
    top: 40px;
    left: -50%;

    margin: 0;
  }
}

.right {
  flex-direction: row-reverse;

  .description {
    margin: 0 45px 0 0;

    @include media('<=630px') {
      position: relative;
      top: 40px;
      left: -85px;

      margin: 0;
    }
  }
}

.img {
  min-width: 400px;
  min-height: 400px;

  max-width: 400px;
  max-height: 400px;

  background-size: cover;
  background-position: center;

  transition: transform 0.5s linear, opacity 0.5s linear;
  opacity: 1;

  @include media('<=788px') {
    min-width: 250px;
    min-height: 250px;

    max-width: 250px;
    max-height: 250px;
  }
}

.left .img {
  @include media('<=630px') {
    position: relative;
    top: 0;
    left: -25%;
  }
}

.right .img {
  @include media('<=630px') {
    position: absolute;
    top: 0;
    right: -25%;
  }
}

.left .img.observer {
  transform: translateX(-15%);
  opacity: 0;
}

.right .img.observer {
  transform: translateX(15%);
  opacity: 0;
}
</style>
