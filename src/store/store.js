
import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "./reducers/BookingReducer";

// to create a store.

export const store = configureStore({
    reducer:{
        bookingReducer
    }
});