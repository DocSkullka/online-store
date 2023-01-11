import { TCompose, TData } from "../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByRatingMin: TCompose = (data: TData[]): TData[] => {
  if (filterStore.sort === "ratingmin") {
    data.sort((first: TData, next: TData) => {
      return next.rating - first.rating;
    });
  }
  return data;
};
