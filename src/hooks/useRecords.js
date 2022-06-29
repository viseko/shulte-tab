import { openDB } from "idb";
import { useState } from "react";

export default function useRecords(second) {
  let db = null;

  const [isLoading, setLoading] = useState(true);

  async function initDB() {
    db = await openDB("resultsDB", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("results")) {
          db.createObjectStore("results", {
            keyPath: "date"
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
    setLoading(true);

    const db = await initDB();
    const tx = db.transaction("results", "readonly");
    const store = tx.objectStore("results");

    const result = [];
    let cursor = await store.openCursor(null, "prev");
    while (cursor) {
      result.push(cursor.value);
      cursor = await cursor.continue();
    }
    
    setLoading(false);
    return result;
  };
 
  return {
    write,
    getRecords,
    isLoading
  }
}