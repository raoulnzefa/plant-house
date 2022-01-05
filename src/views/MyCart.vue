<template>
  <div class="cart-list container">
    <h1>Shopping bag</h1>

    <div class="cart-inner" v-if="cart.length && $route.name !== 'Confirmed'">
      <div class="button--go-back" v-if="$route.name !== 'My Cart'">
        <button @click.prevent="$router.go(-1)">{{ '< ' }}Go back</button>
      </div>

      <div class="tasks-list">
        <div class="circle active" :class="{ 'done-task': isDeliveryPath }">
          {{ isDeliveryPath ? '' : 1 }}
        </div>
        <div class="line" :class="{ active: isDeliveryPath }"></div>
        <div
          class="circle"
          :class="{
            active: isDeliveryPath,
            'done-task': isOrderConfirmationPath,
          }"
        >
          {{ isOrderConfirmationPath ? '' : 2 }}
        </div>
        <div class="line" :class="{ active: isOrderConfirmationPath }"></div>
        <div class="circle" :class="{ active: isOrderConfirmationPath }">3</div>
      </div>

      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

      <div v-if="isCart">
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

            <div class="cart-item--title desktop">
              <h3>{{ item.title }}</h3>
            </div>
          </div>

          <div class="cart-item--info cart-item--edit">
            <div class="cart-item--title mobile">
              <h3>{{ item.title }}</h3>
            </div>

            <div class="cart-item--quantity desktop">
              <div class="cart-item--button">
                <button @click="onMinusToQuantity">-</button>
              </div>
              <div class="cart-item--input">
                <input
                  type="text"
                  :value="item.quantity"
                  @change="onChangeQuantity"
                  @input="onValidNum"
                />
              </div>

              <div class="cart-item--button">
                <button @click="onPlusToQuantity">+</button>
              </div>
            </div>

            <div class="cart-item--price">
              <span>{{ item.price }}$</span>
            </div>

            <div
              class="remove-button desktop delete-button"
              @click="onRemoveCartItem"
            >
              X
            </div>
          </div>

          <div class="cart-item--info mobile-flex cart-item--edit-delete">
            <div
              class="remove-button delete-button"
              @click="onRemoveCartItem"
            ></div>

            <div class="cart-item--quantity mobile">
              <div class="cart-item--input">
                Q:
                <input
                  type="text"
                  :value="item.quantity"
                  @change="onChangeQuantity"
                  @input="onValidNum"
                />
              </div>
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
              <BaseInput
                type="text"
                label="Promo code:"
                placeholder="Your code"
                v-model="promocode.value"
                @change="onGetPromocode"
                :error="promocode.error"
              />
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
              <button @click="onNextPageButton">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="cart-inner empty-cart"
      v-if="$route.name !== 'Confirmed' && !cart.length"
    >
      <p>
        Ooops... Your shopping cart is empty. You might find something in the
        <router-link :to="{ name: 'Shop' }" class="empty">Shop</router-link>.
      </p>
    </div>

    <div v-if="$route.name === 'Confirmed'" class="confirmed">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { computed, ref, watch, reactive } from 'vue';
import BaseInput from '@/components/base_elements/BaseInput.vue';

