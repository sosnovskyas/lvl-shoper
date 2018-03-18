import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Goods} from '../modules/firebase/firebase-module';
import {goodsListUpdated} from '../modules/goods/goods-actions';
import {IGoodsListItem} from '../modules/goods/goods-types';
import {store} from '../modules/store/store-module';
import {IApplicationState} from '../modules/store/store-types';
import {Divider, Paper, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress, Button} from 'material-ui';
import {CreateNewFolder} from 'material-ui-icons';
import {GoodsListItem} from './goods-list-item';

export interface IGoodsListProps extends Dispatch<any> {
  dispatch: Dispatch<any>;
  list: IGoodsListItem[];
  loading: boolean;
}

Goods.on('value', (snapshot: firebase.database.DataSnapshot) => {
  store.dispatch(goodsListUpdated(snapshot.val()));
});

const GoodsListComponent: React.SFC<IGoodsListProps> = (props: IGoodsListProps): React.ReactElement<IGoodsListProps> => {
  const {loading, list, dispatch} = props;
  const _onClickNew = () => {

  };

  if (loading) {
    return (<CircularProgress/>);
  } else {
    return (
      <React.Fragment>
        <Button onClick={_onClickNew} variant="fab" color="primary" aria-label="add">
          <CreateNewFolder/>
        </Button>
        <Paper>
          <Divider/>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item: IGoodsListItem, index: number) => <GoodsListItem key={index} item={item}/>)}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state: IApplicationState) => ({
  ...state.goods
});

export const GoodsList = connect(mapStateToProps)(GoodsListComponent);