import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isDarkTheme: "light",
};

const darkThemeSlice = createSlice({
    name: "darkTheme",
    initialState,
    reducers: {
        changeTheme(state) {
            state.isDarkTheme = !state.isDarkTheme;
        },
        setToDarkTheme(state) {
            state.isDarkTheme = "dark";
        },
        setToLightTheme(state) {
            state.isDarkTheme = "light";
        },
    },
});


export const darkThemeActions = darkThemeSlice.actions;

export default darkThemeSlice.reducer;