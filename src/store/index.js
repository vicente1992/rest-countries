import { createStore } from 'vuex'
import { getCountries } from '@/services/country.service'
export default createStore({
  state: {
    countries: [],
    countriesFilter: [],
    isLoading: true
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload    
    },
    setCountriesFilter(state, payload) {
      state.countriesFilter = payload
    },
    setLoading(state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    async getCountries({ commit }) {
      try {
       
        const response = await getCountries()
        commit('setCountries', response.data)
        commit('setCountriesFilter', response.data)
      } catch (error) {
        console.log(error);
      }
    },
    getCountryName({ commit, state }, name = '') {
      const formatName = name.toLowerCase()
      const results = state.countries.filter((country) => country.name.toLowerCase().includes(formatName))
      commit('setCountriesFilter', results)
    },
    getCountryRegion({ commit, state }, region) {
      const formatRegion = region.toLowerCase()
      const results = state.countries.filter((country) => country.region.toLowerCase().includes(formatRegion))
      commit('setCountriesFilter', results)
    }
  }

})
