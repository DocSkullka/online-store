import { TCompose, TData } from "../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByRatingMax: TCompose = (data: TData[]): TData[] => {
  if (filterStore.sort === "ratingmax") {
    data.sort((first: TData, next: TData) => {
      return first.rating - next.rating;
    });
  }
  return data;
};
