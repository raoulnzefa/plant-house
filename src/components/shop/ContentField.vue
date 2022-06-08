<template>
  <div class="content-field">
    <h1>All {{ productsType }}</h1>

    <div class="accordeon" v-if="$store.state.isTabletScreen">
      <span class="accordeon__header" @click="openAccordeon">Filters</span>
      <div class="accordeon__body">
        <FilterBlock
          @sort-products="getSortProducts"
          :filterType="productsType"
          @reset-accordeon="resetAccordeonVariables"
        />
      </div>
    </div>

    <FilterBlock
      v-else
      @sort-products="getSortProducts"
      :filterType="productsType"
    />

    <div class="products-info">
      <div class="products-info__count">
        {{ filteredProducts.length + ' ' }}
        result{{ filteredProducts.length !== 1 ? 's' : '' }}
      </div>
    </div>

    <div class="products-area">
      <div
        class="products-area__card"
        :class="{ 'one-product': filteredProducts.length === 1 }"
        v-for="(product, index) in products"
        :key="index"
      >
        <ShopCard :product="product" ref="shopCards" />
      </div>

      <div
        class="products-area__filler"
        v-show="filteredProducts.length % 3 !== 0"
      ></div>
      <div v-if="!filteredProducts.length" class="not-found">
        No products found :(
      </div>
    </div>
    <ObserverVue
      @intersecting="applyPageLazyLoading"
      :options="{ threshold: 1 }"
      class="page-lazy-loading"
    >
      <div class="observer__container" v-show="isLoading">
        <span class="observer__loading">Loading</span>
        <img src="../../assets/gifs/loader-60.gif" class="loader" />
      </div>
    </ObserverVue>
    <ObserverVue
      class="images-lazy-loading"
      @intersecting="applyImagesLazyLoading"
      :options="{
        threschold: 0,
        rootMargin: '0px 0px 200px 0px',
      }"
      :targets="shopCardsReactive"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';

import ShopCard from '@/components/shop/ShopCard.vue';
import FilterBlock from '@/components/shop/FilterBlock.vue';
import ObserverVue from '@/components/page/ObserverVue.vue';

