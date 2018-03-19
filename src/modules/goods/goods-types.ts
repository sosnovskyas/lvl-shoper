export interface IGoodsListItem {
  key: string;
  name: string;
  status: string;
}

export interface IGoodsState {
  list: IGoodsListItem[];
  loading: boolean;
  modal: {
    isOpen: boolean;
    name: string;
    status: string;
    key: string;
  };
}