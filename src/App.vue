
<template>
  <Header />

  <router-view></router-view>
</template>

<script>
import Header from "./components/Header";
export default {
  components: { Header },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 80px;
}
</style>