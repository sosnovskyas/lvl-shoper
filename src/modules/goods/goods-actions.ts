import {Action} from 'redux';
import {
  GOODS_EDIT_WINDOW_OPEN,
  GOODS_LIST_UPDATED,
  GOODS_NEW_WINDOW_OPEN,
  GOODS_WINDOW_CHANGE,
  GOODS_WINDOW_SAVE
} from './goods-constants';
import {IGoodsListItem} from './goods-types';

export const goodsListUpdated = (list: Object): Action & { payload: Object } => ({
  type: GOODS_LIST_UPDATED,
  payload: list
});

export const goodsNewWindowOpen = (): Action => ({
  type: GOODS_NEW_WINDOW_OPEN
});

export const goodsEditWindowOpen = (payload: IGoodsListItem): Action & { payload: IGoodsListItem } => ({
    type: GOODS_EDIT_WINDOW_OPEN,
    payload
  })
;

export const goodsEditWindowSave = (payload: IGoodsListItem): Action & { payload: IGoodsListItem } => ({
  type: GOODS_WINDOW_SAVE,
  payload
});
export const goodsWindowChange =
  (payload: { [key: string]: string }): Action & { payload: { [key: string]: string } } => ({
    type: GOODS_WINDOW_CHANGE,
    payload
  });
