import {
  FIREBASE_CONNECTED,
  FIREBASE_DISCONNECTED,
  FIREBASE_SIGNIN_FAILED,
  FIREBASE_SIGNIN_SUCCESS, FIREBASE_SIGNOUT_SUCCESS
} from './firebase-constants';
import {IFirebaseSignInSuccessAction, IFirebaseState} from './firebase-types';

const firebaseInitialState: IFirebaseState = {
  inProgress: false,
  connected: false,
  user: undefined
};

export const firebase = (state: IFirebaseState = firebaseInitialState, action: IFirebaseSignInSuccessAction) => {
  switch (action.type) {
    case FIREBASE_CONNECTED: {
      return {
        ...state,
        connected: true
      }
    }

    case FIREBASE_DISCONNECTED: {
      return {
        ...state,
        connected: false
      }
    }

    case FIREBASE_SIGNIN_SUCCESS: {
      return {
        ...state,
        connected: true,
        user: action.payload
      }
    }

    case FIREBASE_SIGNIN_FAILED: {
      return {
        ...state,
        user: undefined
      }
    }

    case FIREBASE_SIGNOUT_SUCCESS: {
      return {
        ...state,
        user: undefined
      }
    }

    default:
      return state;
  }
};
