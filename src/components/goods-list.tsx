import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IApplicationState} from '../modules/store/store-types';
import {Paper, Table, TableHead, TableBody, TableRow, TableCell} from 'material-ui';
import {GoodsListItem} from './goods-list-item';

export interface IGoodsListProps extends Dispatch<any> {

}

const GoodsListComponent: React.SFC<IGoodsListProps> = (props: IGoodsListProps): React.ReactElement<IGoodsListProps> => {
  const data = [
    {name: 'хуйнюшка 1', status: 'ok'},
    {name: 'хуйнюшка 2', status: 'ok'},
    {name: 'хуйнюшка 3', status: 'ok'},
    {name: 'хуйнюшка 4', status: 'ok'},
    ];

  return (
    <Paper>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => <GoodsListItem key={index}  item={item}/>)}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = (state: IApplicationState) => ({});

export const GoodsList = connect(mapStateToProps)(GoodsListComponent);