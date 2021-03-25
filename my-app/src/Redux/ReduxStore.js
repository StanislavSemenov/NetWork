import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer from "./UsersReducer";
import thunkMiddleware from "redux-thunk"
import AppReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    app: AppReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;