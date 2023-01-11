import { TData } from "../types/types";
import { filterStore } from "./data/filter-store";

export const dataExclusion = (data: TData[]): void => {
  const brandsCheckbox: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".filter__brand .checkbox"
  );
  const brandsCheckboxLabel: NodeListOf<HTMLElement> =
    document.querySelectorAll(".filter__brand .checkbox label .first__items");

  const arr: TData[] = [];
  filterStore.categories.forEach((miniItem: string) => {
    data.forEach((item: TData) => {
      if (item.category === miniItem) arr.push(item);
    });
  });

  const testArr = new Set();
  const arrForNumber: string[] = [];
  arr.forEach((item: TData) => {
    testArr.add(item.brand);
    arrForNumber.push(item.brand);
  });

  const arrAdd: HTMLElement[] = [];
  Array.from(testArr).forEach((item) => {
    const arr = Array.from(brandsCheckbox);
    const arrTestAdd = arr.filter((a) => a.getAttribute("value") === item);
    arrAdd.push(...arrTestAdd);
  });

  Array.from(brandsCheckbox).forEach((x) => {
    x.classList.add("disabled");
  });

  arrAdd.forEach((item) => {
    item.classList.remove("disabled");
  });
  if (Array.from(testArr).length === 0) {
    Array.from(brandsCheckbox).forEach((x) => {
      x.classList.remove("disabled");
    });
  }

  brandsCheckboxLabel.forEach((a) => {
    let curr = 0;
    arrForNumber.forEach((b) => {
      if (
        a.parentElement?.parentElement?.previousElementSibling?.getAttribute(
          "value"
        ) === b
      ) {
        curr++;
      }
    });
    a.innerHTML = `${curr}`;
    if (curr === 0) a.classList.add("disabled");
  });

  if (arrAdd.length === 0) {
    brandsCheckbox.forEach((a, index) => {
      let numb = 0;
      data.forEach((b) => {
        if (a.getAttribute("value") === b.brand) numb++;
      });
      Array.from(brandsCheckboxLabel)[index].innerHTML = `${numb}`;
      if (numb === 0) a.classList.add("disabled");
    });
  }

  const categoryCheckbox: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".filter__category .checkbox"
  );
  const categoryCheckboxLabel: NodeListOf<HTMLElement> =
    document.querySelectorAll(
      ".filter__category .checkbox label p .first__items"
    );
  const arr1: TData[] = [];
  filterStore.brands.forEach((miniItem: string) => {
    data.forEach((item: TData) => {
      if (item.brand === miniItem) arr1.push(item);
    });
  });

  const testArr1 = new Set();
  const arrForNumber1: string[] = [];
  arr1.forEach((item: TData) => {
    testArr1.add(item.category);
    arrForNumber1.push(item.category);
  });

  const arrAdd1: HTMLElement[] = []; 
  Array.from(testArr1).forEach((item) => {
    const arr = Array.from(categoryCheckbox);
    const arrTestAdd = arr.filter((a) => a.getAttribute("value") === item);
    arrAdd1.push(...arrTestAdd);
  });
  // сперва удаляем класс со всех
  Array.from(categoryCheckbox).forEach((x) => {
    x.classList.add("disabled");
  });

  arrAdd1.forEach((item) => {
    item.classList.remove("disabled");
  });
  if (arrAdd1.length === 0) {
    Array.from(categoryCheckbox).forEach((x) => {
      x.classList.remove("disabled");
    });
  }

  categoryCheckboxLabel.forEach((a) => {
    let curr = 0;
    arrForNumber1.forEach((b) => {
      if (
        a.parentElement?.parentElement?.previousElementSibling?.getAttribute(
          "value"
        ) === b
      ) {
        curr++;
      }
    });
    a.innerHTML = `${curr}`;
    if (curr === 0) a.classList.add("disabled");
  });
  if (arrAdd1.length === 0) {
    categoryCheckbox.forEach((a, index) => {
      let numb = 0;
      data.forEach((b) => {
        if (a.getAttribute("value") === b.category) numb++;
      });
      Array.from(categoryCheckboxLabel)[index].innerHTML = `${numb}`;
      if (numb === 0) a.classList.add("disabled");
    });
  }

  const arrStock: number[] = [];
  data.forEach((item: TData) => {
    arrStock.push(item.stock);
  });

  const arrPrice: number[] = [];
  data.forEach((item: TData) => {
    arrPrice.push(item.price);
  });
};
