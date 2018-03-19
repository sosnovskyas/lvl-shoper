import * as React from 'react';
import {AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Button} from 'material-ui';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {firebaseSignOut} from '../modules/firebase/firebase-actions';
import {mainMenuClose, mainMenuToggle} from '../modules/main-menu/main-menu-actions';
import {IMainMenuProps} from '../modules/main-menu/main-menu-types';
import {Menu as MenuIcon} from 'material-ui-icons';
import {IApplicationState} from '../modules/store/store-types';
import {Indicator} from './indicator';

const MainMenuComponent: React.SFC<IMainMenuProps> = (props: IMainMenuProps): React.ReactElement<IMainMenuProps> => {
  let anchorEl: HTMLElement = null;
  const signOut = () => props.dispatch((firebaseSignOut()));
  const onClose = () => props.dispatch((mainMenuClose()));
  const onOpen = () => props.dispatch(mainMenuToggle());

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          id='menu'
          onClick={onOpen}
        >
          <MenuIcon/>
        </IconButton>
        <Menu
          open={props.isOpen}
          onClose={onClose}
        >
          <MenuItem onClick={console.log}>Profile</MenuItem>
          <MenuItem onClick={signOut}>SignOut</MenuItem>
        </Menu>
        <Typography variant="title" color="inherit">
          Title
        </Typography>
        <Indicator/>
      </Toolbar>

    </AppBar>);
};
const mapStateToProps = (state: IApplicationState) => ({
  ...state.mainMenu
});

export const MainMenu = connect(mapStateToProps)(MainMenuComponent);