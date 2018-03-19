import {Action} from 'redux';
import {MAIN_MENU_CLOSE, MAIN_MENU_OPEN, MAIN_MENU_TOGGLE} from './main-menu-constants';
import {IMainMenuState} from './main-menu-types';

const mainMenuInitialState: IMainMenuState = {
  isOpen: false
};

export const mainMenu = (state: IMainMenuState = mainMenuInitialState, action: Action) => {
  switch (action.type) {
    case MAIN_MENU_OPEN: {
      return {
        isOpen: true
      }
    }

    case MAIN_MENU_CLOSE: {
      return {
        isOpen: false
      }
    }

    case MAIN_MENU_TOGGLE: {
      return {
        isOpen: !state.isOpen
      }
    }

    default:
      return state;
  }
};
