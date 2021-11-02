<template>
  <div class="cart-list">
    <h1>Shopping bag</h1>
    <div class="cart-inner" v-if="cart.length">
      <div class="tasks-list">
        <div class="circle active">1</div>
        <div class="line"></div>
        <div class="circle">2</div>
        <div class="line"></div>
        <div class="circle">3</div>
      </div>
      <div
        class="cart-item"
        v-for="(item, index) in cart"
        :key="index"
        :data-cart-id="item.cartID"
      >
        <div class="cart-item--info">
          <div class="cart-item--image">
            <img :src="item.image" :alt="item.id" />
          </div>

          <div class="cart-item--title">
            <h3>{{ item.title }}</h3>
          </div>
        </div>

        <div class="cart-item--info cart-item--edit">
          <div class="cart-item--quantity">
            <div class="cart-item--button">
              <button @click="onMinusToQuantity">-</button>
            </div>
            <div class="cart-item--input">
              <input
                type="text"
                :value="item.quantity"
                @change="onChangeQuantity"
              />
            </div>

            <div class="cart-item--button">
              <button @click="onPlusToQuantity">+</button>
            </div>
          </div>

          <div class="cart-item--price">
            <span>{{ item.price }}$</span>
          </div>

          <div class="remove-button delete-button" @click="onRemoveCartItem">
            X
          </div>
        </div>
      </div>

      <div class="subtotal-container">
        <div class="subtotal">
          <div class="subtotal--info">
            <span>Subtotal:</span>
            <span class="price">{{ ' ' + subtotal }} $</span>
          </div>
          <div class="promocode">
            <span>Promo code: </span>
            <div class="promocode--inner">
              <input
                type="text"
                placeholder="Your code"
                @change="onGetPromocode"
              />
              <div class="promocode--error" v-show="!isCodeExist">
                This code is not exist
              </div>
            </div>
          </div>
          <div class="sale" v-if="discountSum">
            <span>Your sale:</span>
            <span>-{{ (subtotal * discountSum) / 100 }}$</span>
          </div>
          <div class="horizontal-line"></div>

          <div class="summary">
            <span>Summary: </span>
            <span>{{ summary }}$</span>
          </div>

          <div class="next-page">
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-inner" v-else>Your cart is empty.</div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

export default {
  name: 'MyCart',
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);
    const subtotal = computed(() =>
      cart.value.reduce((sum, item) => (sum += +item.price * +item.quantity), 0)
    );

    const promocodes = computed(() => store.state.promocodes);
    const discountSum = ref(0);
    const usedPromocodes = ref([]);
    const isCodeExist = ref(true);

    const summary = computed(
      () => subtotal.value - (subtotal.value * discountSum.value) / 100
    );

    const changeQuantity = (target, quantityValue) => {
      const cartItem = target.closest('.cart-item');

      const cartChanged = cart.value.map((item) => {
        if (item.cartID == cartItem.dataset.cartId) {
          item.quantity = +quantityValue;
        }
        return item;
      });

      store.commit('setQuantity', cartChanged);
    };

    const onChangeQuantity = ({ target }) => {
      const quantityValue = target.value;

      changeQuantity(cartItem, quantityValue);
    };

    const onPlusToQuantity = ({ target }) => {
      let input = target.closest('.cart-item--button').previousSibling
        .firstChild;

      input.value = +input.value + 1;

      changeQuantity(target, input.value);
    };

    const onMinusToQuantity = ({ target }) => {
      let input = target.closest('.cart-item--button').nextSibling.firstChild;

      if (+input.value === 1) {
        return;
      }

      input.value = +input.value - 1;
      changeQuantity(target, input.value);
    };

    const onRemoveCartItem = ({ target }) => {
      const cartID = target.closest('.cart-item').dataset.cartId;

      store.commit('deleteCartItem', cartID);
    };

    const onGetPromocode = ({ target }) => {
      isCodeExist.value = false;

      promocodes.value.forEach((item) => {
        if (
          item.name.toUpperCase() === target.value.toUpperCase() &&
          !usedPromocodes.value.includes(item.id)
        ) {
          discountSum.value += item.sum;
          usedPromocodes.value.push(item.id);

          isCodeExist.value = true;
        }
      });

      target.value = '';
    };

    return {
      cart,
      subtotal,
      summary,
      discountSum,
      isCodeExist,

      onChangeQuantity,
      onPlusToQuantity,
      onMinusToQuantity,
      onRemoveCartItem,
      onGetPromocode,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

h1 {
  margin-bottom: 50px;
}

.tasks-list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 35px;

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 25px;
    height: 25px;

    background-color: $primary-color-dark;
    border-radius: 50%;

    color: $background-color;
    opacity: 0.3;
  }

  .line {
    height: 2px;
    width: 100%;
    background-color: $primary-color;
    opacity: 0.3;
  }

  .active {
    background-color: $primary-color;
    opacity: 1;
  }
}

.cart-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 30px 10px;

  &--info {
    display: flex;
    align-items: center;
  }

  &--title {
    margin-left: 35px;
  }

  &--edit {
    display: flex;
    width: 40%;
    justify-content: space-between;
  }

  &--quantity {
    display: flex;
  }

  &--price {
    margin-left: 25px;
    font-weight: bold;
  }

  &--button button {
    border: none;

    height: 25px;
    width: 25px;

    line-height: 0;
    font-weight: bold;
  }

  &--button button:hover {
    background-color: inherit;
  }

  &--input input {
    width: 50px;
    height: 25px;

    text-align: center;
    border-radius: 7px;
    border: 1px solid black;

    background-color: $background-color;
  }

  &--image img {
    width: 100px;
    border-radius: 50%;
  }
}

.remove-button {
  margin-left: 25px;
  cursor: pointer;
}

.subtotal-container {
  display: flex;
  justify-content: flex-end;
}

.subtotal {
  width: 290px;
  margin-top: 55px;

  border-radius: 3px;

  &--info {
    margin-bottom: 25px;
  }

  &--info,
  .promocode,
  .sale,
  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sale {
    color: $accent-color-dark;
  }

  .summary {
    font-weight: bold;
  }

  .next-page {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
  }

  button {
    border-color: $primary-color;
    padding: 15px 30px;
  }

  button:focus {
    border-color: $accent-color;
    background-color: $accent-color-light;
  }

  .promocode,
  .sale,
  .horizontal-line {
    margin-bottom: 25px;
  }

  input {
    width: 110px;

    margin-left: 15px;
    padding: 5px 10px;

    border-radius: 5px;
    border: 2px solid $primary-color;

    background-color: $background-color;

    transition: all 0.2s linear;
  }

  input:focus {
    border-color: $accent-color;
  }

  input::placeholder {
    font-weight: 300;
  }

  .promocode {
    &--inner {
      position: relative;
    }

    &--error {
      position: absolute;
      bottom: -16px;
      right: 0;

      font-size: 12px;
      color: red;
    }
  }
}

.horizontal-line {
  background-color: lightgray;
}
</style>
