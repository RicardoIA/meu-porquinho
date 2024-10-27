import axios from "axios";
import { useEffect, useState } from "react";
import { HttpMethod } from "../utils/enums";
import { Alert } from "react-native";

export const useFetch = (method: HttpMethod, url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const api = axios.create({
    //baseURL: process.env.EXPO_PUBLIC_API_URL
    baseURL: "https://viacep.com.br/ws",
  });
  const me = HttpMethod.DELETE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.request({
          url: url,
          method: HttpMethod[me],
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
