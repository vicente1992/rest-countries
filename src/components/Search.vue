<template>
  <div class="wrapper-search">
    <div class="search">
      <span class="icon"><i class="fas fa-search"></i></span>
      <input type="text" v-model="name" placeholder="Search for a country" />
    </div>
    <div class="filter">
      <select v-model="region" name="" id="">
        <option
          :value="region.value"
          v-for="(region, index) in regionList"
          :key="index"
        >
          {{ region.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      region: "",
      regionList: [
        {
          name: "Filter by Region",
          value: "",
        },
        {
          name: "Africa",
          value: "africa",
        },
        {
          name: "Americas",
          value: "americas",
        },
        {
          name: "Asia",
          value: "asia",
        },
        {
          name: "Europe",
          value: "europe",
        },
        {
          name: "Oceania",
          value: "oceania",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["getCountryName", "getCountryRegion"]),
  },
  watch: {
    name() {
      this.getCountryName(this.name);
    },
    region(){
      this.getCountryRegion(this.region)
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper-search {
  display: flex;
  justify-content: space-between;
  .search {
    display: flex;
    align-items: center;
    height: 45px;
    width: 375px;
    background-color: $ligth-elemtens;
    border-radius: 4px;
    .icon {
      font-size: 18px;
      margin: 0 20px;
      color: $ligth-input;
    }
    input {
      border: none;
      height: 100%;
      width: 100%;
      outline: none;
      font-size: 15px;
      border-radius: 6px;
    }
  }
  .filter {
    height: 45px;
    width: 185px;
    background-color: $ligth-elemtens;
    border-radius: 6px;
    select {
      cursor: pointer;
      margin: 0 10px;
      height: 100%;
      width: 90%;
      border-radius: 6px;
      border: none;
      color: $ligth-input;
      outline: none;
    }
  }
  @media (max-width: 630px) {
    flex-direction: column;
    .search {
      margin-bottom: 20px;
    }
  }
}
</style>