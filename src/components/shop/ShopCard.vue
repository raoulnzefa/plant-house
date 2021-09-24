<template>
  <div class="shop-card">
    <div
      class="image"
      :style="
        `background: url(${bestsellersProp.image}) center center no-repeat; background-size: cover;`
      "
    ></div>
    <div class="info">
      <h3>{{ bestsellersProp.title }}</h3>
      <div class="price-and-add">
        <div class="price">{{ bestsellersProp.price }}$</div>
        <button>Add to card</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bestsellersProp: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.shop-card {
  height: 380px;
  width: 280px;
  // border: 1px solid black;
  cursor: pointer;

  h3 {
    padding-top: 15px;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 300;
  }

  .image {
    height: 280px;
    width: 100%;
    transition: all 0.2s linear;
  }

  .info {
    height: 380px - 280px;
    border: 1px solid black;
    border-top: none;

    .price-and-add {
      display: flex;
      justify-content: space-between;
      margin: 0 15px 0;
    }

    button {
      background-color: inherit;
      transition: color 0.2s linear;
    }

    button:hover {
      color: $accent-color;
    }
  }
}

.shop-card:hover .image {
  transform: scale(1.05);
}
</style>
