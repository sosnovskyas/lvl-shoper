import {createStore, applyMiddleware, Reducer} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {combineReducers} from 'redux';
import {goods} from '../goods/goods-reducer';
import {loginForm} from '../login-form/login-form-reducer';
import {firebase} from '../firebase/firebase-reducer';
import {IApplicationState} from './store-types';

export const reducers: Reducer<IApplicationState> = combineReducers({
  firebase,
  loginForm,
  goods
});

export const sagaMiddleware = createSagaMiddleware();
const configureStore = () => createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

export const store = configureStore();
