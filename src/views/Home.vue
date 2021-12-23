<template>
  <div class="home">
    <GeneralSlider />

    <section class="container">
      <div class="why-plant-house">
        <h2>Why Plant House?</h2>
        <div class="why-plant-house--inner">
          <div class="why-plant-house--item">
            <div class="image image--1"></div>
            <div class="title">Unbeatable quality</div>
            <div class="description">
              We source directly from top-rated growers, so we can sell the
              finest quality plants at the very best prices.
            </div>
          </div>
          <div class="why-plant-house--item">
            <div class="image image--2"></div>
            <div class="title">Delivery to your door</div>
            <div class="description">
              We’ll bring your plants to your door, anywhere in Ukraine. If
              you’re not 100% happy, tell us within 30 days and we’ll sort it.
            </div>
          </div>
          <div class="why-plant-house--item">
            <div class="image image--3"></div>
            <div class="title">All the help you need</div>
            <div class="description">
              We’ll send you a free plant-parenting course and our plant doctors
              are always on call.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <InfoBlock :id="1" imgLocation="right" />
    </section>

    <section class="floating-block">
      <div class="floating-block--background-image"></div>
      <div class="container">
        <div class="floating-block--inner">
          <div class="info">
            <h2>
              Indoor plants don’t just look good—they can make us feel good,
              too.
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section class="how-to-use">
      <div class="container">
        <div class="how-to-use--info grid-block--1">
          <h3>PLANTS IN THE INTERIOR</h3>
          <h2>How to Use Plants in the Interior?</h2>
          <div class="text">
            <p>
              Indoor plants are smaller, they can still be up to 2 meters high.
              They are great for decorating huge spaces such as: lofts, flats
              with tall ceilings, balconies, offices and bars. ... The interior
              will look very interesting if yellow accents will be added
              together with the plant.
            </p>
          </div>
        </div>
        <!-- <div class="how-to-use--photos"> -->
        <div class="grid-block grid-block--2">
          <div class="image image-1"></div>
        </div>
        <div class="grid-block grid-block--3">
          <div class="image image-2"></div>
        </div>
        <div class="grid-block grid-block--4">
          <div class="image image-3"></div>
        </div>
        <!-- </div> -->
      </div>
    </section>

    <section>
      <InfoBlock :id="2" />
    </section>

    <section class="container">
      <div class="studies">
        <div class="studies--list">
          <h3>Studies have shown that indoor plants...</h3>

          <ul>
            <li>Boost your mood, productivity, concentration and creativity</li>
            <li>Reduce your stress, fatigue, sore throats and colds</li>
            <li>
              Help clean indoor air by absorbing toxins, increasing humidity &
              producing oxygen
            </li>
            <li>
              Add life to a sterile space, give privacy and reduce noise levels
            </li>
            <li>
              Are therapeutic to care for (it’s true when we say Plants Make
              People Happy)
            </li>
          </ul>
        </div>
        <img class="studies--image" src="../assets/png/plant-9473.png" />
      </div>
    </section>

    <section class="container">
      <Bestsellers class="bestsellers" />
    </section>

    <section class="service-details">
      <div class="container">
        <div class="service-details--block">
          <div class="image image--1"></div>
          <div class="info">
            <h2>
              Free delivery
            </h2>
            <div class="description">
              Free shipping around the world for all orders over 100$
            </div>
          </div>
        </div>

        <div class="vertical-line"></div>

        <div class="service-details--block">
          <div class="image image--2"></div>
          <div class="info">
            <h2>
              Secure payment
            </h2>
            <div class="description">
              Secure payment services are faster, safer, more secure way to pay
            </div>
          </div>
        </div>

        <div class="vertical-line"></div>

        <div class="service-details--block">
          <div class="image image--3"></div>
          <div class="info">
            <h2>
              Eco friendly
            </h2>
            <div class="description">
              Eco-friendly product keeps both environmental and human safe
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 
    <section class="follow-steps">
      <div class="container">
        <h2>Follow our Steps & Get your Plant</h2>
        <div class="follow-steps--blocks">
          <div class="step-block">
            <div class="number">01</div>
            <h3>Choose plants</h3>
            <p class="action">
              Empowering all people to be plant people to collection of articles
            </p>
          </div>
          <div class="step-block">
            <div class="number">02</div>
            <h3>Place an order</h3>

            <p class="action">
              Empowering all people to be plant people to collection of articles
            </p>
          </div>
          <div class="step-block">
            <div class="number">03</div>
            <h3>Get plant delivered</h3>
            <p class="action">
              Empowering all people to be plant people to collection of articles
            </p>
          </div>
        </div>
      </div>
      <div class="follow-steps--image"></div>
    </section> -->

    <div class="margin-bottom--130px"></div>
    <DeliveryConfirmedModal v-show="$store.state.isShowModal" />
  </div>
</template>

<script>
import InfoBlock from '@/components/home/InfoBlock.vue';
import PhotoCollage from '@/components/home/PhotoCollage.vue';
import Bestsellers from '@/components/home/Bestsellers.vue';
import DeliveryConfirmedModal from '@/components/home/DeliveryConfirmedModal.vue';
import GeneralSlider from '@/components/home/GeneralSlider.vue';

