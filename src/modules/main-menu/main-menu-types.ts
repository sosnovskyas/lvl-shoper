import {DispatchProp} from 'react-redux';

export interface IMainMenuState {
  isOpen : boolean;
}

export interface IMainMenuProps extends DispatchProp<any> {
  isOpen: boolean;
}