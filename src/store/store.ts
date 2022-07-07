
import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './fileSlice';
import nameReducer from './nameSlice';

export interface IRootState {
    file: {
        id: string;
        filename: string;
        filetype: string;
        size: number;
        lastModified: number;
    },
  
    name: {
        firstname: string;
        lastname: string;
        position: string;
    }
}

const store = configureStore({

    reducer: {
        file: fileReducer,
        name: nameReducer,
    },
    devTools: true,

});


export default store;

