import * as React from "react";
import { render } from "react-dom";
import { App } from "./app";
import { firebaseSaga } from "./modules/firebase/firebase-saga";
import { goodsSaga } from "./modules/goods/goods-saga";
import { sagaMiddleware, store } from "./modules/store/store-module";
import { Provider } from "react-redux";

export const root = document.querySelector("#lvl-shoper");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

sagaMiddleware.run(firebaseSaga);
sagaMiddleware.run(goodsSaga);
