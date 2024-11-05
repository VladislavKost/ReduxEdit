import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
import serviceListReducer from "../reducers/serviceList.ts";
import serviceAddReducer from "../reducers/serviceAdd.ts";
import serviceFilterReducer from "../reducers/serviceFilter.ts";

const rootReducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceFilter: serviceFilterReducer,
});
const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, compose(ReactReduxDevTools));

export default store;
