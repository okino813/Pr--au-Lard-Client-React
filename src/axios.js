axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Accept'] = 'application/json'; // Toujours, pour éviter les redirections
    return config;
  },
  error => Promise.reject(error)
);
