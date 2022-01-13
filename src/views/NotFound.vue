<template>
  <div class="container">
    <div class="not-found">404</div>
    <h2>Oooops.. Page not found!</h2>
    <p>
      You should return to the
      <router-link :to="{ name: 'Home' }">Home</router-link> page.
    </p>
  </div>
</template>

<script>
export default {
  setup() {
    document.title = 'Page not found';
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

h2 {
  margin-bottom: 25px;
}

.container,
p {
  text-align: center;
  margin-bottom: 45px;
}

.not-found {
  margin-top: 95px;
  margin-bottom: 25px;

  font-size: 82px;
  font-weight: bold;
}

a {
  text-decoration: underline;
  color: $orange-color;
}
</style>
