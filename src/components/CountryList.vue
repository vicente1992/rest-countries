<template>
  <Search />
  <div class="wrapper-country">
    <CountryItem
      :country="country"
      v-for="country in countries"
      :key="country.id"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CountryItem from "./CountryItem";
import Search from "./Search";
export default {
  components: {
    Search,
    CountryItem,
  },
  computed: mapState({
    countries: (state) => state.countriesFilter,
  }),
  methods: {
    ...mapActions(["getCountries"]),
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style lang="scss" scoped>
.wrapper-country {
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-row-gap: 36px;
  grid-column-gap: 66px;
  margin: 54px 0;
  justify-content: center;
}
</style>