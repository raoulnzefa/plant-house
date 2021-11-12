<template>
  <div class="info-block" :class="imgLocation">
    <div class="img">
      <img :src="img" />
    </div>
    <div class="description">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="horizontal-line"></div>
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

    background-color: $accent-color;
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
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @include media('<=phone') {
    position: relative;
    margin-bottom: 70px;
  }
}

.description {
  display: flex;
  flex-direction: column;
  margin-left: 45px;

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

      // min-width: 250px !important;
    }
  }
}

img {
  width: 400px;

  @include media('<=tablet', '>phone') {
    width: 250px;
  }

  @include media('<=phone') {
    width: 250px;
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
