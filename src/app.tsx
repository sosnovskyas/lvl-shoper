import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {MainMenu} from './components/main-menu';
import {Home} from './containers/home';
import {firebaseSignOut} from './modules/firebase/firebase-actions';
import {IApplicationState} from './modules/store/store-types';

export interface IAppContainerProps extends DispatchProp<any> {
  user: firebase.User;
  connected: boolean;
}

class AppContainer extends React.Component<IAppContainerProps> {
  public render() {
    return (
      <React.Fragment>
        <MainMenu />
        <Home/>
      </React.Fragment>

    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  user: state.firebase.user,
  connected: state.firebase.connected
});

export const App = connect(mapStateToProps)(AppContainer);