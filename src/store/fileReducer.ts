import { createAction, createReducer } from "@reduxjs/toolkit";

type CounterState  = {
    value: number;
}

const initialState: CounterState = {value: 0};

const increment = createAction('counter/increment');
const decrement = createAction('counter/decrement');
const incrementByAmount = createAction<number>('counter/incrementByAmount')

export default createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.value++
        })
        .addCase(decrement, (state, action) => {
            state.value--
        })
        .addCase(incrementByAmount, (state, action) => {
            state.value += action.payload
        })
    });
