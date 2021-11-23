<template>
  <div class="delivery-modal">
    <div class="delivery-modal--inner">
      <div
        class="close-button"
        @click="$store.commit('changeModalValue')"
      ></div>
      <h2>Thank you for your order!</h2>
      <p>We already sent you e-mail list with your order details</p>
      <div class="bouquet-image">
        <img src="../../assets/img/bouquet.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { watch, computed } from 'vue';

export default {
  name: 'Delivery Confirmed Modal',
  setup() {
    const store = useStore();
    const isShowModal = computed(() => store.state.isShowModal);

    const onCloseModal = ({ target }) => {
      if (target.closest('.delivery-modal--inner')) return;

      store.commit('changeModalValue');
    };

    watch(isShowModal, () => {
      if (isShowModal.value) {
        document.body.style.overflowY = 'hidden';
        document.body.addEventListener('mouseup', onCloseModal);
      } else {
        document.body.style.overflowY = 'auto';
        document.body.removeEventListener('mouseup', onCloseModal);
      }
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

h2 {
  margin-bottom: 10px;
}

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

  text-align: center;

  width: 45vw;

  padding: 35px 85px;

  background-color: $background-color;

  border: 1px solid $primary-color-dark;
  border-radius: 20px;

  transition: all 0.2s ease-out;

  z-index: 10000;

  @include media('<=phone') {
    width: 80vw;

    padding: 35px 45px;
  }

  .bouquet-image {
    position: absolute;
    bottom: -20px;
    left: -55px;

    animation: blockUp 2s;
  }

  .bouquet-image img {
    height: 210px;

    transform: rotate(-25deg);

    @include media('<=phone') {
      height: 150px;
    }
  }
}

@keyframes blockUp {
  0% {
    bottom: -35px;
    opacity: 0;
  }
  49% {
    opacity: 0.49;
  }
  51% {
    opacity: 0.51;
  }
  100% {
    bottom: -20px;
    opacity: 1;
  }
}
</style>
