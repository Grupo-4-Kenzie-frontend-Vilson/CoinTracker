import axios from "axios";

export const awesomeApi = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/last/USD-BRL",
  timeout: 10000,
});
