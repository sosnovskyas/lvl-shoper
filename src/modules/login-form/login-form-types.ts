import {DispatchProp} from 'react-redux';
import {Action} from 'redux';

export interface ILoginFormState {
  email: string;
  password: string;
}

export interface ILoginFormChangeAction extends Action{
  payload: Partial<ILoginFormState>
}

export interface ILoginFormProps extends DispatchProp<any> {
  email: string;
  password: string;
  inProgress: boolean;
  connected: boolean;
  user: firebase.User
}
