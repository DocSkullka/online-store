const item = require('../item.json')
 

export function brandRender() {
    const brandCache: string[] = []
    for (let i:number = 0; i <= item.products.length - 1; i++){
        if (!brandCache.includes(item.products[i].brand)){
            document.querySelector('.brandBox').insertAdjacentHTML('afterbegin', `<div class="brandCheck"><label  class="nameCategory"><input type="checkbox" class="categoryCheckbox" id="${item.products[i].brand}"></input> ${item.products[i].brand} </label></div>`)
            brandCache.push(item.products[i].brand)
        }
    }
}
