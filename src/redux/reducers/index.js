import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";

const rootReducer = combineReducers({
changeCategoryReducer, // same changeCategoryReducer : changeCategoryReducer 
categoryListReducer
})

export default rootReducer;