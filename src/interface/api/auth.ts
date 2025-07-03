import axios from 'axios';
import { TSignUpSchema } from '@validations/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
});

interface SignUpResponse {
  message: string;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

export const signUp = async (data: TSignUpSchema): Promise<SignUpResponse> => {
  try {
    const response = await api.post('/signup/', {
       email: data.email,
       password: data.password,
       firstName: data.firstName,
       lastName: data.lastName,
       phoneNumber: data.phoneNumber,
    });
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 
                       error.response?.data?.JSON_MESSAGE || 
                       'Sign-up failed. Please try again.';
    throw new Error(errorMessage);
  }
};