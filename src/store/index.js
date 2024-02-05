import { configureStore } from "@reduxjs/toolkit";
import { schemeReducer, changeIsSaved } from "./slices/schemeSlice";
import { carouselReducer } from "./slices/carouselSlice";

const store = configureStore({
  reducer: {
    schemes: schemeReducer,
    carousel: carouselReducer
  },
});

export { store, changeIsSaved };
