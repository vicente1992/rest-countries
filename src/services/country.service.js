
const url = 'https://restcountries.com/v2/'
import axios from 'axios'
export const getCountries = async () => {

  try {
    const result = await axios.get(`${url}/all`)
    return result
  } catch (error) {
    return error
  }
}
export const getCountry = async (id = '') => {

  try {
    const result = await axios.get(`${url}/alpha/${id}`)
    return result
  } catch (error) {
    return error
  }
}
