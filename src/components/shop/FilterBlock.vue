<template>
  <div class="filter-block">
    <div class="container">
      <div class="filter">
        <div
          class="filter-item"
          v-for="(filter, index) in filters"
          :key="index"
          :data-index="index"
          :data-active="false"
          @click="openOptions"
        >
          <button>
            {{ filter.commonName }}
          </button>

          <div class="filter-options"></div>
        </div>
      </div>
      <div class="filter">
        <div class="filter-item">
          <button>Sort by</button>
        </div>
      </div>
    </div>
  </div>
  <div class="applied-filters">
    <button class="applied-item">first filter X</button>
    <button class="applied-item">second X</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { createOptions, openOptions } from '@/modules/shop/optionActions.js';

export default {
  name: 'FilterBlock',
  setup() {
    onMounted(() => {
      const filterBlock = document.querySelector('.filter-block');
      filterBlock.style.marginLeft = -filterBlock.offsetLeft + 'px';

      createOptions(filters);
    });

    const filters = ref([
      {
        commonName: 'Type of flowers',
        options: ['Roses', 'Lilacs', 'Orchids', 'Daisies'],
      },
      {
        commonName: 'Event',
        options: ['Wedding', 'Date', 'B-day', 'Any day'],
      },
      {
        commonName: 'Size',
        options: ['Small', 'Medium', 'Large'],
      },
    ]);

    return {
      filters,
      openOptions,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.filter-block {
  position: sticky;
  top: 0;
  left: 0;

  z-index: 1000;

  width: 100vw;
  height: 65px;

  border-bottom: 1px solid $primary-color-light;

  margin-bottom: 25px;
  background-color: $background-color;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
  }
}

.filter {
  display: flex;
}

.option-item {
  button {
    border: none !important;
    background-color: blueviolet;
  }
}

.applied-filters {
  display: flex;

  margin-bottom: 45px;

  .applied-item {
    margin-right: 35px;
  }

  button {
    border: 0;
    // padding: 0;

    &:hover {
      // text-decoration: line-through $accent-color;
      background-color: $primary-color-dark;
      color: $background-color;
    }
  }
}
</style>

<style lang="scss">
@import '@/style/variables.scss';

.active {
  display: block !important;
}

.filter {
  &-item {
    position: relative;

    margin-right: 35px;
  }

  .filter-options {
    position: absolute;
    left: 0;

    // display: none;

    background-color: $background-color;
    border: 1px solid black;
    z-index: 1000;
  }
  .option-item {
    transition: all 0.2s linear;

    button {
      width: 100%;
      border: none;
      background-color: $background-color;
    }
    button:hover {
      background-color: $primary-color;
    }
  }
}
</style>
