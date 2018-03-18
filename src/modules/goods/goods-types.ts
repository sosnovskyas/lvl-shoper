export interface IGoodsListItem {
  key: string;
  name: string;
  status: string;
}

export interface IGoodsState {
  list: IGoodsListItem[];
}