import { onMounted, onUnmounted, computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Home',
  components: {
    InfoBlock,
    PhotoCollage,
    Bestsellers,
    DeliveryConfirmedModal,
    GeneralSlider,
  },
  setup() {
    const store = useStore();
    const windowHeight = computed(() => store.state.windowHeight);
    let unwatch = null;

    onMounted(() => {
      let floatingBlock = document.querySelector('.floating-block'),
        floatingBlockInner = document.querySelector('.floating-block--inner');

      floatingBlock.style.height =
        1.5 * window.innerHeight + floatingBlockInner.clientHeight / 2 + 'px';

      unwatch = watch(
        () => windowHeight.value,
        () => {
          floatingBlock.style.height =
            1.5 * window.innerHeight +
            floatingBlockInner.clientHeight / 2 +
            'px';
        }
      );
    });

    onUnmounted(() => {
      unwatch();
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.home {
  position: relative;
}

.margin-bottom--130px {
  margin-bottom: 130px;
}

p {
  line-height: 2;
}

.bestsellers {
  padding: 80px 0 100px;
}

.why-plant-house {
  margin-top: 50px;
  padding: 80px 35px 100px;
  border: 1px solid $green-color;

  h2 {
    text-align: center;
    font-weight: bold;
    color: $font-color;
  }

  &--inner {
    display: flex;
    justify-content: space-between;
  }

  &--item {
    width: 300px;
    text-align: center;
    line-height: 1.4;
  }

  .image {
    width: 150px;
    height: 150px;

    margin: 0 auto 10px;

    background-size: contain;

    &--1 {
      background-image: url('../assets/img/home/why-1.svg');
    }
    &--2 {
      background-image: url('../assets/img/home/why-2.svg');
    }
    &--3 {
      background-image: url('../assets/img/home/why-3.svg');
    }
  }

  .title {
    font-weight: bold;
  }
}

.how-to-use {
  width: 100vw;

  padding: 85px 0;
  background-color: #d8dfd0;

  .container {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    margin-bottom: 0;
  }

  .grid-block {
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    &--1 {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    &--2 {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }

    &--3 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    &-- {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  }

  h2 {
    margin: 0;
    margin-bottom: 35px;
    width: 310px;

    // color: #9dad6f;
    color: $font-color;
    font-size: 30px;
    font-weight: bold;

    text-align: start;
  }

  h3 {
    margin: 0;
    margin-bottom: 45px;
    text-align: start;
  }

  p {
    color: $font-color;
  }

  &--info {
    margin-bottom: 85px;
    padding-right: 75px;
  }

  .image {
    position: relative;

    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;

    z-index: 1;

    &-1 {
      background-image: url('https://images.pexels.com/photos/8988966/pexels-photo-8988966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }

    &-2 {
      background-image: url('https://images.pexels.com/photos/5825380/pexels-photo-5825380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
    &-3 {
      background-image: url('https://images.pexels.com/photos/5997975/pexels-photo-5997975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
  }

  .photo-viewer {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: $primary-color-light;
  }
}

.floating-block {
  position: relative;

  width: 100vw;

  &--background-image {
    position: sticky;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-image: url('../assets/img/home/1.jpg');
    background-size: cover;
    background-position: center;

    z-index: -1;
  }

  .container {
    display: flex;
    justify-content: flex-end;
  }

  &--inner {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 8px solid $background-color;
  }

  .info {
    width: 80%;
    height: 80%;

    h2 {
      color: $background-color;
      text-transform: uppercase;
      font-weight: bold;
      padding: 40px 30px;

      text-shadow: 0px 0px 20px rgb(0, 0, 0);
    }
  }
}

.studies {
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid $green-color;

  padding: 95px 0;

  &--list {
    margin-left: 105px;
    li {
      list-style: circle;
      line-height: 2;
    }

    h3 {
      margin: 0;
      margin-bottom: 25px;
    }
  }

  &--image {
    position: absolute;
    right: -40px;
    bottom: 0;

    height: 480px;
  }
}

.follow-steps {
  position: relative;
  z-index: 5;
  background-color: $pink-color;
  padding: 85px 0;

  &--image {
    position: absolute;
    left: -30px;
    bottom: -110px;

    width: 800px;
    height: 200px;

    background-image: url('../assets/png/plants-png-44922.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  h2 {
    text-align: center;
    font-size: 32px;
  }

  h3 {
    font-size: 20px;
  }

  &--blocks {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step-block {
    width: 31%;
    padding: 0 35px 25px;
    margin-top: 70px;
    background-color: $background-color;

    .number {
      font-weight: bold;
      font-size: 102px;
      color: $green-color;
      line-height: 1;

      margin-bottom: 25px;

      transform: translateY(-50%);
      transition: all 0.5s ease-in-out;
    }
  }

  .step-block:hover .number {
    transform: translateY(-35%);
  }
}

.service-details {
  background-color: $orange-color-light;

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 0;

    padding: 25px 0;
  }

  h2 {
    color: $font-color;
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }

  &--block {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33%;
    padding: 25px 35px;

    line-height: 1.5;
    font-size: 14px;

    .image {
      min-width: 45px;
      min-height: 45px;
      max-width: 45px;
      max-height: 45px;

      margin-right: 35px;

      background-size: contain;
      background-repeat: no-repeat;

      &--1 {
        background-image: url('../assets/icons/home/delivery.png');

        width: 55px;
        height: 55px;

        margin-top: -10px;
      }

      &--2 {
        background-image: url('../assets/icons/home/security.png');
      }

      &--3 {
        background-image: url('../assets/icons/home//eco.png');
      }
    }
  }
}
</style>

<style lang="scss">
@import '@/style/media/breakpoints.scss';

h1 {
  @include media('<=phone') {
    font-size: 32px;
    margin-top: 75px !important;
    margin-bottom: 35px;
  }
}
</style>
