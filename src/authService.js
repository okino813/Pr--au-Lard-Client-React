import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // change selon ton setup

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    const token = response.data.access_token;
    // Sauvegarde dans le localStorage (ou SecureStore / cookies etc.)
    localStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Erreur de connexion' };
  }
};
