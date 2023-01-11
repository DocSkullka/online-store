export function confirmForm(event: Event): void {
  event.preventDefault();
  localStorage.setItem("cart-storage", JSON.stringify([]));
  localStorage.removeItem("promo");
  const body = <HTMLElement>document.querySelector(".products__body");
  const mod = <HTMLElement>document.querySelector(".modal");
  const shadow = <HTMLElement>document.querySelector(".shadow");
  mod.remove();
  shadow.classList.remove("shadow");
  body.innerHTML = `<div class="mod__info">Thank you</div>`;

  const second = <HTMLElement>document.querySelector(".mod__info > span");
  let timer = 3;
  setInterval(() => {
    second.innerHTML = `${timer}`;
    timer--;
  }, 1000);
  setTimeout(() => {
    window.location.assign(window.location.origin);
  }, 3500);
}
