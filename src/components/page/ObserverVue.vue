<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const emits = defineEmits(['intersecting']);
const props = defineProps({
  options: {
    type: Object,
    default: {},
  },
});

// Observer setup

const intersectionCallback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    emits('intersecting', { entries, observer });
  }
};

const observer = new IntersectionObserver(intersectionCallback, props.options);

onUnmounted(() => {
  observer.disconnect();
});

// Refer observer to observerBlock
const observerBlock = ref(null);

onMounted(() => {
  observer.observe(observerBlock.value);
});
</script>

<template>
  <div class="observer" ref="observerBlock">
    <slot></slot>
  </div>
</template>
