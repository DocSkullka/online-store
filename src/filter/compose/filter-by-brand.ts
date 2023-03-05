import { TCompose, TData } from "../../types/types";
import { filterStore } from "../data/filter-store";

export const filterByBrand: TCompose = (data: TData[]): TData[] => {
  if (filterStore.brands.length === 0) return data;
  return filterStore.brands
    .map((brand: string) => {
      return data.filter((datum) => {
        if (datum.brand === brand) return datum;
      });
    })
    .flat();
};
