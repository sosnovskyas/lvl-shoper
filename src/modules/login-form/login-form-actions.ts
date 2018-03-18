import {LOGIN_FORM_CHANGE} from './login-form-constants';
import {ILoginFormState} from './login-form-types';

export const loginFormChange = (payload: Partial<ILoginFormState>) => ({
  type: LOGIN_FORM_CHANGE,
  payload
});