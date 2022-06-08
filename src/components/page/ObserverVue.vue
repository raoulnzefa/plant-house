<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

const emits = defineEmits(['intersecting']);
const props = defineProps({
  options: {
    type: Object,
    default: {},
  },
  targets: {
    type: Array,
    default: [],
  },
});

// Observer setup

const intersectionCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      emits('intersecting', { entry, observer });
    }
  });
};

const observer = new IntersectionObserver(intersectionCallback, props.options);

// Refer observer to observerBlock

const observerBlock = ref(null);

// if TARGETS not [] {
watch(
  () => props.targets,
  () => {
    if (props.targets === 0) return;

    Array.from(props.targets).forEach((target) => {
      if (target instanceof HTMLElement) {
        observer.observe(target);
      } else if (target.$el instanceof HTMLElement) {
        observer.observe(target.$el);
      }
    });
  }
);

onMounted(() => {
  if (props.targets.length) {
    Array.from(props.targets).forEach((target) => {
      if (target instanceof HTMLElement) {
        observer.observe(target);
      } else if (target.$el instanceof HTMLElement) {
        observer.observe(target.$el);
      }
    });
  } else {
    observer.observe(observerBlock.value);
  }
});

onUnmounted(() => {
  observer.disconnect();
});
</script>

<template>
  <div class="observer" ref="observerBlock">
    <slot></slot>
  </div>
</template>
