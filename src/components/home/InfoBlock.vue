<template>
  <div class="info-block" :class="imgLocation">
    <div>
      <img :src="img" />
    </div>
    <div class="description">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue';
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
    const { img, description, title } = toRefs(info.value);

    return {
      img,
      description,
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
.info-block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}

.left .description {
  margin: 0 0 0 45px;
}

.right {
  flex-direction: row-reverse;
  .description {
    margin: 0 45px 0 0;
  }
}

.description {
  margin-left: 45px;
}

img {
  width: 400px;
}
</style>
