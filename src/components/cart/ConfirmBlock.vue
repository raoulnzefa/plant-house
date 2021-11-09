<template>
  <div class="confirmation">
    <div class="button--go-back">
      <button @click.prevent="$router.go(-1)">{{ '< ' }}Go back</button>
    </div>
    <h2>Confirm your order</h2>
    <div class="confirmation--inner">
      <div class="confirmation--cart">
        <div class="header">Bouquets</div>
        <div class="cart-item" v-for="(item, index) in cart" :key="index">
          <div class="cart-item--image">
            <img :src="item.image" alt="image" />
          </div>
          <div class="cart-item--info">
            <div class="cart-item--title">
              <h4>{{ item.title }}</h4>
            </div>

            <div class="cart-item--price">
              <span>Price by one: </span>
              <span class="bold margin-left">{{ ' ' + item.price + '$' }}</span>
            </div>
            <div class="cart-item--quantity">
              <span>Quantity: </span>
              <span class="bold margin-left">{{ ' ' + item.quantity }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="vertical-line"></div>

      <div class="confirmation--delivery">
        <div class="header">Your info</div>
        <div>
          <div class="info-block full-name">
            <span class="bold">Your full name:</span>
            <span class="margin-left">{{
              ' ' + orderDetails.firstName + ' ' + orderDetails.lastName
            }}</span>
          </div>
          <div class="info-block email">
            <span class="bold">E-mail:</span>
            <span class="margin-left">{{ ' ' + orderDetails.email }}</span>
          </div>
          <div class="info-block phone">
            <span class="bold">Phone number:</span>
            <span class="margin-left">{{ ' ' + orderDetails.phoneNum }}</span>
          </div>
        </div>

        <div class="header margin-top">Delivery</div>

        <div
          class="confirmation--mail-delivery"
          v-if="orderDetails.deliveryType === 'delivery-service'"
        >
          <div class="info-block">
            <span class="bold">Delivery by {{ ' ' }}</span> mail service
          </div>
          <div class="info-block delivery--full-name">
            <span class="bold">Recipient full name: </span>
            <span class="margin-left">{{
              ' ' +
                orderDetails.mailDelivery.firstNameDelivery +
                ' ' +
                orderDetails.mailDelivery.lastNameDelivery
            }}</span>
          </div>
          <div class="info-block delivery--phone">
            <span class="bold">Phone number:</span>
            <span class="margin-left">{{
              ' ' + orderDetails.mailDelivery.phoneNumDelivery
            }}</span>
          </div>
          <div class="info-block delivery--city">
            <span class="bold">City:</span>
            <span class="margin-left">{{
              ' ' + orderDetails.mailDelivery.cityName
            }}</span>
          </div>
          <div class="info-block delivery--branch">
            <span class="bold">Branch number:</span>
            <span class="margin-left">{{
              ' ' + orderDetails.mailDelivery.branchNum
            }}</span>
          </div>
        </div>
        <div class="confirmation--pickup-delivery" v-else>
          <div class="info-block">
            <span class="bold">Delivery by {{ ' ' }}</span
            >self-pickup
          </div>
          <div class="info-block pickup--branch">
            <span class="bold">Branch number:</span>
            <span class="margin-left">{{
              ' ' + orderDetails.pickupDelivery.branchPickup
            }}</span>
          </div>
        </div>
      </div>

      <div class="vertical-line"></div>

      <div class="info-block confirmation--price">
        <div class="header">Price</div>
        <div>
          <div class="info-block">
            <span class="bold">Subtotal:</span>
            <span class="margin-left">{{ ' ' + price.subtotal }}$</span>
          </div>

          <div class="info-block">
            <span class="bold">Sale:</span>
            <span class="margin-left">{{ ' -' + price.discount }}$</span>
          </div>

          <div class="info-block">
            <span class="bold">Delivery:</span>
            <span class="margin-left">{{ ' ' + price.delivery }}$</span>
          </div>

          <div class="horizontal-line"></div>

          <div class="info-block summary-style">
            <span class="bold">Summary:</span>
            <span class="bold margin-left">{{ ' ' + price.summary }}$</span>
          </div>
        </div>
      </div>
    </div>

    <div class="button--continue">
      <button @click="onConfirmOrder">Confirm order</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Confirm Block',
  setup() {
    const store = useStore();
    const router = useRouter();

    const cart = computed(() => store.state.cart),
      order = computed(() => store.state.order);

    const { price, orderDetails } = toRefs(order.value);

    const onConfirmOrder = () => {
      store.commit('clearOrder');
      store.commit('clearCart');
      store.commit('changeModalValue');

      router.push({ name: 'Home' });
    };

    return {
      cart,
      price,
      orderDetails,

      onConfirmOrder,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

h4 {
  margin-bottom: 15px;
  color: $primary-color;
}

.confirmation {
  .header {
    margin-bottom: 30px;
    color: rgb(175, 174, 174);
  }

  .bold {
    font-weight: bold;
  }

  &--cart,
  &--delivery,
  &--price {
    display: flex;
    flex-direction: column;
    align-items: center;

    flex: 1 1 0;
  }

  &--cart {
    margin-right: 10px;
  }

  &--delivery {
    flex-grow: 1.2;
  }

  &--price .summary-style {
    color: $accent-color;
  }

  .margin-left {
    margin-left: 5px;
  }
}

.margin-top {
  margin-top: 35px;
}

.confirmation--inner {
  display: flex;
  justify-content: space-between;

  .info-block {
    margin-bottom: 20px;
  }
}

.cart-item {
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 15px;

  border-bottom: 1px solid lightgray;

  span {
    font-size: 14px;
  }

  &--info {
    margin-left: 25px;
  }

  &--image img {
    width: 65px;
    border-radius: 50%;
  }

  &--price,
  &--quantity {
    margin-bottom: 8px;
  }
}

.button--continue {
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
}

.cart-item:last-of-type {
  border-bottom: none;
}

.horizontal-line {
  margin-bottom: 25px;
}
</style>
