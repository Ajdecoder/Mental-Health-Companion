import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
    // withCredentials: true,
});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);