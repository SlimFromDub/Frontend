import React from "react"
import { RecipeContext } from "./providers/recipeProviderContext";
import Container from "react-bootstrap/esm/Container.js";

function Search(){
 return(
<Container>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
        <Button variant="success" onClick={() => setShowRecipeForm({})}>
          <Icon path={mdiPlusBoxOutline} size={1} color={"white"} /> Nová
          událost
        </Button>
        <Button variant="success" disabled>
          <Icon path={mdiPlusBoxMultipleOutline} size={1} color={"white"} />{" "}
          Nové události
        </Button>
      </div>
      {!!showRecipeForm ? (
        <RecipeForm recipe={showRecipeForm} setShowRecipeForm={setShowRecipeForm} />
      ) : null}
      {filteredRecipeList.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            setShowRecipeForm={setShowRecipeForm}
          />
        );
      })}
    </Container>
 )
}

export default Search