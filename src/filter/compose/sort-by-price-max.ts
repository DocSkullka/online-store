import { TCompose, TData } from "../../types/types";
import { filterStore } from "../data/filter-store";

export function sortByPriceMax<T>(data: T): T {
  if (Array.isArray(data)) {
    if (filterStore.sort === "pricemax") {
      data.sort((first: TData, next: TData) => {
        return first.price - next.price;
      });
    }
  }
  return data;
}
