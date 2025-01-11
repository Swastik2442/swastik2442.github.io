"use client";

import { useState, useEffect } from "react";

export function useQuery<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .catch((error) => setError(error))
    .then((data) => setData(data as T))
    .catch((error) => setError(error))
    .finally(() => setisLoading(false));
  }, [url]);

  return { data, error, isLoading };
}

export default useQuery;
