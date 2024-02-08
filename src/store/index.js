import { configureStore } from "@reduxjs/toolkit";
import { schemeReducer, changeIsSaved } from "./slices/schemeSlice";
import { carouselReducer } from "./slices/carouselSlice";
import { searchReducer, changeSearchTerm } from "./slices/searchSlice";
import { filterReducer, changeFilterTerm, removeFilterTerm } from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    schemes: schemeReducer,
    carousel: carouselReducer,
    searchVal: searchReducer,
    filterVal: filterReducer,
  },
});

export { store, changeIsSaved, changeSearchTerm, changeFilterTerm, removeFilterTerm };
