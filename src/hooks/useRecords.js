import { openDB } from "idb";
import { useState } from "react";

export default function useRecords(second) {
  let db = null;

  const [isLoading, setLoading] = useState(true);

  async function initDB() {
    db = await openDB("resultsDB", 3, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("results")) {
          db.createObjectStore("results", {
            keyPath: "id",
            autoIncrement: true
          })
        }
      }
    });

    return db;
  }

  const write = async (data) => {
    const db = await initDB();
    const tx = db.transaction("results", "readwrite");
    const store = tx.objectStore("results");

    await store.put(data);
    await tx.done;
  };

  const getRecords = async (options = null) => {
    // Получаем параметры запроса
    const {pageSize, currentPage} = options;

    setLoading(true);
    // Открытие хранилища
    const db = await initDB();
    const tx = db.transaction("results", "readonly");
    const store = tx.objectStore("results");
    // Формирование запроса
    const count = await store.count();
    const pages = Math.ceil(count / pageSize);
    const upper = count - currentPage * pageSize;
    const lower = upper - pageSize + 1;
    const request = IDBKeyRange.bound(lower, upper);
    // Поиск по запросу
    const result = [];
    let cursor = await store.openCursor(request, "prev");
    while (cursor) {
      result.push(cursor.value);
      cursor = await cursor.continue();
    }
    
    setLoading(false);
    return {result, pages};
  };
 
  return {
    write,
    getRecords,
    isLoading
  }
}