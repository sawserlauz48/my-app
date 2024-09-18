import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./darkTheme";
import authReducer from "./auth";
import adminAuthReducer from "./adminAuth";
import itemReducer from "./itmes"

const store = configureStore({
    reducer: {
        darkThemeSlice: darkThemeReducer,
        authSlice: authReducer,
        adminAuthSlice: adminAuthReducer,
        itemSlice: itemReducer,
    }
});


export default store