import axios from 'axios';
import { API_CONSTANTS } from './constants';

const api = axios.create({
  baseURL: API_CONSTANTS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Store {
  id: string;
  name: string;
  logo: string;
  cover_photo: string;
  address: string;
  latitude: string;
  longitude: string;
  phone: string;
  delivery_time: string;
  minimum_order: number;
  cuisine_type: string;
  zone_id: string;
  rating: {
    average: number;
    total_reviews: number;
  };
}

export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export const getStores = async (): Promise<Store[]> => {
  try {
    const response = await api.get<ApiResponse<Store[]>>(API_CONSTANTS.ENDPOINTS.STORES);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching stores:', error);
    return [];
  }
};

export const getPopularStores = async (): Promise<Store[]> => {
  try {
    const response = await api.get<ApiResponse<Store[]>>(API_CONSTANTS.ENDPOINTS.POPULAR_STORES);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching popular stores:', error);
    return [];
  }
};

export const getLatestStores = async (): Promise<Store[]> => {
  try {
    const response = await api.get<ApiResponse<Store[]>>(API_CONSTANTS.ENDPOINTS.LATEST_STORES);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching latest stores:', error);
    return [];
  }
};

export const getStoreDetails = async (id: string): Promise<Store | null> => {
  try {
    const response = await api.get<ApiResponse<Store>>(`${API_CONSTANTS.ENDPOINTS.STORE_DETAILS}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching store details:', error);
    return null;
  }
};