import { TCompose, TData } from "../../types/types";
import { filterStore } from "../data/filter-store";

export const filterByCategory: TCompose = (
  data: TData[]
): TData[] => {
  if (filterStore.categories.length === 0) return data;

  return filterStore.categories
    .map((category:string) => {
      return data.filter((datum) => {
        if (datum.category === category) return datum;
      });
    })
    .flat();
};
