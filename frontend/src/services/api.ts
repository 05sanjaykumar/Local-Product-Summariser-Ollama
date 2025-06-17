// frontend/src/services/api.ts
import axios from 'axios';

const FlaskAPI = axios.create({
  baseURL: import.meta.env.VITE_AI_URL || 'http://localhost:5050',
  headers: { 'Content-Type': 'application/json' },
});

export const askAI = (query: string) =>
  FlaskAPI.post('/api/askAI', { query });
