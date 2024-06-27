import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // Adjust this to match your Django backend URL

export interface Item {
  id: number;
  name: string;
  description: string;
}

export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get(`${API_URL}/items/`);
  return response.data;
};

export const createItem = async (item: Omit<Item, 'id'>): Promise<Item> => {
  const response = await axios.post(`${API_URL}/items/`, item);
  return response.data;
};

export const updateItem = async (item: Item): Promise<Item> => {
  const response = await axios.put(`${API_URL}/items/${item.id}/`, item);
  return response.data;
};

export const deleteItem = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/items/${id}/`);
};

