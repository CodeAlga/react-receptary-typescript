import React from "react";
import { useAppSelector } from "../hooks";

import Recipe from "./Recipe";

function LatestsRecipes() {
  // const recipes = [
  //   {
  //     title: "string",
  //     description: "string",
  //     info: { object: "" },
  //     ingridients: ["Array<string>"],
  //     steps: [{ "Array<object>": "" }],
  //   },
  //   {
  //     title: "string",
  //     description: "string",
  //     info: { object: "" },
  //     ingridients: ["Array<string>"],
  //     steps: [{ "Array<object>": "" }],
  //   },
  // ];

  const { recipes } = useAppSelector((state) => state.Recipes);
  console.log(recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </div>
  );
}

export default LatestsRecipes;
