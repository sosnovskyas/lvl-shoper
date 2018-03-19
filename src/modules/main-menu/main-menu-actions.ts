import {Action} from 'redux';
import {MAIN_MENU_CLOSE, MAIN_MENU_OPEN, MAIN_MENU_TOGGLE} from './main-menu-constants';

export const mainMenuOpen = (): Action => ({
  type: MAIN_MENU_OPEN
});

export const mainMenuClose = (): Action => ({
  type: MAIN_MENU_CLOSE
});

export const mainMenuToggle = (): Action => ({
  type: MAIN_MENU_TOGGLE
});
