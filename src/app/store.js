import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../redux/counter/counterSlice"


// creat our redux store -> finds argument reducer or combine reducer
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

