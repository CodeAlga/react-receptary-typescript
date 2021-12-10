import React from "react";

import Recipe from "../Components/Generals/Recipe";

interface recipeAsProps {
  recipe: {
    name?: string;
  };
}

function Card(props: recipeAsProps) {
  const { recipe } = props;

  return (
    <div className="rounded-lg shadow-md flex items-center space-x-4 bg-cool-gray-700">
      <Recipe recipe={recipe} />
    </div>
  );
}

export default Card;
