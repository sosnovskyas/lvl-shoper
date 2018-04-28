import * as React from "react";
import { Button, Modal, TextField, Select, MenuItem } from "material-ui";
import { connect, DispatchProp } from "react-redux";
import {
  goodsWindowCancel,
  goodsEditWindowSave,
  goodsWindowChange
} from "../modules/goods/goods-actions";
import { IApplicationState } from "../modules/store/store-types";

export interface IGoodsItemWindowProps extends DispatchProp<any> {
  isOpen: boolean;
  name: string;
  status: string;
  id: string;
}

const GoodsItemWindowComponent: React.SFC<IGoodsItemWindowProps> = (
  props: IGoodsItemWindowProps
): React.ReactElement<IGoodsItemWindowProps> => {
  const { dispatch, isOpen, name, status, id } = props;
  const statusList = [
    "Хотелки",
    "Заявка подана",
    "Одобрено",
    "Оплачена",
    "В обработке",
    "Ожидает доставки",
    "Доставлен",
    "Схичено"
  ];
  const modalStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  const modalWrappreStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
  };
  const onSaveClick = () => dispatch(goodsEditWindowSave({ name, status, id }));
  const onModalChange = (event: any) => {
    const { name, value } = event.target;

    dispatch(goodsWindowChange({ [name]: value }));
  };
  const onEscapeKeyDown = () => dispatch(goodsWindowCancel());

  return (
    <Modal
      open={isOpen}
      style={modalStyle}
      disableEscapeKeyDown={false}
      onEscapeKeyDown={onEscapeKeyDown}
    >
      <div style={modalWrappreStyle}>
        <TextField
          name="name"
          label="Name"
          value={name}
          multiline={true}
          onChange={onModalChange}
        />
        <Select
          name="status"
          placeholder="Status"
          value={status}
          onChange={onModalChange}
        >
          {statusList.map((value: string) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>

        <Button onClick={onSaveClick}>Save</Button>
      </div>
    </Modal>
  );
};
const mapStateToProps = (state: IApplicationState) => ({
  ...state.goods.modal
});

export const GoodsItemWindow = connect(mapStateToProps)(
  GoodsItemWindowComponent
);
