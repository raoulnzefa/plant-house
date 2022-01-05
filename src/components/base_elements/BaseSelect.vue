<template>
  <label v-if="label" :for="$attrs.id">{{ label }}</label>
  <div class="select-container">
    <select
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      :class="{ 'error-select': error }"
      :value="modelValue"
    >
      <option value="" disabled v-if="disableOption">
        {{ disableOption }}
      </option>
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    disableOption: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

select {
  width: 100%;
  max-width: 300px;
  height: 31px;

  border: 2px solid $primary-color;
  border-radius: 0.25em;

  padding: 5px 10px;

  font-size: 14px;
  color: black;
  cursor: pointer;

  background-image: linear-gradient(
    to top,
    $primary-color-light,
    $background-color 33%
  );

  @include media('<=630px') {
    max-width: none;
  }
}

.select-container {
  position: relative;
}

.error-select {
  border-color: red;
}

.error {
  position: absolute;
  bottom: -17px;
  left: 0;

  font-size: 12px;
  color: red;
}
</style>
