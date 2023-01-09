const item = require('../item.json')
let count: number = 0
let countMoney: number = 0

export function countCart(el:any){
    if(el.target.className == 'addItem'){
        count+=1
        countMoney += item.products[el.target.id].price
        document.querySelector('.cart').textContent = `${count}`
        document.querySelector('.cartTotal').textContent = `Cart total: ${countMoney}$`
        document.querySelector('.addItem').textContent = "DROP FROM CART"
        el.target.classList.remove('addItem')
        el.target.classList.add('removeItem')
    }
    else if(el.target.className == 'removeItem'){
        console.log('loh');
        count-=1
        countMoney -= item.products[el.target.id].price
        document.querySelector('.cart').textContent = `${count}`
        document.querySelector('.cartTotal').textContent = `Cart total: ${countMoney}$`
        document.querySelector('.removeItem').textContent = "ADD TO CART"
        el.target.classList.remove('removeItem')
        el.target.classList.add('addItem')
    }
}