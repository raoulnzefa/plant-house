<template>
  <div class="bestsellers">
    <h2>Our Bestsellers</h2>
    <div class="inner">
      <ShopCard
        v-for="(item, index) of bestsellers"
        :key="index"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
import ShopCard from '@/components/shop/ShopCard.vue';
export default {
  name: 'Bestsellers',
  components: {
    ShopCard,
  },

  setup() {
    return {
      bestsellers: [
        {
          id: 0,
          title: 'Bouquet "Autumn"',
          price: 25,
          image:
            'https://static.tildacdn.com/tild6663-6137-4639-b163-643233656364/4.jpg',
        },
        {
          id: 1,
          title: 'Muse',
          price: 43,
          image:
            'https://static.tildacdn.com/tild3861-3739-4136-b330-336137383632/XL1.jpg',
        },
        {
          id: 2,
          title: 'Pink silk',
          price: 67,
          image:
            'https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.inner {
  display: flex;
  justify-content: space-between;
}
</style>
