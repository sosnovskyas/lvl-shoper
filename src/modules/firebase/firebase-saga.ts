import {Action} from 'redux';
import {call, cps, put, takeEvery} from 'redux-saga/effects';
import {GOODS_EDIT_WINDOW_SAVE} from '../goods/goods-constants';
import {
  firebaseSignInFailed,
  firebaseSignInSuccess,
  firebaseSignOutFailed,
  firebaseSignOutSuccess
} from './firebase-actions';
import {FIREBASE_SIGNIN_REQUEST, FIREBASE_SIGNOUT_REQUEST} from './firebase-constants';
import {firebaseApp} from './firebase-module'

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
    yield call([firebaseApp.auth(),firebaseApp.auth().signOut]);
    yield put(firebaseSignOutSuccess());
  } catch (error) {
    yield put(firebaseSignOutFailed(error));
    yield call(console.log, `firebaseSignOut:`, error);
  }
}

function* firebaseEditItem(action: Action) {
  try {
    yield call(console.log, action);
    // yield call([firebaseApp.auth(),firebaseApp.auth().signOut]);
    // yield put(firebaseSignOutSuccess());
  } catch (error) {
    // yield put(firebaseSignOutFailed(error));
    // yield call(console.log, `firebaseSignOut:`, error);
  }
}

export function* firebaseSaga(): any {
  yield takeEvery(FIREBASE_SIGNIN_REQUEST, firebaseSignIn);
  yield takeEvery(FIREBASE_SIGNOUT_REQUEST, firebaseSignOut);
  yield takeEvery(GOODS_EDIT_WINDOW_SAVE, firebaseEditItem);
}