import { createSlice, nanoid } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
    name: 'carousel',
    initialState: [
        {
            id: nanoid(),
            url: '../../assets/images/car-2.jpg'
        },
        {
            id: nanoid(),
            url: '../../assets/images/car-3.jpg'
        },
        {
            id: nanoid(),
            url: '../../assets/images/car-4.jpg'
        },
        {
            id: nanoid(),
            url: '../../../assets/images/car-5.jpg'
        },
    ],
    reducers: {

    }
});

export const carouselReducer = carouselSlice.reducer;