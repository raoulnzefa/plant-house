<template>
  <div class="confirmed">
    <h4>
      Thank you for your order! We will send you e-mail letter with all order
      details :)
    </h4>
    <p>Go <router-link :to="{ name: 'Home' }">Home</router-link></p>
    <img
      class="image"
      src="../../assets/icons/cart/success.png"
      alt="done-icon"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';
.confirmed {
  max-width: 375px;

  text-align: center;

  margin-bottom: 45px;
  margin-top: 45px;
  padding: 45px 35px;

  border: 1px solid $green-color;

  a {
    text-decoration: underline;
    color: $green-color;
  }
}

h4 {
  line-height: 1.5;
}

p {
  text-align: center;
  font-weight: bold;

  margin-top: 15px;
}

.image {
  width: 50px;
  margin-top: 25px;
}
</style>
