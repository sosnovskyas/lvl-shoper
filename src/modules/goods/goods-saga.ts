import { Action } from "redux";
import { call, takeEvery } from "redux-saga/effects";
import { Goods } from "../firebase/firebase-module";
import { GOODS_WINDOW_SAVE } from "./goods-constants";
import { IGoodsListItem } from "./goods-types";

export function* goodsSaga(): any {
  yield takeEvery(GOODS_WINDOW_SAVE, editItem);
}

function* editItem(action: Action & { payload: IGoodsListItem }) {
  try {
    const { id, status, name } = action.payload;

    if (id) {
      yield call([Goods.child(id), Goods.child(id).set], { status, name });
    } else {
      yield call([Goods, Goods.push], { status, name });
    }
  } catch (error) {
    yield call(console.log, `firebaseEditItem: error -`, error);
  }
}
