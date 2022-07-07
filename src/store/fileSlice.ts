import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'
import { act } from "react-dom/test-utils";


export type FileInfo = {
    id: string;
    filename: string;
    filetype: string;
    size: number;
    lastModified: number;
}

const initialState: FileInfo[] = [];

const slice = createSlice({
    name: "file",

    initialState,

    reducers: {

        add: (state, action) => {
            console.log(current(state));
            state.push(action.payload);
        },

        remove: (state, action) => {
            const id = action.payload.id;
            return state.filter(item => item.id != id);
        }

    },

});

export  const {add, remove} = slice.actions;
export default slice.reducer;

