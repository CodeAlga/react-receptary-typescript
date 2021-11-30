import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecipesState {
  recipes: Array<object>;
  loading: boolean;
}

const initialState = { recipes: [], loading: false } as RecipesState;

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    updateRecipes(state, action: PayloadAction<RecipesState["recipes"]>) {
      // console.log(action.payload);
      state.recipes = action.payload;
    },
  },
});

export const { updateRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
