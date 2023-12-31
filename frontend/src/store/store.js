import authUserReducer from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        user: authUserReducer
    }
});
