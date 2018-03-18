import {Action} from 'redux';
import {
  FIREBASE_SIGNIN_REQUEST,
  FIREBASE_SIGNIN_FAILED,
  FIREBASE_SIGNOUT_REQUEST,
  FIREBASE_SIGNIN_SUCCESS,
  FIREBASE_SIGNOUT_SUCCESS,
  FIREBASE_SIGNOUT_FAILED, FIREBASE_CONNECTED, FIREBASE_DISCONNECTED, FIREBASE_USER_UNAUTH, FIREBASE_USER_AUTH
} from './firebase-constants';
import {
  IFirebaseSignInRequestAction,
  IFirebaseSignInFailedction,
  IFirebaseSignInSuccessAction,
  IFirebaseSignOutFaildAction
} from './firebase-types';

/*
* CONNECTION
* */
export const firebaseConnected = (): Action => ({
  type: FIREBASE_CONNECTED
});

export const firebaseDisonnected = (): Action => ({
  type: FIREBASE_DISCONNECTED
});

/*
* SIGN IN
* */
export const firebaseSignIn = (email: string, password: string): IFirebaseSignInRequestAction => ({
  type: FIREBASE_SIGNIN_REQUEST,
  payload: {
    email,
    password
  }
});

export const firebaseSignInSuccess = (user: firebase.auth.UserMetadata): IFirebaseSignInSuccessAction => ({
  type: FIREBASE_SIGNIN_SUCCESS,
  payload: user
});

export const firebaseSignInFailed = (error: Object): IFirebaseSignInFailedction => ({
  type: FIREBASE_SIGNIN_FAILED,
  payload: error
});

/*
* SIGN OUT
* */
export const firebaseSignOut = (): Action => ({
  type: FIREBASE_SIGNOUT_REQUEST
});

export const firebaseSignOutSuccess = (): Action => ({
  type: FIREBASE_SIGNOUT_SUCCESS
});

export const firebaseSignOutFailed = (error: string): IFirebaseSignOutFaildAction => ({
  type: FIREBASE_SIGNOUT_FAILED,
  payload: error
});

/*
* AUTH
* */
export const firebaseUserAuth = (user: firebase.User): Action => ({
  type: FIREBASE_USER_AUTH
});

export const firebaseUserUnAuth = (): Action => ({
  type: FIREBASE_USER_UNAUTH
});
