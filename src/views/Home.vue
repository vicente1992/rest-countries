<template>
  <div class="wrapper-content home">
    <CountryList />
  </div>
</template>

<script>
import CountryList from "../components/CountryList";
export default {
  name: "Home",
  components: {
    CountryList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 110px;
}
</style>