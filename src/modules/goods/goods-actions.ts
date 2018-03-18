import {Action} from 'redux';
import {GOODS_LIST_UPDATED} from './goods-constants';

export const goodsListUpdated = (list: Object): Action & { payload: Object } => ({
  type: GOODS_LIST_UPDATED,
  payload: list
});
