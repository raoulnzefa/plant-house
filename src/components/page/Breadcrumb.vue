<template>
  <div class="breadcrumb">
    <nav>
      <ul>
        <li
          @click="$router.push({ name: routeInfo.mainPage })"
          class="active-link"
        >
          {{ routeInfo.mainPage.toCapitalizeLetter() }}
        </li>
        <li>></li>
        <li
          @click="$router.push({ name: routeInfo.subPage.pathName })"
          class="active-link"
        >
          {{ routeInfo.subPage.name.toCapitalizeLetter() }}
        </li>
        <li>></li>
        <li>{{ routeInfo.currentPage }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcramb',
  props: {
    routeInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.breadcrumb {
  margin: 0 0 35px 0;

  @include media('<=tablet') {
    margin-bottom: 25px;
    margin-top: 0;
  }
}

li {
  display: inline-block;
  margin-right: 8px;

  font-size: $font-size - 3px;
}

.active-link {
  color: $orange-color;
  cursor: pointer;
  text-decoration: underline;
}
</style>
