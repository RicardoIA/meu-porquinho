import axios from "axios";
import { useEffect, useState } from "react";
import { HttpMethod } from "../utils/enums";
import { Alert } from "react-native";

type AsyncFunction = (data?: any) => Promise<void>;

export const useFetch2 = (
  method: HttpMethod,
  url: string,
  func: AsyncFunction
) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const api = axios.create({
    //baseURL: process.env.EXPO_PUBLIC_API_URL
    baseURL: "https://viacep.com.br/ws",
  });
  const me = HttpMethod.DELETE;
  func();

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

  async function call<T>(func: AsyncFunction): Promise<T | null> {
    await func();

    return null;
  }

  return { data, loading, error };
};

export const useFetch = (func: Function, data: any = null) => {
  const [response, setResponse] = useState<any>(null);
  const [httpResponse, setHttpResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        var result: any = {};
        if (data) {
          result = await func(data);
        } else {
          result = await func();
        }

        setHttpResponse(result);

        const isSuccess = result.status === 200;
        setSuccess(isSuccess);
        setResponse(result?.data);
      } catch (err) {
        setError(err);
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [func]);

  return { response, success, httpResponse, loading, error };
};
