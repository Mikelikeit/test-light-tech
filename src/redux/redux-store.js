import {combineReducers, createStore} from "redux";
import giraffesReducer from "./giraffesReducer";
import navbarReducer1 from "./navbarReducer1";
import {reducer as formReducer} from "redux-form";


const reducers = combineReducers({
    giraffes: giraffesReducer,
    navbar: navbarReducer1,
    form: formReducer
})



const store = createStore(reducers);


export  default  store