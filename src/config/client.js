import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

const manageToken = (config) => {
  const newConfig = { ...config };
  if (localStorage.jwtToken) {
    newConfig.headers.common.Authorization = localStorage.jwtToken;
  } else {
    delete newConfig.headers.common.Authorization;
  }
  return newConfig;
};

instance.interceptors.request.use((config) => {
  const currentConfig = config;
  if (!currentConfig.headers) {
    currentConfig.headers = {};
    return manageToken(currentConfig);
  }
  if (!currentConfig.headers.common) {
    currentConfig.headers.common = {};
    return manageToken(currentConfig);
  }
  return manageToken(currentConfig);
});
