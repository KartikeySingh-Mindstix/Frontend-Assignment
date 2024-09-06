import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllProducts = async () =>{
  
  try {
    const response = await axiosInstance.get(`/products`)
    return response.data.products;
  } catch (error) {
    console.log(error)
  }  

}

export const getProductsByCategory = async (categoryName) =>{
  try {
    const response = await axiosInstance.get(`/products/category/${categoryName}`);
    // console.log(response.data.products)
    return response.data.products;
  } catch (error) {
    console.log(error)
  }
}

export const getLimitedProducts = async (limit = 11) => {
  try {
    const response = await axiosInstance.get(`/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching limited products:', error);
    throw error;
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    // console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching limited products:', error);
    throw error;
  }
};

export default axiosInstance