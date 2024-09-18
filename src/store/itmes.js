import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: 0,
};

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItemsLength(state, action) {
            state.items = action.payload
        },
        subtractItemsLength(state) {
            state.items--
        },

    },
});


export const itemActions = itemSlice.actions;

export default itemSlice.reducer;