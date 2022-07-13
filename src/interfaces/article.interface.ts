import { Category, Direction } from "../enums/inventory-sort-by";

export interface IArticle {
  code: string;
  position: number;
  quantity: number;
  image: string;
  description: string;
  price: number;
}

export interface SortBy {
  category: Category;
  direction: Direction;
}
