import { createStore, combineReducers } from 'redux';
import Reducers from './Reducers.js';
import { getStorage } from './storage.js';

const reducers = combineReducers({
    'App': Reducers
});
const initialState = {
    // 从缓存里面初始化列表
    'App': { 'counterList': getStorage() }
}
const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store