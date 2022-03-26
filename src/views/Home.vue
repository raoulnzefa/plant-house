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
        <div class="grid-block grid-block--2">
          <div class="image image-1"></div>
        </div>
        <div class="grid-block grid-block--3">
          <div class="image image-2"></div>
        </div>
        <div class="grid-block grid-block--4">
          <div class="image image-3"></div>
        </div>
      </div>
    </section>

    <section>
      <InfoBlock :id="2" />
    </section>

    <section class="container">
      <div class="studies">
        <div class="studies--list">
          <h3>Studies have shown that indoor plants:</h3>

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
        <img
          class="studies--image"
          src="../assets/png/plant-9473.webp"
          alt="plant image"
        />
      </div>
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

    <section class="container">
      <Bestsellers class="bestsellers" />
    </section>
  </div>
</template>

<script>
import InfoBlock from '@/components/home/InfoBlock.vue';
import PhotoCollage from '@/components/home/PhotoCollage.vue';
import Bestsellers from '@/components/home/Bestsellers.vue';
import GeneralSlider from '@/components/home/GeneralSlider.vue';

import { onMounted, onUnmounted, computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Home',
  components: {
    InfoBlock,
    PhotoCollage,
    Bestsellers,
    GeneralSlider,
  },
  setup() {
    const store = useStore();
    const windowHeight = computed(() => store.state.windowHeight);
    let unwatch = null;

    onMounted(() => {
      document.title = 'Plant House';

      let floatingBlock = document.querySelector('.floating-block'),
        floatingBlockInner = document.querySelector('.floating-block--inner');

      floatingBlock.style.height =
        1.5 * window.innerHeight + floatingBlockInner.clientHeight / 2 + 'px';

      let floatingBlockBackgroundImage = document.querySelector(
        '.floating-block--background-image'
      );
      floatingBlockBackgroundImage.style.height = innerHeight + 'px';

      unwatch = watch(
        () => windowHeight.value,
        () => {
          floatingBlock.style.height =
            1.5 * window.innerHeight +
            floatingBlockInner.clientHeight / 2 +
            'px';

          floatingBlockBackgroundImage.style.height = innerHeight + 'px';
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

p {
  line-height: 2;
}

.bestsellers {
  padding-top: 60px;
  margin-bottom: 70px;

  @include media('<=930px') {
    padding-top: 50px;
    margin-bottom: 20px;
  }
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
    flex-wrap: wrap;

    @include media('<=788px', '>phone') {
      flex-direction: column;
      align-items: center;
    }
  }

  &--item {
    width: 300px;
    text-align: center;
    line-height: 1.4;

    padding-bottom: 25px;
  }

  &--item:first-of-type {
    @include media('<=1124px', '>788px') {
      margin-left: 25px;
    }
  }

  &--item:nth-of-type(2) {
    @include media('<=1124px', '>788px') {
      margin-right: 25px;
    }
  }

  &--item:last-of-type {
    @include media('<=1124px', '>788px') {
      margin: 0 auto;
      padding-bottom: 0;
    }
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

    @include media('<=788px', '>632px') {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 20;
    }

    @include media('<=632px') {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 0;
    }
  }

  .grid-block {
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    &--1 {
      grid-column: 1 / 2;
      grid-row: 1 / 3;

      @include media('<=788px') {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
    }

    &--2 {
      grid-column: 3 / 4;
      grid-row: 1 / 3;

      @include media('<=788px', '>phone') {
        grid-column: 2 / 5;
        grid-row: 1 / 2;
      }
    }

    &--3 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      @include media('<=788px', '>phone') {
        grid-column: none;
        grid-row: none;
      }
    }

    &--4 {
      grid-column: 2 / 3;
      grid-row: 2 / 3;

      @include media('<=788px', '>phone') {
        grid-column: none;
        grid-row: none;
      }
    }

    &--2,
    &--3,
    &--4 {
      @include media('<=632px') {
        grid-column: none;
        grid-row: none;
      }
    }
  }

  h2 {
    margin: 0;
    margin-bottom: 35px;
    max-width: 310px;

    color: $font-color;
    font-size: 30px;
    font-weight: bold;

    text-align: start;

    @include media('<=632px') {
      max-width: none;
    }
  }

  h3 {
    margin: 0;
    margin-bottom: 45px;
    text-align: start;
  }

  h2,
  h3 {
    @include media('<=632px') {
      text-align: center;
    }
  }

  p {
    color: $font-color;
  }

  &--info {
    margin-bottom: 85px;
    padding-right: 75px;

    @include media('<=788px', '>632px') {
      padding-right: 25px;
    }

    @include media('<=632px') {
      margin-bottom: 0;
      padding-right: 0;
    }
  }

  .image {
    position: relative;

    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;

    z-index: 1;

    &-1 {
      background-image: url('../assets/img/home/how-to-use-1.webp');
    }

    &-2 {
      background-image: url('../assets/img/home/how-to-use-2.webp');
    }
    &-3 {
      background-image: url('../assets/img/home/how-to-use-3.webp');
    }
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

    background-image: url('../assets/img/home/1.webp');
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

  @include media('<=phone') {
    padding: 65px 0;
  }

  &--list {
    margin-left: 105px;

    @include media('<=930px') {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin-left: 0;
      padding: 0 45px;
    }

    @include media('<=phone') {
      padding: 0 35px;
    }

    li {
      list-style: circle;
      line-height: 2;

      @include media('<=930px') {
        margin-left: 35px;
      }
    }

    h3 {
      margin: 0;
      margin-bottom: 25px;
      line-height: 1.5;

      @include media('<=930px') {
        text-align: center;
      }
    }
  }

  &--image {
    position: absolute;
    right: -40px;
    bottom: 0;

    height: 480px;

    @include media('<=1120px', '>930px') {
      height: 300px;
    }

    @include media('<=930px') {
      display: none;
    }
  }
}

.service-details {
  background-color: $orange-color-light;
  margin-top: 80px;

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

    @include media('<=930px') {
      margin-bottom: 15px;
      text-align: center;
    }
  }

  &--block {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    padding: 25px 35px;

    line-height: 1.5;
    font-size: 14px;

    @include media('<=930px') {
      flex-direction: column;
      width: 200px;
    }

    @include media('<=425px') {
      margin: 0 auto;
    }

    .info {
      @include media('<=930px') {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .description {
        @include media('<=930px') {
          text-align: center;
        }
      }
    }

    .image {
      min-width: 45px;
      min-height: 45px;
      max-width: 45px;
      max-height: 45px;

      margin-right: 35px;

      background-size: contain;
      background-repeat: no-repeat;

      @include media('<=930px') {
        margin-right: 0;
        margin-bottom: 15px;
      }

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

  &--block:last-of-type {
    @include media('<=630px') {
      margin: 0 auto;
    }
  }
}
</style>

<style lang="scss">
@import '@/style/media/breakpoints.scss';

h1 {
  @include media('<=phone') {
    font-size: 32px;
    margin-top: 75px;
    margin-bottom: 35px;
  }
}
</style>
