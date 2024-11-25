import axios from "axios";
import { useEffect, useState } from "react";
import { HttpMethod } from "../utils/enums";
import { Alert } from "react-native";
import { log } from "../utils/log";

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

export const useFetch = (
  func: Function = () => Promise.resolve(),
  data: any = null,
  autoFetch: boolean = false
) => {
  const [response, setResponse] = useState<any>(null);
  const [httpResponse, setHttpResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const request = async (requestFunc: Function, body: any = null) => {
    setLoading(true);
    try {
      setHttpResponse(null);
      setResponse(null);
      setSuccess(false);
      setError(null);

      var result = body ? await requestFunc(body) : await requestFunc();

      setHttpResponse(result);
      setResponse(result?.data);

      const isSuccess = result.status >= 200 && result.status <= 299;
      setSuccess(isSuccess);

      if (!isSuccess) {
        throw new Error("Failed Request 1");
      }
    } catch (err) {
      setError(response.error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const run = async (func: Function, data: any) => {
    await request(func, data);
  };

  useEffect(() => {
    if (autoFetch && func) {
      run(func, data);
    }
  }, [func, data, autoFetch]);

  return { response, success, httpResponse, loading, error, run };
};
