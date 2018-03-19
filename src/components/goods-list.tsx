import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {Dispatch} from 'redux';
import {Goods} from '../modules/firebase/firebase-module';
import {
  goodsEditWindowOpen,
  goodsEditWindowSave,
  goodsListUpdated,
  goodsNewWindowOpen
} from '../modules/goods/goods-actions';
import {IGoodsListItem} from '../modules/goods/goods-types';
import {store} from '../modules/store/store-module';
import {IApplicationState} from '../modules/store/store-types';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Button,
  Modal,
  TextField,
  Select,
  InputLabel,
  MenuItem
} from 'material-ui';
import {CreateNewFolder} from 'material-ui-icons';
import {GoodsListItem} from './goods-list-item';

export interface IGoodsListProps extends DispatchProp<any> {
  dispatch: Dispatch<any>;
  list: IGoodsListItem[];
  loading: boolean;
  modal: {
    isOpen: boolean;
    name: string;
    status: string;
    key: string;
  };
}

Goods.on('value', (snapshot: firebase.database.DataSnapshot) => {
  store.dispatch(goodsListUpdated(snapshot.val()));
});

const GoodsListComponent: React.SFC<IGoodsListProps> = (props: IGoodsListProps): React.ReactElement<IGoodsListProps> => {
  const {loading, list, modal, dispatch} = props;
  const onSaveClick = () =>     dispatch(goodsEditWindowSave());
  // Goods.push({name: String(Math.random()), status: 'ok'})
  //
  // };
  const onEditClick = (item: IGoodsListItem) => {
    dispatch(goodsEditWindowOpen(item));
  };
  const onModalChange = (event: any) => {
    console.log('change', event, event.target.id, event.target.value);
  };
  const modalStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const modalWrappreStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid gray',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
  };
  const _onClickNew = () => {
    dispatch(goodsNewWindowOpen())
  };

  if (loading) {
    return (<CircularProgress/>);
  } else {
    return (
      <React.Fragment>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          onClick={_onClickNew}
        >
          <CreateNewFolder/>
        </Button>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item: IGoodsListItem) => <GoodsListItem key={item.key} item={item} onClick={onEditClick}/>)}
            </TableBody>
          </Table>
        </Paper>
        <Modal open={modal.isOpen} style={modalStyle}>
          <div style={modalWrappreStyle}>
            <TextField
              id={'name'}
              label={'Name'}
              value={modal.name}
              onChange={onModalChange}
            />
            <Select
              id={'status'}
              placeholder={'Status'}
              value={modal.status}
              onChange={onModalChange}
            >
              <MenuItem selected={true}>ok</MenuItem>
              <MenuItem>bad</MenuItem>
              <MenuItem>good</MenuItem>
            </Select>
            <Button onClick={onSaveClick}>Save</Button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state: IApplicationState) => ({
  ...state.goods
});

export const GoodsList = connect(mapStateToProps)(GoodsListComponent);