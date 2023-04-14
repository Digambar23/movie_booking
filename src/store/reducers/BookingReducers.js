// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

// Handle actions related to bookings

const initialState = {
    selectedSeats:[],
    seatPrice:150
}

// Creates reducers/actions
const bookingSlice = createSlice({
    name:'bookingReducer',
    initialState,
    reducers:{
        // here we define multiple actions 
        // which reducer will be handling.
        // key will be action name
        // value will be a function to perform the action.
        // reducer function takes 2 parameters
        select:(state, action)=>{
            console.log("Select Action received");
            console.log(action.type);
            state.selectedSeats.push(action.payload)
            console.log(state.selectedSeats);
        },
        remove:(state, action)=>{
            const index = state.selectedSeats.indexOf(action.payload);
            state.selectedSeats.splice(index, 1);
        }
    }

});

// exporting reducer
export const bookingReducer = bookingSlice.reducer;

// exporting actions.
export const {select, remove} = bookingSlice.actions;

// exporting Selector
export const bookingSelector = (state)=>state.bookingReducer.selectedSeats
export const priceSelector = (state)=> state.bookingReducer.seatPrice;

// const data = (state,action)=>{

// }

// const add = (num1, num2)=>{

// }