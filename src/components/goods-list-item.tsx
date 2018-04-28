import * as React from "react";
import {
  TableRow,
  TableCell
} from "material-ui";
import { IGoodsListItem } from "../modules/goods/goods-types";

export interface IGoodsListItemProps {
  item: IGoodsListItem;
  onClick: Function;
}

export const GoodsListItem: React.SFC<IGoodsListItemProps> = (
  props: IGoodsListItemProps
): React.ReactElement<IGoodsListItemProps> => {
  const { item } = props;
  const _onClick = () => props.onClick(item);

  return (
    <TableRow hover={true} onClick={_onClick}>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.status}</TableCell>
    </TableRow>
  );
};
