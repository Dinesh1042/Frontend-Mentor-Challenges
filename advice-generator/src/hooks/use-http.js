import { useCallback, useState } from 'react';

function useHttp() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const get = useCallback(async (url, setData) => {
    setLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await response.json();

      setData(data);
      setError(null);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }, []);

  return { error, loading, get };
}

export default useHttp;
