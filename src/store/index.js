import { configureStore } from "@reduxjs/toolkit";
import { schemeReducer, changeIsSaved } from "./slices/schemeSlice";
import { carouselReducer } from "./slices/carouselSlice";
import { searchReducer, changeSearchTerm } from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    schemes: schemeReducer,
    carousel: carouselReducer,
    searchVal: searchReducer,
  },
});

export { store, changeIsSaved, changeSearchTerm };
