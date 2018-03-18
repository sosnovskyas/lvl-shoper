import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IApplicationState} from '../modules/store/store-types';
import {SwapVerticalCircle} from 'material-ui-icons'

interface IndicatorProps extends Dispatch<any> {
  connected: boolean;
}

const IndicatorComponent: React.SFC<IndicatorProps> = (props: IndicatorProps): React.ReactElement<IndicatorProps> => {
  const {connected} = props;
  const style: React.CSSProperties = {
    color: connected ? 'green': 'red'
  };

  return (<SwapVerticalCircle style={style}/>) ;
};

const mapStateToProps = (state: IApplicationState) => ({
  connected: state.firebase.connected
});

export const Indicator = connect(mapStateToProps)(IndicatorComponent);