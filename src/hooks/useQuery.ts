"use client";

import { useState, useEffect } from "react";

export function useQuery<T>(url: string, init?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) fetch(url, init)
    .then((res) => res.json())
    .catch((error) => setError(error))
    .then((data) => setData(data as T))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, [url, init, loading]);

  return { data, error, loading, setLoading };
}

export default useQuery;
