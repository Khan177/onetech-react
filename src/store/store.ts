import { createStore } from "redux";
import reducer from "./reducers/ordersReducer";

const store = createStore(reducer);
export default store;
