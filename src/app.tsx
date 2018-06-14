import * as firebase from "firebase";
import CircularProgress from "material-ui/es/Progress/CircularProgress";
import * as React from "react";
import { connect, DispatchProp } from "react-redux";
import { LoginForm } from "./components/login-form";
import { MainMenu } from "./components/main-menu";
import { Goods } from "./containers/goods";
import { IApplicationState } from "./modules/store/store-types";

export interface IAppContainerProps extends DispatchProp<any> {
  user: firebase.User;
  connected: boolean;
}

class AppContainer extends React.Component<IAppContainerProps> {
  public render() {
    if (!this.props.connected) {
      return <CircularProgress />;
    } else if (this.props.user) {
      return (
        <React.Fragment>
          <MainMenu />
          <Goods />
        </React.Fragment>
      );
    } else {
      return <LoginForm />;
    }
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  user: state.firebase.user,
  connected: state.firebase.connected
});

export const App = connect(mapStateToProps)(AppContainer);
