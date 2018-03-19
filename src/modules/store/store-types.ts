import {IGoodsState} from '../goods/goods-types';
import {ILoginFormState} from '../login-form/login-form-types';
import {IFirebaseState} from '../firebase/firebase-types';
import {IMainMenuState} from '../main-menu/main-menu-types';

export interface IApplicationState {
  firebase: IFirebaseState;
  loginForm: ILoginFormState;
  goods: IGoodsState;
  mainMenu: IMainMenuState;
}