"use client";

import { useState, useEffect } from "react";

export function useQuery<T>(url: string, init?: RequestInit, start: boolean = true) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(start);

  const doFetch = () => {
    if (loading) return;
    setLoading(true);
    fetch(url, init)
      .then((res) => res.json())
      .catch((error) => setError(error))
      .then((data) => setData(data as T))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (start) doFetch();
  }, [doFetch]);

  return { data, error, loading, doFetch, /* AbortController? */ };
}

export default useQuery;
