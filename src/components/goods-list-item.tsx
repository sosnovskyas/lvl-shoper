import * as React from 'react';
import {Paper, Table, TableHead, TableBody, TableRow, TableCell} from 'material-ui';
import {IGoodsListItem} from '../modules/goods/goods-types';

export interface IGoodsListItemProps {
  item: IGoodsListItem;
}

export const GoodsListItem: React.SFC<IGoodsListItemProps> = (props: IGoodsListItemProps): React.ReactElement<IGoodsListItemProps> => {
  const {item} = props;
  const _onClick = () => {
    console.log(item);
  };

  return (
    <TableRow onClick={_onClick}>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.status}</TableCell>
    </TableRow>
  );
};