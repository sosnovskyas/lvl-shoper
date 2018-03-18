import {Action} from 'redux';

export interface IFirebaseState {
  inProgress: boolean;
  connected: boolean;
  user: firebase.User;
}

export interface IFirebaseSignInRequestAction extends Action{
  payload: {
    email: string;
    password: string;
  };
}
export interface IFirebaseSignInSuccessAction extends Action {
  payload: firebase.auth.UserMetadata;
}
export interface IFirebaseSignInFailedction extends Action {
  payload: {};
}
export interface IFirebaseSignOutFaildAction extends Action {
  payload: string;
}

