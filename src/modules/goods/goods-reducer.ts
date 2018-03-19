import {forIn} from 'lodash';
import {GOODS_EDIT_WINDOW_OPEN, GOODS_LIST_UPDATED, GOODS_NEW_WINDOW_OPEN} from './goods-constants';
import {IGoodsListItem, IGoodsState} from './goods-types';

const goodsInitialState: IGoodsState = {
  list: [],
  loading: false,
  modal: {
    isOpen: false,
    name: '',
    status: '',
    key: undefined
  }
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

    case GOODS_NEW_WINDOW_OPEN: {
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: true,
          name: '',
          status: '',
          key: undefined,
        }
      };
    }
    case GOODS_EDIT_WINDOW_OPEN: {
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
          isOpen: true
        }
      };
    }

    default:
      return state;
  }
};