export default {
  name: 'Content Field',
  components: {
    ShopCard,
    FilterBlock,
    ObserverVue,
  },

  props: {
    productsType: {
      type: String,
      default: 'plants',
    },
  },

  setup(props) {
    const store = useStore();
    const route = useRoute();

    // ACCORDEON SETUP

    let accordeonFilterBlockHeight = 0,
      accordeonHeaderHeight = 0;

    let isAccordeonOpen = false;

    let filterBlock = null,
      accordeonBody = null,
      accordeonHeader = null,
      sortBlock = null,
      accordeon = null;

    const resetAccordeonVariables = () => {
      accordeon = document.querySelector('.accordeon');
      accordeonBody = document.querySelector('.accordeon__body');
      accordeonHeader = document.querySelector('.accordeon__header');

      filterBlock = document.querySelector('.filter-block');
      sortBlock = document
        .querySelector('.filter-sort--mobile')
        .closest('.filter');

      accordeon.style.overflow = 'hidden';

      accordeonFilterBlockHeight = filterBlock.offsetHeight;
      accordeonHeaderHeight = accordeonHeader.offsetHeight;

      closeAccordeon();

      if (Object.entries(route.query).length !== 0) {
        openAccordeon();
      }

      accordeonBody.style.transition = 'all 0.2s ease-in';
    };

    const closeAccordeon = () => {
      isAccordeonOpen = false;

      const appliedFiltersHeight =
        document.querySelector('.applied-filters').offsetHeight;

      accordeonBody.style.transform = `translateY(${
        -accordeonFilterBlockHeight - appliedFiltersHeight
      }px)`;

      accordeon.style.maxHeight =
        accordeonHeaderHeight + sortBlock.offsetHeight + 'px';

      accordeonHeader.classList.remove('active');

      accordeon.style.overflow = 'hidden';
    };

    const openAccordeon = () => {
      if (!isAccordeonOpen) {
        isAccordeonOpen = true;

        accordeonBody.style.transform = `translateY(0)`;
        accordeon.style.maxHeight = '100vw';
        accordeon.style.height = 'auto';

        accordeonHeader.classList.add('active');

        setTimeout(() => {
          accordeon.style.overflow = '';
        }, 200);
      } else {
        closeAccordeon();
      }
    };

    // PRODUCTS SETUP

    const sortType = ref('No sort');

    let filteredProducts = computed(() =>
      store.getters.getFilteredProducts(sortType.value, props.productsType)
    );

    const getSortProducts = (sortTypeEmit) => {
      sortType.value = sortTypeEmit;
    };

    // INTERSECTION OBSERVER SETUP (IMAGES AND PAGE)

    //page variables

    const products = ref([]);

    let productsCount = 0;
    let isLoading = ref(false);

    // images variables
    const shopCards = ref([]);
    const shopCardsReactive = ref([]);

    // pages

    watch(
      () => filteredProducts.value,
      () => {
        productsCount = 6;
        products.value = filteredProducts.value.slice(0, productsCount);
        productsCount = 12;
      }
    );

    const isFiltersApplied = ref(
      !!store.state.selectedFilters[props.productsType].length
    );

    watch(store.state.selectedFilters, (value) => {
      isFiltersApplied.value = !!value[props.productsType].length;
    });

    const applyPageLazyLoading = () => {
      isLoading.value = true;
      productsCount = products.value.length;

      let uploadedProducts = filteredProducts.value.slice(
        productsCount,
        productsCount + 6
      );

      products.value = [...products.value, ...uploadedProducts];

      if (productsCount + 6 >= filteredProducts.value.length) {
        isLoading.value = false;

        return;
      }

      productsCount = productsCount + 6;
    };

    // images

    const applyImagesLazyLoading = ({ entry, observer }) => {
      const elem = shopCards.value.find((item) => item.$el === entry.target);

      if (!elem?.$el || elem.$el.style.backgroundImage.includes('placeholder'))
        return;

      elem.handleImageDownloading();

      observer.unobserve(elem.$el);
    };

    watch(products, () => {
      setTimeout(() => {
        shopCardsReactive.value = [...[]];

        shopCards.value.forEach((item) => {
          shopCardsReactive.value.push(item);
        });
      }, 0);
    });

    // LIFECYCLE HOOKS

    onMounted(() => {
      document.title = 'Shop ' + props.productsType;

      if (store.state.isTabletScreen) {
        resetAccordeonVariables();

        window.addEventListener('resize', closeAccordeon);
      }
    });

    onUnmounted(() => {
      window.removeEventListener('resize', closeAccordeon);
    });

    return {
      products,
      getSortProducts,
      filteredProducts,

      openAccordeon,
      resetAccordeonVariables,

      applyPageLazyLoading,
      isLoading,
      applyImagesLazyLoading,
      shopCards,
      shopCardsReactive,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

h1 {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  margin-top: 95px;
  margin-bottom: 25px;

  text-align: center;

  @include media('<=930px') {
    margin-top: 95px !important;
    color: $orange-color;
  }
}

h1::before {
  content: '';
  display: none;
}

h1::after {
  content: '';
  display: block;

  text-align: center;

  width: 80px;
  height: 2px;

  margin-top: 10px;

  background-color: $orange-color;

  @include media('<=930px') {
    display: none;
  }
}

.content-field {
  transition: all 0.2s ease-in;
}

.accordeon {
  height: auto;

  transition: all 0.2s ease-in;
  margin-bottom: 25px;

  &-header {
    position: relative;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: $font-color;
    font-weight: bold;

    padding: 15px 15px 15px 10px;

    border: 1px solid $green-color;
    border-radius: 2px;

    background-color: $background-color;
    transition: all 0.2s linear;

    cursor: pointer;
  }

  &-header::after {
    content: '';
    width: 10px;
    height: 10px;

    margin-left: 8px;
    margin-top: -5px;

    border-left: 1px solid $font-color;
    border-bottom: 1px solid $font-color;

    transform: rotate(-45deg);
    transition: all 0.2s linear;
  }

  &-header.active {
    background-color: $green-color-light;
  }

  &-header.active::after {
    transform: rotate(135deg);
    margin-top: 0;
    margin-bottom: -5px;
  }
}

.products-info {
  margin-bottom: 35px;
  padding-top: 35px;

  @include media('<=930px') {
    border-top: 1px solid $primary-color-light;
  }

  .products-info__count {
    font-weight: bold;

    @include media('<=930px') {
      text-align: center;
    }
  }
}

.products-area {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 45px;
  width: 100%;

  @include media('<=630px') {
    justify-content: center;
  }

  &__card {
    margin-bottom: 45px;
  }

  &__filler {
    min-width: 280px;
  }

  .one-product {
    justify-self: flex-start;
  }
}

.card {
  margin-bottom: 25%;
  padding: 0 25px;

  @include media('<=tablet') {
    margin-bottom: 25px;
  }
}

.not-found {
  font-weight: bold;
  padding: 25px;
}

.observer__container {
  margin-bottom: 35px;
  margin-top: -35px;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    width: 25px;
  }
}

.observer__loading {
  font-size: 20px;
  color: $primary-color-dark;

  padding: 15px 10px 15px 15px;
}
</style>
