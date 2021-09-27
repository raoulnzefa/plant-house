<template>
  <div class="about-bouquet">
    {{ product.title }}
  </div>
</template>

<script>
import { computed, watch, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { toKebabCase } from '@/modules/toKebabCase.js';

export default {
  name: 'About Bouquet',
  props: {
    product: {
      type: Object,
    },
  },

  setup(props) {
    // let { image, title } = toRefs(props.product);
    // return {
    //   image,
    //   title,
    // };
  },
};
</script>

<style></style>
