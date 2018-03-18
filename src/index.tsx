import * as React from 'react';
import {render} from 'react-dom';
import {Home} from './containers/home';
import {firebaseSaga} from './modules/firebase/firebase-saga';
import {sagaMiddleware, store} from './modules/store/store-module';
import {Provider} from 'react-redux';

export const root = document.querySelector('#lvl-shoper');


render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  root
);

sagaMiddleware.run(firebaseSaga);