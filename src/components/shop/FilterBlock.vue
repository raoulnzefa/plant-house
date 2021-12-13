<template>
  <div class="filter-block">
    <div class="container-block">
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
          class="filter-item filter-item--no-margin"
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
                @click="$emit('sort-products', item)"
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
  <div class="applied-filters" v-show="selected.length">
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
import { onMounted, ref } from 'vue';
import { createOptions, openOptions } from '@/modules/shop/optionActions.js';
import { useStore } from 'vuex';

export default {
  name: 'FilterBlock',
  emits: ['sort-products'],
  props: {
    filterType: String,
  },

  setup(props) {
    const store = useStore();

    const filtersData = ref([
      {
        type: 'commonFilters',
        filters: [
          {
            commonName: 'Size',
            options: ['Small', 'Medium', 'Large'],
          },
        ],
      },
      {
        type: 'plants',
        filters: [
          {
            commonName: 'Location',
            options: ['Indoors', 'Outdoors'],
          },
          {
            commonName: 'Pet friendly?',
            options: ['Yes, pet friendly'],
          },
        ],
      },
      {
        type: 'flowers',
        filters: [
          {
            commonName: 'Type of flowers',
            options: ['Roses', 'Lilacs', 'Orchids', 'Daisies'],
          },
          {
            commonName: 'Event',
            options: ['Wedding', 'Date', 'B-day', 'Any day'],
          },
        ],
      },
    ]);

    // GET FILTERS BY PROP filterType

    const receivedFilters = filtersData.value.find(
      (item) => item.type === props.filterType
    );

    const filters = ref([
      ...filtersData.value[0].filters,
      ...receivedFilters.filters,
    ]);

    onMounted(() => {
      createOptions(filters);

      const allOptions = document.querySelectorAll('.option-item');
      Array.from(allOptions).forEach((item) => {
        if (item.closest('.filter-options--sort')) {
          return;
        }
        item.addEventListener('click', selectFilter);
      });
    });

    const sortBy = ref(['No sort', 'Lower price', 'Higher price']);

    const selected = ref([]);

    const selectFilter = ({ target }) => {
      const optionValue = target.closest('li').dataset.value;

      if (selected.value.includes(optionValue)) {
        return;
      }

      selected.value.push(optionValue);
      let currentSelectedFilter = Array.from(filters.value).find((item) =>
        item.options.includes(optionValue)
      );

      store.commit('addSelectedFilters', {
        filterName: currentSelectedFilter.commonName,
        option: optionValue,
        classification: props.filterType,
      });
    };

    const deleteSelected = ({ target }) => {
      const selectedValue = target.closest('.applied-item').dataset
        .selectedValue;

      let currentSelectedFilter = Array.from(filters.value).find((item) =>
        item.options.includes(selectedValue)
      );
      store.commit('deleteSelectedFilters', {
        filterName: currentSelectedFilter.commonName,
        option: selectedValue,
        classification: props.filterType,
      });

      selected.value = selected.value.filter((item) => item !== selectedValue);
    };

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
  width: 100%;
  height: 65px;

  border-bottom: 1px solid $primary-color-light;

  margin-bottom: 15px;
  background-color: $background-color;

  .container-block {
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

.filter-item[data-active='true'] button {
  border: 1px solid $accent-color;
}

.option-item {
  button {
    border: none !important;
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

  &-item--no-margin {
    margin-right: 0;
  }

  .filter-options {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    transition: all 0.3s ease-in;

    background-color: $background-color;
    border: 1px solid $accent-color;
    border-radius: 5px;
    overflow: hidden;

    z-index: 1000;
  }
  .active {
    opacity: 1 !important;
  }

  .option-item {
    transition: all 0.2s linear;

    button {
      width: 100%;
      border: none;
      border-radius: 0;
      background-color: $background-color;
      padding: 10px 25px;
    }

    button:hover {
      background-color: $primary-color-light;
      color: $primary-color-dark;
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
