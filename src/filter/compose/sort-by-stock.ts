import { TCompose, TData } from "../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByStock: TCompose = (data: TData[]): TData[] => {
  if (filterStore.sort === "stock") {
    data.sort((first: TData, next: TData) => {
      return next.stock - first.stock;
    });
  }
  return data;
};
