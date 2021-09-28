<template>
  <div class="breadcrumb">
    <nav>
      <ul>
        <li
          @click="$router.push({ name: routeInfo.mainPage })"
          class="active-link"
        >
          {{ routeInfo.mainPage }}
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

.breadcrumb {
  margin: 35px 0;
}

li {
  display: inline-block;
  margin-right: 5px;

  font-size: $font-size - 3px;
}

.active-link {
  color: $primary-color;
  cursor: pointer;
  text-decoration: underline;
}
</style>
