import {Action} from 'redux';
import {GOODS_EDIT_WINDOW_OPEN, GOODS_LIST_UPDATED, GOODS_NEW_WINDOW_OPEN} from './goods-constants';
import {IGoodsListItem} from './goods-types';

export const goodsListUpdated = (list: Object): Action & { payload: Object } => ({
  type: GOODS_LIST_UPDATED,
  payload: list
});

export const goodsNewWindowOpen = (): Action => ({
  type: GOODS_NEW_WINDOW_OPEN
});

export const goodsEditWindowOpen = (payload: IGoodsListItem): Action & {payload: IGoodsListItem}  => ({
  type: GOODS_EDIT_WINDOW_OPEN,
  payload
});

export const goodsEditWindowSave = (): Action => ({
  type: GOODS_EDIT_WINDOW_OPEN,
});
