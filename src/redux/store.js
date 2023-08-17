import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import locationSlice from "./locationSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    locations: locationSlice,
  },
});
