<template>
  <div class="delivery-modal">
    <div class="delivery-modal--inner">
      <div
        class="close-button"
        @click="$store.commit('changeModalValue')"
      ></div>
      <h2>Thank you for your order!</h2>
      <p>We already sent you e-mail list with your order details</p>
      <div class="confirmed-dilivery-icon"></div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { watch, computed, onMounted } from 'vue';

export default {
  name: 'Delivery Confirmed Modal',
  setup() {
    const store = useStore();
    const isShowModal = computed(() => store.state.isShowModal);

    // let modalWindow = {};

    // onMounted(() => {
    //   modalWindow = document.querySelector('.delivery-modal--inner');
    // });

    watch(isShowModal, () => {
      if (isShowModal.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.delivery-modal {
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $primary-color-opacity;

  .close-button {
    position: absolute;
    top: -20px;
    right: -25px;

    width: 25px;
    height: 25px;

    background-image: url('../../assets/icons/close-icon.png');
    background-size: contain;

    transition: all 0.2s linear;
    cursor: pointer;
  }

  .close-button:hover {
    background-image: url('../../assets/icons/close-icon-hover.png');
  }
}

.delivery-modal--inner {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 35vw;

  padding: 35px 0;

  background-color: $background-color;

  border: 1px solid $primary-color-dark;
  border-radius: 20px;

  transition: all 0.2s ease-out;

  z-index: 1000;
}

.confirmed-dilivery-icon {
  width: 100px;
  height: 100px;

  margin-top: 25px;

  background-image: url('../../assets/icons/confirmed-delivery.png');
  background-size: contain;

  animation: scalingInfinity 2s infinite;
}

@keyframes scalingInfinity {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
}
</style>
