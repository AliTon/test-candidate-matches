import axios from 'axios';

// Will declare this in .env file
const API_URL = 'https://countriesnow.space/api/v0.1';

class CitiesService {
  static getCitiesByCountry(country: string) {
    return axios.post(`${API_URL}/countries/cities`, {
      country
    });
  }
}

export default CitiesService;
