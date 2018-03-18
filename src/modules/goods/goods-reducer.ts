import {forIn} from 'lodash';
import {GOODS_LIST_UPDATED} from './goods-constants';
import {IGoodsListItem, IGoodsState} from './goods-types';

const goodsInitialState: IGoodsState = {
  list: [],
  loading: false
};

export const goods = (state: IGoodsState = goodsInitialState, action: any) => {
  switch (action.type) {

    case GOODS_LIST_UPDATED: {
      let list: IGoodsListItem[] = [];

      forIn(action.payload, (item: IGoodsListItem, index: string) => {
        list.push({
          ...item,
          key: index
        })
      });

      return {
        ...state,
        list
      };
    }

    default:
      return state;
  }
};