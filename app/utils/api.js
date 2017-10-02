import axios from 'axios'

const key = "7ccc1b4b8a0bc6f4685ba02450922a8c"

const api = {
  getCityInfo: (city) => {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + key + '&cnt=5').then((response) => {
      return response.data;
    }).catch((err) => {
      console.warn('Error in getCityInfo', err)
    });
  },
  currentDay: (city) => {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + key).then((response) => {
      return response.data;
    }).catch((err) => {
      console.warn('Error in currentDay', err)
    });
  }

}

export default api;