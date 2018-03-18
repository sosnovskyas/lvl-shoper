import {LOGIN_FORM_CHANGE} from './login-form-constants';
import {ILoginFormChangeAction, ILoginFormState} from './login-form-types';

const loginFormInitialState: ILoginFormState = {
  email: 'lvlonstradamus@gmail.com',
  password: '15091984'
};

export const loginForm = (state: ILoginFormState = loginFormInitialState, action: ILoginFormChangeAction) => {
  switch (action.type) {

    case LOGIN_FORM_CHANGE: {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state;
  }
};
