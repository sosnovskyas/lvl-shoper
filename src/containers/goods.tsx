import * as firebase from "firebase";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { GoodsList } from "../components/goods-list";
import { IApplicationState } from "../modules/store/store-types";

export interface IHomeContainerProps extends Dispatch<any> {
  user: firebase.User;
  connected: boolean;
}

class GoodsContainer extends React.Component<IHomeContainerProps> {
  private _style: React.CSSProperties = {
    marginTop: 50,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };

  public render(): React.ReactElement<void> {
    return <GoodsList />;
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  user: state.firebase.user,
  connected: state.firebase.connected
});

export const Goods = connect(mapStateToProps)(GoodsContainer);
