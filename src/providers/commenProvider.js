import { useEffect, useState } from "react";
import { commentProviderContext } from "./commentProviderContext.js";

function commentProvider({ children }) {
  const [commentLoadObject, setCommentLoadObject] = useState({
    state: "ready",
    error: null,
    data: null,
  });

  useEffect(() => {
    handleLoad();
  }, []);

  async function handleLoad() {
    setCommentLoadObject((current) => ({ ...current, state: "pending" }));
    const response = await fetch(`http://localhost:8000/comment/list`, {
      method: "GET",
    });
    const responseJson = await response.json();
    if (response.status < 400) {
      setCommentLoadObject({ state: "ready", data: responseJson });
      return responseJson;
    } else {
      setCommentLoadObject((current) => ({
        state: "error",
        data: current.data,
        error: responseJson.error,
      }));
      throw new Error(JSON.stringify(responseJson, null, 2));
    }
  }

  async function handleCreate(dtoIn) {
    setCpmmentLoadObject((current) => ({ ...current, state: "pending" }));
    const response = await fetch(`http://localhost:8000/comment/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dtoIn),
    });
    const responseJson = await response.json();

    if (response.status < 400) {
      setCommentLoadObject((current) => {
        current.data.push(responseJson);
        current.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        return { state: "ready", data: current.data };
      });
      return responseJson;
    } else {
      setCommentLoadObject((current) => {
        return { state: "error", data: current.data, error: responseJson };
      });
      throw new Error(JSON.stringify(responseJson, null, 2));
    }
  }


  const value = {
    state: commentLoadObject.state,
    commentList: commentLoadObject.data || [],
    handlerMap: { handleCreate},
  };

  return (
    <commentProviderContext.Provider value={value}>
      {children}
    </commentProviderContext.Provider>
  );
}

export default commentProvider;
