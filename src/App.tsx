import React, { useEffect } from "react";

import LatestsRecipes from "./Components/LatestsRecipies";
import getRecipes from "./Redux/Providers/RecipesProvider";

function App() {
  useEffect(() => {
    getRecipes();
  });
  return <LatestsRecipes />;
}

export default App;
