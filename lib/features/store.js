import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"

// creat our redux store -> finds argument reducer or combine reducer
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})


// in nextjs rtk setup
export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
        }
    })
}
