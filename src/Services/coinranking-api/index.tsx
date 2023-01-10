import axios from "axios";

export const coinRankingApi = axios.create({
  baseURL: "https://api.coinranking.com/v2",
  timeout: 10000,
});
