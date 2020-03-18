import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import titleModel from './titleModel.js';

// 合并reducer
const reducers = combineReducers({
  titleModel
})

// 生成store
let store = createStore(
    reducers,
    applyMiddleware(thunk)
)
export default store;
