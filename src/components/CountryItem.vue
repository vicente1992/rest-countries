<template>
  <div class="card" @click="goToDetail(country.alpha2Code)">
    <img :src="country.flag" :alt="shortName" />
    <div class="card-info">
      <h2>{{ shortName }}</h2>
      <p>
        Population: <span> {{ country.population }}</span>
      </p>
      <p>
        Region: <span>{{ country.region }}</span>
      </p>
      <p>
        Capital: <span>{{ country.capital }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortName() {
      return this.country.name.slice(0, 18);
    },
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: $ligth-elemtens;
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  text-align: left;
  transition: all 0.25s;
  &:hover {
    border-radius: 0 0 5px 5px;
    border-top: none;
    // transform: translateY(-15px);
  }
  img {
    border-radius: 5px 5px 0 0;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    width: 100%;
  }
  &-info {
    border-top: none;
    border: 1px solid transparent;
    padding: 24px;
    transition: 0.3s border;
    p {
      font-size: 14.5px;
      font-weight: 300;
      color: $ligth-text;
      margin: 5px 0;
    }
  }
}
</style>