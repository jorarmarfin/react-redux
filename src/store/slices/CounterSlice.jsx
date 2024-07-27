import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        contador: 10
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.contador += 1;
        },
        decrement: (state, /* action */ ) => {
            state.contador -= 1;
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            state.contador += action.payload;
        }
    }
});


// eslint-disable-next-line react-refresh/only-export-components
export const {
    increment,
    decrement,
    incrementByAmount
} = CounterSlice.actions;
