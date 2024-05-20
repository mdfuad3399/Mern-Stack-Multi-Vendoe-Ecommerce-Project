import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./RootReducer.js";


export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck:false
        })
    },
    devTools:true
})