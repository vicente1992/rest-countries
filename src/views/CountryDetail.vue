<template>
  <div class="wrapper-content detail">
    <template v-if="!isLoading">
      <button @click="goToBack" class="back">
        <i class="fas fa-arrow-left"></i> <span>Back</span>
      </button>
      <div class="wrapper-detail">
        <img class="image" :src="country.flag" :alt="country.name" />
        <div class="wrapper-info">
          <div class="info-left">
            <h3 class="name">{{ country.name }}</h3>
            <p>
              Native Name: <span> {{ country.nativeName }} </span>
            </p>
            <p>
              Population: <span> {{ country.population }} </span>
            </p>
            <p>
              Region: <span> {{ country.region }} </span>
            </p>
            <p>
              Sub Region: <span> {{ country.subregion }} </span>
            </p>
            <p>
              Capital: <span> {{ country.capital }} </span>
            </p>
          </div>
          <div class="info-right">
            <p>
              Top Level Damain:
              <span
                v-for="(item, index) in country.topLevelDomain"
                :key="index"
              >
                {{ item }}
              </span>
            </p>
            <p>
              Currencies:
              <span v-for="(item, index) in country.currencies" :key="index">
                {{ item.name }}
              </span>
            </p>
            <p>
              Languages:
              <span v-for="(item, index) in country.languages" :key="index">
                {{ item.name }}
              </span>
            </p>
          </div>
          <div class="border">
            <p class="title">
              Border Countries:
              <span
                @click="goToDetail(item)"
                class="btn-border"
                v-for="(item, index) in country.borders"
                :key="index"
              >
                {{ item }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </template>
    <div v-else>
      <p>Cargando.....</p>
    </div>
  </div>
</template>

<script>
import { getCountry } from "@/services/country.service";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      country: {},
      isLoading: false,
    };
  },
  created() {
    this.loadCountry();
  },
  methods: {
    async loadCountry() {
      try {
        this.isLoading = true;
        const response = await getCountry(this.id);
        this.country = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    goToDetail(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
    goToBack() {
      this.$router.push({ name: "home" });
    },
  },
  watch: {
    id() {
      this.loadCountry();
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  margin-top: 120px;
  .back {
    border: none;
    background-color: $ligth-elemtens;
    height: 35px;
    width: 120px;
    border-radius: 10px;
    font-size: 14px;
    color: $ligth-text;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    cursor: pointer;
    .fas {
      margin-right: 10px;
    }
  }
  .wrapper-detail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 95px;
    grid-row-gap: 0px;
    .image {
      overflow: hidden;
      max-height: 400px;
      width: 100%;
      object-fit: cover;
      margin-right: 90px;
    }

    .wrapper-info {
      max-height: 400px;
      display: flex;
      flex-wrap: wrap;

      .info-left {
        margin-right: 100px;
        .name {
          font-size: 30px;
          color: $ligth-text;
          margin: 20px 0;
        }
        p {
          color: $ligth-text;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 10px;

          span {
            color: $ligth-input;
            font-weight: 400;
            margin-left: 5px;
          }
        }
      }

      .info-right {
        // padding-top: 80px;
        margin-top: 80px;
        p {
          color: $ligth-text;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 10px;

          span {
            color: $ligth-input;
            font-weight: 400;
            margin-left: 5px;
          }
        }
      }
      .border {
        padding: 60px 0 30px 0;
        .title {
          color: $ligth-text;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 10px;
          display: flex;
          flex-wrap: wrap;
          .btn-border {
            border: none;
            background-color: hsl(0, 0%, 98%);
            height: 30px;
            width: 80px;
            font-size: 12px;
            color: $ligth-input;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 8px 10px;
            box-shadow: 1px 3px 11px -3px rgba(0, 0, 0, 0.46);
          }
        }
      }
    }
  }
}
@media (max-width: 991.98px) {
  .wrapper-detail {
    grid-template-rows: repeat(2, 1fr) !important;
    grid-template-columns: 1fr !important;
    grid-column-gap: 40px !important;
  }
}
@media (max-width: 550px) {
  .wrapper-info {
    margin-top: -70px;
    .info-right {
      margin-top: 10px !important;
    }
    .border {
      padding: 30px 0 30px 0 !important;
    }
  }
}
</style>
