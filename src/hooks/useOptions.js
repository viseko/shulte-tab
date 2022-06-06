import { useEffect, useState } from "react";
import optionsDefault from '../config/options';

export default function useOptions() {
  let currentOptions = {...optionsDefault};
  const storageOptions = localStorage.getItem("options");

  if (storageOptions) {
    try {
      const parsedStorageOptions = JSON.parse(storageOptions);
      currentOptions = {...currentOptions, ...parsedStorageOptions};
    } catch {
      console.error("Некорректный формат записи опций в Local Storage. Пожалуйста, очистите хранилище для корректной работы приложения.")
    }
  }

  const [options, setOptions] = useState({...currentOptions});

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options))
  }, [options])

  return [options, setOptions];
}