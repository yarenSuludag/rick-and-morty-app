// src/utils/api.js
import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
