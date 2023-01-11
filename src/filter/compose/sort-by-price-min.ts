import { TCompose, TData } from "../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByPriceMin: TCompose = (data: TData[]): TData[] => {
  if (filterStore.sort === "pricemin") {
    data.sort((first: TData, next: TData) => {
      return next.price - first.price;
    });
  }
  return data;
};
