import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    const storedThemeValue = localStorage.getItem(key) || null;
    return storedThemeValue ? JSON.parse(storedThemeValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
