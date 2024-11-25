import { useEffect, useState } from "react";

export const useFetch = (
  func: Function = () => Promise.resolve(),
  data: any = null,
  autoFetch: boolean = false
) => {
  const [response, setResponse] = useState<any>(null);
  const [httpResponse, setHttpResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
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
