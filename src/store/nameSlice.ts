import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    "name": "name",

    "initialState": {
        firstname: '',
        lastname: '',
        position: '',
    },

    "reducers": {

        set: (state, action) => {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.position = action.payload.position;
        },

    },

});

export  const {set} = slice.actions;
export default slice.reducer;
