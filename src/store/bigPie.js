import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./darkTheme";
import authReducer from "./auth";
import adminAuthReducer from "./adminAuth";

const store = configureStore({
    reducer: {
        darkThemeSlice: darkThemeReducer,
        authSlice: authReducer,
        adminAuthSlice: adminAuthReducer,
    }
});


export default store