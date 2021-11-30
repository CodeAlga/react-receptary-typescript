import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import RecipesSlice from "./Redux/Reducers/RecipiesSlice";

const RootReducer = combineReducers({
  Recipes: RecipesSlice,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