export default {
  name: 'MyCart',
  components: {
    BaseInput,
  },
  setup() {
    const store = useStore();
    const router = useRouter(),
      route = useRoute();

    const cart = computed(() => store.state.cart);
    const isCart = ref(true);

    const isDeliveryPath = ref(false),
      isOrderConfirmationPath = ref(false);

    const subtotal = computed(() =>
      cart.value.reduce((sum, item) => (sum += +item.price * +item.quantity), 0)
    );

    const summary = computed(
      () => subtotal.value - (subtotal.value * discountSum.value) / 100
    );

    watch(
      () => route.name,
      (value) => {
        if (value === 'My Cart') {
          isCart.value = true;
          isDeliveryPath.value = false;
          isOrderConfirmationPath.value = false;
        } else if (value === 'Delivery') {
          isCart.value = false;

          isDeliveryPath.value = true;
          isOrderConfirmationPath.value = false;
        } else {
          isCart.value = false;

          isOrderConfirmationPath.value = true;
        }
      }
    );

    // QUANTITY

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

      changeQuantity(target, quantityValue);
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

    //CART

    const onRemoveCartItem = ({ target }) => {
      const cartID = target.closest('.cart-item').dataset.cartId;

      store.commit('deleteCartItem', cartID);
    };

    //PROMOCODE

    const promocode = reactive({
      value: '',
      error: '',
    });

    const promocodes = computed(() => store.state.promocodes);
    const discountSum = ref(0);
    const usedPromocodes = ref([]);

    const onGetPromocode = () => {
      promocode.error = '';

      promocodes.value.forEach((item) => {
        if (
          item.name.toUpperCase() === promocode.value.toUpperCase() &&
          !usedPromocodes.value.includes(item.id)
        ) {
          discountSum.value += item.sum;
          usedPromocodes.value.push(item.id);
        } else {
          promocode.error = 'This code is not exist';
        }
      });

      promocode.value = '';
    };

    //BUTTONS

    const onNextPageButton = () => {
      isCart.value = false;

      store.commit('setOrderPrice', {
        subtotal: subtotal.value,
        discount: discountSum.value,
        summary: summary.value,
      });
      router.push({ name: 'Delivery' });
    };

    // VALID INPUT

    const onValidNum = ({ target, data }) => {
      if (+target.value > 10) {
        target.value = target.value.replace(data, '');
      }

      target.value = target.value.replace(/[^\d]/g, '');
    };

    return {
      cart,
      subtotal,
      summary,
      discountSum,

      isCart,
      isDeliveryPath,
      isOrderConfirmationPath,

      promocode,

      onChangeQuantity,
      onPlusToQuantity,
      onMinusToQuantity,
      onRemoveCartItem,
      onGetPromocode,
      onNextPageButton,
      onValidNum,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

h1 {
  margin-top: 95px;
  margin-bottom: 25px;
}

h3 {
  margin-bottom: 0;

  @include media('<=630px', '>360px') {
    margin-bottom: 10px;

    font-size: 20px;
    text-align: center;
  }

  @include media('<=360px') {
    margin-bottom: 10px;

    font-size: 18px;
    text-align: center;
  }
}

.button--go-back {
  button {
    border-width: 0;
    padding: 0;
    font-weight: bold;
  }

  button:hover {
    background-color: inherit;
    color: $orange-color;
  }
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

    background-color: $orange-color;
    border-radius: 50%;

    color: $background-color;
    opacity: 0.3;
  }

  .line {
    height: 2px;
    width: 100%;
    background-color: $orange-color;
    opacity: 0.3;
  }

  .active {
    background-color: $orange-color;
    opacity: 1;
  }

  .done-task {
    background-image: url('../assets/icons/done.png');
    background-size: contain;

    background-color: inherit;

    transform: scale(1.2);
  }
}

.cart-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 30px 10px;

  @include media('<=630px') {
    align-items: center;

    padding: 30px 0;
  }

  &--info {
    display: flex;
    align-items: center;
  }

  &--title {
    margin-left: 35px;
    @include media('<=630px') {
      margin: 0;
    }
  }

  &--edit {
    display: flex;
    width: 40%;
    justify-content: space-between;

    @include media('<=630px') {
      flex-direction: column;
      align-items: center;

      flex-grow: 0;

      min-height: 65px;
    }
  }

  &--edit-delete {
    @include media('<=630px') {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      min-height: 90px;
    }
  }

  &--quantity {
    display: flex;
  }

  &--price {
    margin-left: 25px;
    font-weight: bold;

    @include media('<=630px') {
      margin-left: 0;
    }
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

  &--input {
    @include media('<=360px') {
      font-size: 12px;
    }
  }

  &--input input {
    width: 50px;
    height: 25px;

    text-align: center;
    border-radius: 7px;
    border: 1px solid black;

    background-color: $background-color;

    margin-left: 0 !important;

    @include media('<=630px', '>360px') {
      width: 40px;
    }

    @include media('<=360px') {
      width: 30px;
      font-size: 12px;
    }
  }

  &--image img {
    width: 100px;
    height: 100px;

    border-radius: 50%;

    @include media('<=630px', '>360px') {
      width: 90px;
      height: 90px;
    }

    @include media('<=360px') {
      width: 70px;
      height: 70px;
    }
  }
}

.remove-button {
  margin-left: 25px;
  cursor: pointer;

  @include media('<=630px', '>360px') {
    margin-left: 0;

    width: 25px;
    height: 25px;

    background-image: url('../assets/icons/delete-bin.png');
    background-size: contain;
  }

  @include media('<=360px') {
    width: 20px;
    height: 20px;

    background-image: url('../assets/icons/delete-bin.png');
    background-size: contain;
  }
}

.subtotal-container {
  display: flex;
  justify-content: flex-end;

  @include media('<=630px') {
    justify-content: center;
  }
}

.subtotal {
  width: 290px;
  margin-top: 55px;

  border-radius: 3px;

  @include media('<=630px') {
    margin-top: 45px;
    width: 100%;
  }

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

    @include media('<=630px') {
      margin-top: 60px;
      justify-content: center;
    }
  }

  button {
    border-color: $primary-color;
    padding: 15px 30px;

    margin-bottom: 45px;
  }

  button:focus {
    border-color: $accent-color;
    background-color: $accent-color-light;
  }

  .promocode,
  .sale,
  .horizontal-line {
    margin-bottom: 25px;

    @include media('<=630px') {
      margin-bottom: 35px;
    }
  }

  .promocode {
    &--error {
      font-size: 12px;
      color: red;
    }
  }
}

.empty-cart {
  margin-bottom: 75px;
  margin-top: 45px;
}

.empty {
  font-weight: 600;
}

.confirmed {
  margin: 0 auto;
}

// MOBILE / DESKTOP

.mobile {
  display: none;
  @include media('<=630px') {
    display: block;
  }
}

.mobile-flex {
  display: none;
  @include media('<=630px') {
    display: flex;
  }
}

.desktop {
  @include media('<=630px') {
    display: none;
  }
}
</style>
