import * as firebase from "firebase";
import * as React from "react";
import { connect, DispatchProp } from "react-redux";
import { Dispatch } from "redux";
import { Goods } from "../modules/firebase/firebase-module";
import {
  goodsEditWindowOpen,
  goodsEditWindowSave,
  goodsListUpdated,
  goodsNewWindowOpen,
  goodsWindowChange
} from "../modules/goods/goods-actions";
import { IGoodsListItem } from "../modules/goods/goods-types";
import { store } from "../modules/store/store-module";
import { IApplicationState } from "../modules/store/store-types";
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
} from "material-ui";
import { CreateNewFolder } from "material-ui-icons";
import { GoodsListItem } from "./goods-list-item";
import { GoodsItemWindow } from "./goods-list-item-window";

export interface IGoodsListProps extends DispatchProp<any> {
  dispatch: Dispatch<any>;
  list: IGoodsListItem[];
  loading: boolean;
  modal: {
    isOpen: boolean;
    name: string;
    status: string;
    id: string;
  };
}

Goods.on("value", (snapshot: firebase.database.DataSnapshot) => {
  store.dispatch(goodsListUpdated(snapshot.val()));
});

const GoodsListComponent: React.SFC<IGoodsListProps> = (
  props: IGoodsListProps
): React.ReactElement<IGoodsListProps> => {
  const { list, dispatch } = props;
  const _onEditClick = (item: IGoodsListItem) =>
    dispatch(goodsEditWindowOpen(item));
  const _onClickNew = () => dispatch(goodsNewWindowOpen());
  const addButtonStyle: React.CSSProperties = {
    marginTop: -56
  };

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell sortDirection={"asc"}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item: IGoodsListItem) => (
            <GoodsListItem key={item.id} item={item} onClick={_onEditClick} />
          ))}
        </TableBody>
      </Table>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        style={addButtonStyle}
        onClick={_onClickNew}
      >
        <CreateNewFolder />
      </Button>
      <GoodsItemWindow />
    </React.Fragment>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  ...state.goods
});

export const GoodsList = connect(mapStateToProps)(GoodsListComponent);
