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

          <div class="filter-options filter-options--create"></div>
        </div>
      </div>
      <div class="filter">
        <div
          class="filter-item"
          :data-index="filters.length"
          :data-active="false"
          @click="openOptions"
        >
          <button>Sort by</button>

          <div class="filter-options filter-options--sort">
            <ul>
              <li
                class="option-item"
                v-for="(item, index) of sortBy"
                :key="index"
              >
                <button>
                  {{ item }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="applied-filters">
    <div
      class="applied-item"
      v-for="(item, index) of selected"
      :key="index"
      :data-selected-value="item"
      @click="deleteSelected"
    >
      <button class="applied-item--button">
        <span>{{ item }}</span>
        <span class="applied-item--close">X</span>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { createOptions, openOptions } from '@/modules/shop/optionActions.js';

export default {
  name: 'FilterBlock',
  emits: ['onSelectOption'],
  setup(_, { emit }) {
    onMounted(() => {
      const filterBlock = document.querySelector('.filter-block');
      filterBlock.style.marginLeft = -filterBlock.offsetLeft + 'px';

      createOptions(filters);

      const allOptions = document.querySelectorAll('.option-item');
      Array.from(allOptions).forEach((item) => {
        if (item.closest('.filter-options--sort')) {
          return;
        }
        item.addEventListener('click', selectFilter);
      });
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

    const sortBy = ref(['Lower price', 'Higher price']);

    const selected = ref([]);

    const selectFilter = ({ target }) => {
      const optionValue = target.closest('li').dataset.value;

      if (selected.value.includes(optionValue)) {
        return;
      }
      selected.value.push(optionValue);
      emit('onSelectOption', selected.value);
    };

    const deleteSelected = ({ target }) => {
      const selectedValue = target.closest('.applied-item').dataset
        .selectedValue;

      selected.value = selected.value.filter((item) => item !== selectedValue);
      emit('onSelectOption', selected.value);
    };

    // watch(selected.value, () => {
    //   emit('onSelectOption', selected.value);
    // });

    return {
      filters,
      sortBy,
      openOptions,
      selected,
      selectFilter,
      deleteSelected,
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

  z-index: 100;

  width: 100vw;
  height: 65px;

  border-bottom: 1px solid $primary-color-light;

  margin-bottom: 15px;
  background-color: $background-color;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
  }

  button {
    border: 1px solid $primary-color;

    &:hover {
      border: 1px solid $accent-color;
      color: $accent-color;
      background-color: $background-color;
    }
  }
}

.filter {
  display: flex;
}

.option-item {
  button {
    border: none !important;
    // background-color: $primary-color-light;
  }
}

.applied-filters {
  display: flex;

  margin-bottom: 45px;

  .applied-item {
    margin-right: 25px;
  }

  button {
    border: 0;
    border: 1px solid $accent-color;
    padding: 3px 5px;

    &:hover {
      background-color: $background-color;
    }

    .applied-item--close {
      margin-left: 8px;
      transition: all 0.2s linear;
    }

    &:hover .applied-item--close {
      color: $primary-color;
    }
  }
}
</style>

<style lang="scss">
@import '@/style/variables.scss';

.filter {
  &-item {
    position: relative;

    margin-right: 35px;
  }

  .filter-options {
    position: absolute;
    left: 0;

    opacity: 0;
    transition: all 0.3s ease-in;

    background-color: $background-color;
    border: 1px solid black;
    z-index: 1000;
  }
  .active {
    // display: block !important;
    opacity: 1 !important;
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

  .delete-button {
    width: 100%;
    border: none;
    background-color: $background-color;
    transition: all 0.2s linear;
  }

  .delete-button:hover {
    background-color: $primary-color;
  }
}
</style>
