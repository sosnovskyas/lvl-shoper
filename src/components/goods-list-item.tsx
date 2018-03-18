import * as React from 'react';
import {Paper, Table, TableHead, TableBody, TableRow, TableCell} from 'material-ui';

export interface IGoodsListItemProps {
  item: any;
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