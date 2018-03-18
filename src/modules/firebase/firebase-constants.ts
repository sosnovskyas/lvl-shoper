const prefix = 'firebase/';

export const FIREBASE_CONNECTED = `${prefix}CONNECTED`;
export const FIREBASE_DISCONNECTED = `${prefix}DISCONNECTED`;

export const FIREBASE_SIGNIN_REQUEST = `${prefix}SIGNIN_REQUEST`;
export const FIREBASE_SIGNIN_SUCCESS = `${prefix}SIGNIN_SUCCESS`;
export const FIREBASE_SIGNIN_FAILED = `${prefix}SIGNIN_FAILED`;

export const FIREBASE_SIGNOUT_REQUEST = `${prefix}SIGNOUT_REQUEST`;
export const FIREBASE_SIGNOUT_SUCCESS = `${prefix}SIGNOUT_SUCCESS`;
export const FIREBASE_SIGNOUT_FAILED = `${prefix}SIGNOUT_FAILED`;

export const FIREBASE_USER_AUTH = `${prefix}USER_AUTH`;
export const FIREBASE_USER_UNAUTH: string = `${prefix}USER_UNAUTH`;