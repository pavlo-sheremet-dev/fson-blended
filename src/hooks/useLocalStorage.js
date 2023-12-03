import { useEffect, useState } from 'react';

export const useLocalStorage = (key = '', initialData = []) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialData
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
