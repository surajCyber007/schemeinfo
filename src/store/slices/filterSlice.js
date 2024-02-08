import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterTerms: []
    },
    reducers: {
        changeFilterTerm(state, action){
            state.filterTerms.push(action.payload);
        },
        removeFilterTerm(state, action) {
            const ind = state.filterTerms.indexOf(action.payload);
            state.filterTerms.splice(ind, 1);
        }
    }
});

export const {changeFilterTerm, removeFilterTerm} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;