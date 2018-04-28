import * as firebase from "firebase";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { GoodsList } from "../components/goods-list";
import { Indicator } from "../components/indicator";
import { LoginForm } from "../components/login-form";
import { IApplicationState } from "../modules/store/store-types";

export interface IHomeContainerProps extends Dispatch<any> {
  user: firebase.User;
  connected: boolean;
}

class HomeContainer extends React.Component<IHomeContainerProps> {
  private _style: React.CSSProperties = {
    marginTop: 50,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };

  public render(): React.ReactElement<void> {
    const { user, connected } = this.props;

    return (
      <div style={this._style}>{user ? <GoodsList /> : <LoginForm />}</div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  user: state.firebase.user,
  connected: state.firebase.connected
});

export const Home = connect(mapStateToProps)(HomeContainer);
