import * as React from 'react';
import {connect} from 'react-redux';
import {Indicator} from '../components/indicator';
import {LoginForm} from '../components/login-form';

class HomeContainer extends React.Component<{}> {
  private _style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  public render(): React.ReactElement<void> {
    return (
      <div style={this._style}>
        <h1>Home <Indicator/></h1>
        <LoginForm/>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export const Home = connect(mapStateToProps)(HomeContainer);