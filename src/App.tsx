import React, { useEffect } from "react";
import getRecipes from "./Redux/Providers/RecipesProvider";
import Landing from "./Views/Landing";

function App() {
  useEffect(() => {
    getRecipes();
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Landing />
    </div>
  );
}

export default App;
