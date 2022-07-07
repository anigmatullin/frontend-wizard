import { v4 as uuidv4 } from 'uuid';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

const NAME = "name";

const StorageKey = 'wizard';

function actionName(values)
{
    return {
        type: NAME,
        payload: {
            ...values
        }
    }
}



function initialState()
{
    const data = localStorage.getItem(StorageKey);

    if (data) {
        return JSON.parse(data);
    }
    else {
        return {
            firstname: '',
            lastname: '',
            position: '',
        };
    }

}


function reducer(state, action)
{
    if (state === undefined) {
        return initialState();
    }

    if (!action) {
        return state;
    }

    if (!action.type) {
        return state;
    }

    let newState = {...state};

    if (action.type === NAME) {
        newState.firstname = action.payload.firstname;
        newState.lastname = action.payload.lastname;
        newState.position = action.payload.position;
    }


    const serialized = JSON.stringify(newState);
    window.localStorage.setItem(StorageKey, serialized);

    return newState;
}



const store = createStore(
    reducer,
    devToolsEnhancer({trace: true})
    );


export function setName(values)
{
    const payload = actionName(values);
    store.dispatch(payload);
}


export function getData()
{
    return store.getState();
}

export function getNameInfo()
{
    const state = store.getState();

    return {
        firstname: state.firstname,
        lastname: state.lastname,
        position: state.position,
    }
}

export function subscribe(fn)
{
    store.subscribe(fn);
}

export {reducer};
export {store};
