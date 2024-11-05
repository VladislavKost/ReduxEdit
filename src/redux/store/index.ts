import { legacy_createStore as createStore, combineReducers } from "redux";
import serviceListReducer from "../reducers/serviceList.ts";
import serviceAddReducer from "../reducers/serviceAdd.ts";

const rootReducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
