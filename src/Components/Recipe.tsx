import React from "react";

interface recipeProps {
  recipe: {
    name?: string;
  };
}

function Recipe(props: recipeProps) {
  const { recipe } = props;

  return <div>{recipe.name}</div>;
}

export default Recipe;
