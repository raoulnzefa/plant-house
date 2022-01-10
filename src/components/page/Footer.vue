<template>
  <div class="footer">
    <div class="inner">
      <div class="container">
        <div class="footer-item logo-item">
          <span class="logo">Plant House</span>
          <span class="description margin-bottom--15"
            >Plants and flowers delivery service</span
          >
          <div class="icon">
            <img
              src="../../assets/icons/footer/footer-icon.png"
              alt="plant house icon"
            />
          </div>
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
              <input
                type="text"
                name="first-name"
                placeholder="John"
                autocomplete="off"
              />
            </div>

            <label for="email">E-mail</label>
            <div class="input">
              <input
                type="email"
                name="email"
                placeholder="youremail@mail.org"
                autocomplete="off"
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
              @click.prevent="$router.push({ name: item.name })"
            >
              {{ item.name }}
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
  background-color: $green-color-light;

  @include media('<=phone') {
    height: 100%;
    background-size: cover;
    background-position: bottom;
  }

  .inner {
    width: 100%;
    height: 100%;

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
      flex-basis: 40px;
      margin-right: 65px;

      @include media('<=phone') {
        margin-top: 10px;
        margin-right: 0;
      }
    }

    .logo {
      font-size: $font-size + 28px;
      margin-top: 55px;
      margin-bottom: 25px;
      padding: 0;

      @include media('<=phone') {
        margin-top: 0;
        text-align: center;
      }
    }

    .description {
      @include media('<=phone') {
        text-align: center;
      }
    }

    .icon {
      text-align: center;
      margin-top: 5px;

      img {
        width: 45px;
      }
    }

    button {
      border-color: $green-color-dark;
      border-radius: 4px;

      @include media('<=phone') {
        margin: 0 auto;
      }
    }

    button:hover {
      border-color: $orange-color;
      background-color: inherit;
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
  color: $font-color;

  transition: color 0.2s linear;
}

a:hover {
  color: $orange-color;
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

  border-bottom: 2px solid $primary-color-dark;
  border-radius: 0;

  margin: 5px 0 35px;
  padding: 5px 0;
}

input:focus {
  border-color: $orange-color;
}

input::placeholder {
  font-weight: 300;
}

.phone-view {
  @include media('<=phone') {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  &--flex-order {
    @include media('<=phone') {
      order: 1;
    }
  }
}
</style>
