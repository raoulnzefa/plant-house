<template>
  <div class="footer">
    <div class="inner">
      <div class="container">
        <div class="footer-item logo-item">
          <span class="logo">~ Flower Home ~</span>
          <span class="margin-bottom--15"
            >Flower delivery and assembly service</span
          >
        </div>
        <div class="footer-item phone-view--flex-order">
          <h3>GET IN TOUCH</h3>
          <div class="margin-bottom--35">
            <div class="margin-bottom--15">Monday-Friday</div>
            <div>10am-4pm EST</div>
          </div>
          <div class="phone-view">
            <a
              class="margin-bottom--15"
              href="https://pinterest.com"
              target="_blank"
              >Pinterest</a
            >
            <a
              class="margin-bottom--15"
              href="https://instagram.com"
              target="_blank"
              >Instagram</a
            >
            <a href="https://facebook.com" target="_blank">Facebook</a>
          </div>
        </div>
        <div class="footer-item flex-grow">
          <h3>JOIN OUR MAILING LIST</h3>

          <div class="input-block">
            <label for="first-name">First Name</label>
            <div class="input">
              <input type="text" name="first-name" placeholder="John" />
            </div>

            <label for="email">E-mail</label>
            <div class="input">
              <input
                type="email"
                name="email"
                placeholder="youremail@mail.org"
              />
            </div>

            <button>Subscribe</button>
          </div>
        </div>
        <div class="footer-item no-grows" v-if="!$store.state.isTabletScreen">
          <h3>EXPLORE</h3>
          <div>
            <a
              v-for="(item, index) of menu"
              :key="index"
              class="margin-bottom--15"
              @click.prevent="$router.push({ name: item })"
            >
              {{ item }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Footer',

  setup() {
    const store = useStore();

    return {
      menu: computed(() => store.state.menu),
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.footer {
  width: 100vw;
  height: 400px;

  border-top: 1px solid lightgray;
  background: url('../../assets/img/back-flowers.jpeg');

  @include media('<=phone') {
    height: 100%;
    background-size: cover;
    background-position: bottom;
  }

  .inner {
    width: 100%;
    height: 100%;

    background: rgb(238, 237, 233);
    background: linear-gradient(
      180deg,
      rgba(238, 237, 233, 1) 0%,
      rgba(238, 237, 233, 0.7441351540616247) 86%,
      rgba(238, 237, 233, 0.5144432773109244) 100%
    );

    .container {
      display: flex;
      justify-content: center;

      padding-top: 55px;

      @include media('<=phone') {
        flex-direction: column-reverse;
        align-items: center;

        padding-top: 45px;

        margin-bottom: 0;
      }
    }

    .logo-item {
      flex-basis: 75px;

      @include media('<=phone') {
        margin-top: 10px;
      }
    }

    .logo {
      font-size: $font-size + 28px;
      margin-top: 65px;
      margin-bottom: 25px;
      padding: 0;

      @include media('<=phone') {
        text-align: center;
        margin-top: 0;
      }
    }

    button {
      border-color: $accent-color;

      @include media('<=phone') {
        margin: 0 auto;
      }
    }
  }

  .footer-item {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;

    margin-right: 30px;

    @include media('<=phone') {
      margin: 0 0 20px 0;
      min-width: 80%;
    }

    label {
      display: block;
      margin-bottom: 10px;
    }
  }

  .footer-item:last-of-type {
    margin-right: 0;
  }

  .flex-grow {
    flex-grow: 2;
  }

  .no-grows {
    flex-grow: 0;
    margin-left: 30px;

    @include media('<=phone') {
      margin-left: 0;
    }
  }
}

.margin-bottom--15 {
  margin-bottom: 15px;
}

.margin-bottom--35 {
  margin-bottom: 35px;
}

h3 {
  font-size: 18px;
}

.input-block {
  width: 100%;
}

a {
  display: block;

  cursor: pointer;

  font-weight: 400;

  transition: color 0.2s linear;
}

a:hover {
  color: $accent-color;
}

input[type='text'],
input[type='email'] {
  display: block;

  font-size: $font-size;

  width: 100%;
  background-color: inherit;
  background-image: none;
  border: none;
  margin: 0;
  padding: 0;
}

.input::after {
  content: '';
  display: block;

  width: 100%;
  min-height: 2px;
  margin: 5px 0 35px;

  background-color: $primary-color-dark;
}

input::placeholder {
  font-weight: 300;
}

.phone-view {
  @include media('<=phone') {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    a {
      color: $accent-color;
    }
  }

  &--flex-order {
    @include media('<=phone') {
      order: 1;
    }
  }
}

@supports (-webkit-overflow-scrolling: touch) {
  /* код тут будет работать только в iOS Safari */
}
</style>
