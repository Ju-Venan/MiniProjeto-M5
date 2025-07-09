import axios from 'axios';

const API_BASE_URL = "https://miniprojeto-m4-y3en.onrender.com/";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Area {
  id: number;
  nome: string;
  continente: string;
  pais: string;
  tipo_ecossistema: string;
  problemas: string;
  nivel_risco: string;
}

export default api;