import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Loginreducer } from "../features/login/reducer";
import { registerReducer } from "../features/Register/reducer";
import { gitReducer } from "../features/GithubUser/reducer";

const rootReducer= combineReducers({
    loginState:Loginreducer,
    registerState:registerReducer,
    gitState:gitReducer,
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;