import axios from "axios";
import { updateRecipes } from "../Reducers/RecipiesSlice";
import store from "../../store";

interface Recipes {
  recipes: [
    recipe: {
      title: string;
      description: string;
      info: object;
      ingridients: Array<string>;
      steps: Array<object>;
    }
  ];
}

export default async function getRecipes() {
  return await axios
    .get<Recipes>("tmp/recipes.json")
    .then((response) => {
      store.dispatch(updateRecipes(response.data.recipes));
    })
    .catch((error) => console.log(error));
}
