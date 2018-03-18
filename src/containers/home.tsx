import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {GoodsList} from '../components/goods-list';
import {Indicator} from '../components/indicator';
import {LoginForm} from '../components/login-form';
import {IApplicationState} from '../modules/store/store-types';

export interface IHomeContainerProps extends Dispatch<any> {
  user: firebase.User;
}

class HomeContainer extends React.Component<IHomeContainerProps> {
  private _style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  public render(): React.ReactElement<void> {
    const {user} = this.props;

    return (
      <div style={this._style}>
        <h1>Home <Indicator/></h1>
        <LoginForm/>
        {user ? <GoodsList/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  user: state.firebase.user
});

export const Home = connect(mapStateToProps)(HomeContainer);