import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getLimitedProducts = async (limit = 5) => {
    try {
      const response = await axiosInstance.get(`/products?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching limited products:', error);
      throw error;
    }
  };


export default axiosInstance