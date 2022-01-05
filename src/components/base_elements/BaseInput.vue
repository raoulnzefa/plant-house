<template>
  <label :class="{ vertical: isVertical }">{{ label }}</label>
  <div class="input-container">
    <input
      :value="modelValue"
      @[eventType]="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      class="input-field"
      :class="{ 'error-input': error }"
    />

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    eventType: {
      type: String,
      default: 'change',
    },

    isVertical: {
      type: Boolean,
      default: false,
    },
  },

  setup() {},
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.vertical {
  display: block;
  margin-bottom: 10px;
}

.input-field {
  width: 110px;

  font-size: 14px;

  margin-left: 0;
  padding: 5px 10px;

  border-radius: 5px;
  border: 2px solid $primary-color;

  background-color: $background-color;

  transition: all 0.2s linear;
}

input:focus {
  border-color: $orange-color;
}

input::placeholder {
  font-weight: 300;
}

.error-input {
  border-color: red;
}

.error {
  position: absolute;
  bottom: -27px;
  left: 0;

  font-size: 12px;
  color: red;
}

.input-container {
  position: relative;
}
</style>
