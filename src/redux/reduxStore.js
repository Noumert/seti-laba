import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import commentsReducer from "./profileReducer.js";
import chatsReducer from "./chatsReducer.js";
import usersReducer from "./usersReducer.js";
import authReducer from "./authReducer.js";
import appReducer from "./appReducer.js";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profile: commentsReducer,
    chats: chatsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store