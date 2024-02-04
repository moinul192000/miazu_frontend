import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

export const setAxiosAuthorization = (accessToken: string | null): void => {
  if (accessToken) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
