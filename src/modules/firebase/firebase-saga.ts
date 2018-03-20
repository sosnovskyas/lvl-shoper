import {Action} from 'redux';
import {call, cps, put, takeEvery} from 'redux-saga/effects';
import {GOODS_WINDOW_SAVE} from '../goods/goods-constants';
import {IGoodsListItem} from '../goods/goods-types';
import {
  firebaseSignInFailed,
  firebaseSignInSuccess,
  firebaseSignOutFailed,
  firebaseSignOutSuccess
} from './firebase-actions';
import {FIREBASE_SIGNIN_REQUEST, FIREBASE_SIGNOUT_REQUEST} from './firebase-constants';
import {firebaseApp, firebaseDb, Goods} from './firebase-module'

function* firebaseSignIn(action: Action & { payload: any }) {
  try {
    const {email, password} = action.payload;
    const user = yield call([firebaseApp.auth(), firebaseApp.auth().signInWithEmailAndPassword], email, password);

    yield put(firebaseSignInSuccess(user));
  } catch (error) {
    yield put(firebaseSignInFailed(error));
    yield call(console.log, error);
  }
}

function* firebaseSignOut(action: Action) {
  try {
    yield call([firebaseApp.auth(), firebaseApp.auth().signOut]);
    yield put(firebaseSignOutSuccess());
  } catch (error) {
    yield put(firebaseSignOutFailed(error));
    yield call(console.log, `firebaseSignOut:`, error);
  }
}

function* firebaseEditItem(action: Action & { payload: IGoodsListItem }) {
  try {
    const {id, status, name} = action.payload;

    if (id) {
      yield call([Goods.child(id), Goods.child(id).set], {status, name});
    } else {
      yield call([Goods, Goods.push], {status, name});
    }
  } catch (error) {
    yield call(console.log, `firebaseEditItem: error -`, error);

  }
}

export function* firebaseSaga(): any {
  yield takeEvery(FIREBASE_SIGNIN_REQUEST, firebaseSignIn);
  yield takeEvery(FIREBASE_SIGNOUT_REQUEST, firebaseSignOut);
  yield takeEvery(GOODS_WINDOW_SAVE, firebaseEditItem);
}