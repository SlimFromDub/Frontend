import { useEffect, useState } from "react";
import { detailProviderContext } from "./detailProviderContext.js";

function detailProvider({ children }) {
  const [detailLoadObject, setDetailLoadObject] = useState({
    state: "ready",
    error: null,
    data: null,
  });

  useEffect(() => {
    handleLoad();
  }, []);

  async function handleLoad() {
    setDetailLoadObject((current) => ({ ...current, state: "pending" }));
    const response = await fetch(`http://localhost:8000/detail/list`, {
      method: "GET",
    });
    const responseJson = await response.json();
    if (response.status < 400) {
      setDetailLoadObject({ state: "ready", data: responseJson });
      return responseJson;
    } else {
      setDetailLoadObject((current) => ({
        state: "error",
        data: current.data,
        error: responseJson.error,
      }));
      throw new Error(JSON.stringify(responseJson, null, 2));
    }
  }



  const value = {
    state: detailLoadObject.state,
    detailList: detailLoadObject.data || [],
  };

  return (
    <detailProviderContext.Provider value={value}>
      {children}
    </detailProviderContext.Provider>
  );
}

export default detailProvider;
