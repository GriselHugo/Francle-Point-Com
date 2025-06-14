import axios from 'axios';

class ApiService {
  constructor() {
    this.apiService = axios.create({
      baseURL: 'http://localhost:4000',
    });
  }

  /* getDailyChallenge
   * Fetches the daily challenge from the server.
   * Returns an object with a method to get today's challenge.
   */
  getDailyChallenge() {
    return {
      getTodayChallenge: async () => {
        try {
          const response = await this.apiService.get('/get-daily-challenge');
          console.log('Today\'s challenge fetched successfully:', response.data);
          // console.log('Today\'s challenge fetched successfully:', response);
          return response.data;
        } catch (error) {
          console.error('Error fetching today\'s challenge:', error);
          throw error;
        }
      }
    };
  }

  /* getPersonalizedChallenge
   * Fetches a personalized challenge based on the user's preferences.
   * Returns an object with a method to get the personalized challenge.
   */
  async getPersonalizedChallenge({ region_code, department_code, population }) {
    try {
      const rawParams = {
        region_code,
        department_code,
        population,
      };

      const params = Object.fromEntries(
        Object.entries(rawParams).filter(([_, v]) => v != null)
      );

      const response = await this.apiService.get('/get-personalized-game', { params });

      console.log('Personalized challenge fetched successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching personalized challenge:', error);
      throw error;
    }
  }

  /* SearchCities
   * Searches for cities based on a query string.
   * Returns an array of cities matching the query.
   */
  async searchCities(name) {
    try {
      const response = await this.apiService.get('/search-city', { params: { name } });
      console.log('Cities fetched successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching cities:', error);
      throw error;
    }
  }

}

const apiService = new ApiService();
export default apiService;
