// import { v4 as uuidv4 } from 'uuid';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import fileReducer from './fileReducer';

import fileReducer from './fileSlice';
import nameReducer from './nameSlice';

/*

name: "Screenshot 2022-04-21 at 13.21.57.png"
type: "image/png"
size: 1037914
lastModified: 1650536524000

*/

// const rootReducer = combineReducers({
//     file: fileReducer,
// });


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

