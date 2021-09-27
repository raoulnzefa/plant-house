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
        <div class="footer-item">
          <h3>GET IN TOUCH</h3>
          <div class="margin-bottom--35">
            <div class="margin-bottom--15">Monday-Friday</div>
            <div>10am-4pm EST</div>
          </div>
          <div>
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
        <div class="footer-item no-grows">
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
@import '../../style/variables.scss';

.footer {
  width: 100vw;
  height: 400px;

  // background-color: $primary-color;
  border-top: 1px solid lightgray;

  background: url('../../assets/img/back-flowers.jpeg');

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
    }

    .logo-item {
      flex-basis: 75px;
    }

    .logo {
      font-size: $font-size + 28px;
      margin-top: 65px;
      margin-bottom: 25px;
      padding: 0;
    }
  }

  .footer-item {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;

    margin-right: 30px;

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
  }
}

.margin-bottom--15 {
  margin-bottom: 15px;
}

.margin-bottom--35 {
  margin-bottom: 35px;
}

button {
  display: block;
  background-color: inherit;

  padding: 10px 8px;
  border: 2px solid $accent-color;

  transition: all 0.2s linear;
}

button:hover {
  background-color: $accent-color;
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
  color: black;

  transition: color 0.2s linear;
}

a:hover {
  color: $accent-color;
}

input {
  display: block;

  font-size: $font-size;

  width: 100%;
  background-color: inherit;
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
</style>
