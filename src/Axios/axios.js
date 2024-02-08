import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://65c200eef7e6ea59682a564a.mockapi.io'
})

axiosInstance.interceptors.request.use((config) => {
    config.headers['Authorization']='Bearer tokenByRohit';
    return config;
}, (error) => Promise.reject(error));

axiosInstance.interceptors.response.use(
    (response) => {
      if (response.data) {
        response.data = transformData(response.data);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  function transformData(data) {
    if (typeof data === 'string') {
      return data.toUpperCase();
    } else if (typeof data === 'object') {
      for (let key in data) {
        data[key] = transformData(data[key]);
      }
    }
    return data;
  }
  

export default axiosInstance;