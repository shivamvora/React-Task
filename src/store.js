import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducers";

const store = createStore(rootReducer, composeWithDevTools());

