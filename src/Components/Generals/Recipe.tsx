import React from "react";

interface recipeProps {
  recipe: {
    name?: string | undefined;
  };
}

function Recipe(props: recipeProps) {
  const { recipe } = props;

  return (
    <>
      <div>{recipe.name}</div>;<div>{recipe.name}</div>;<div>{recipe.name}</div>
      ;<div>{recipe.name}</div>;<div>{recipe.name}</div>;
      <div>{recipe.name}</div>;<div>{recipe.name}</div>;<div>{recipe.name}</div>
      ;<div>{recipe.name}</div>;<div>{recipe.name}</div>;
      <div>{recipe.name}</div>;<div>{recipe.name}</div>;<div>{recipe.name}</div>
      ;<div>{recipe.name}</div>;<div>{recipe.name}</div>;
      <div>{recipe.name}</div>;<div>{recipe.name}</div>;<div>{recipe.name}</div>
      ;
    </>
  );
}

export default Recipe;
