import { itemData } from "../data/data";
import { TData } from "../types/types";
import { createAllItems } from "../add-all-items";
import { myCompose } from "./compose/compose";
import { dataExclusion } from "./data-exclusion";
import { readQueryString } from "./query/read-query-string";
import { addAmountItems } from "./amount/amount-items";
import { rangeExclusion } from "./data-range";

export const filterGoods = () => {
  readQueryString();
  const data: TData[] = myCompose(itemData);

  dataExclusion(data);
  rangeExclusion(data);
  const body = <HTMLElement>document.querySelector(".main__items-body");
  body.innerHTML = "";
  createAllItems(data);
  addAmountItems();
};
