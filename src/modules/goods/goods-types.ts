export interface IGoodsListItem {
  id: string;
  name: string;
  status: string;
}

export interface IGoodsState {
  list: IGoodsListItem[];
  loading: boolean;
  modal: IGoodsListItem & {
    isOpen: boolean;
  };
}