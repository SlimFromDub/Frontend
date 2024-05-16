import { useEffect, useState } from "react";
import { RecipeProviderContext } from "./recipeProviderContext"

function RecipeProvider({ children }) {
  const [recipeLoadObject, setRecipeLoadObject] = useState({
    state: "ready",
    error: null,
    data: null,
  });

  useEffect(() => {
    handleLoad();
  }, []);

  async function handleLoad() {
    setRecipeLoadObject((current) => ({ ...current, state: "pending" }));
    const response = await fetch(`http://localhost:8000/recipe/list`, {
      method: "GET",
    });
    const responseJson = await response.json();
    if (response.status < 400) {
      setRecipeLoadObject({ state: "ready", data: responseJson });
      return responseJson;
    } else {
      setRecipeLoadObject((current) => ({
        state: "error",
        data: current.data,
        error: responseJson.error,
      }));
      throw new Error(JSON.stringify(responseJson, null, 2));
    }
  }

  
  const value = {
    recipe: recipeLoadObject.data,
  };

  return (
    <recipeProviderContext.Provider value={value}>
      {children}
    </recipeProviderContext.Provider>
  );
}

export default RecipeProvider;
