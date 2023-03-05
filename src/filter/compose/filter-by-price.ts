import { TCompose, TData } from "../../types/types";
import { filterStore } from "../data/filter-store";

export const filterByPrice: TCompose = (data: TData[]): TData[] => {
  return data.filter((datum) => {
    if (
      datum.price >= filterStore.minPrice &&
      datum.price <= filterStore.maxPrice
    )
      return datum;
  });
};
