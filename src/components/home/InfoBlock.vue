<template>
  <div class="info-block" :class="imgLocation">
    <div class="info-block--container container" :class="imgLocation">
      <div class="img" :style="`background-image: url('${img}')`">
        <!-- <img :src="img" /> -->
      </div>
      <div class="description">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <div class="horizontal-line"></div>
    </div>
  </div>
</template>

<script>
import { computed, toRefs, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

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
  setup(props) {
    const store = useStore();

    const info = computed(() => store.getters.getInfo(props.id));
    const isTabletScreen = computed(() => store.state.isTabletScreen);

    const { img, description, title } = toRefs(info.value);

    // let infoBlock = {};

    // onMounted(() => {
    //   infoBlock = document.querySelector('.info-block');
    // });

    // watch(
    //   () => isTabletScreen.value,
    //   (value) => {
    //     console.log('into watch');
    //     if (value) {
    //       const infoBlockCoords = infoBlock.getBoundingClientRect();
    //       infoBlock.style.left = -infoBlockCoords.x + 'px';
    //       console.log(infoBlock.style.left, infoBlockCoords.x);
    //     }
    //   }
    // );

    return {
      img,
      description,
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/media/breakpoints.scss';
@import '@/style/variables.scss';

h2 {
  @include media('<=phone') {
    font-size: 18px;
    margin-bottom: 10px;
  }
}

.horizontal-line {
  display: none;

  @include media('<=phone') {
    position: absolute;
    bottom: 90px;

    display: block;

    max-width: 220px;

    background-color: $orange-color;
  }
}

.left .horizontal-line {
  @include media('<=phone') {
    left: -50%;
  }
}

.right .horizontal-line {
  @include media('<=phone') {
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

  &--container {
    position: relative;
    z-index: 5;

    display: flex;
    justify-content: space-between;
  }

  @include media('<=phone') {
    position: relative;
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
  }

  &::before {
    top: -115%;
    right: 80%;

    transform: rotate(80deg);

    @include media('<=768px', '>phone') {
      top: -70%;
    }
  }

  &::after {
    top: -100%;
    right: 50%;

    transform: rotate(-20deg);

    @include media('<=768px', '>phone') {
      right: 60%;
    }
  }

  &.right::before {
    top: -115%;
    left: 80%;

    transform: rotate(-80deg);

    @include media('<=768px', '>phone') {
      top: -70%;
    }
  }

  &.right::after {
    top: -100%;
    left: 50%;

    transform: rotate(20deg);

    @include media('<=768px', '>phone') {
      left: 60%;
    }
  }
}

.description {
  display: flex;
  flex-direction: column;
  margin-left: 45px;

  background-color: $background-color-light;

  @include media('<=phone') {
    padding: 25px 15px;
    min-width: 250px;
    max-width: 250px;

    margin-left: 0;

    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.788);
    backdrop-filter: blur(0.1rem);
    border: 1px solid $primary-color-light;
  }
}

.left .description {
  margin: 0 0 0 45px;

  @include media('<=phone') {
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

    @include media('<=phone') {
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

  @include media('<=tablet', '>phone') {
    min-width: 250px;
    min-height: 250px;

    max-width: 250px;
    max-height: 250px;
  }

  @include media('<=phone') {
    min-width: 250px;
    min-height: 250px;

    max-width: 250px;
    max-height: 250px;
  }
}

.left .img {
  @include media('<=phone') {
    position: relative;
    top: 0;
    left: -25%;
  }
}

.right .img {
  @include media('<=phone') {
    position: absolute;
    top: 0;
    right: -25%;
  }
}
</style>
