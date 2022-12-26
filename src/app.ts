import './style.scss'
const item = require('../src/item.json')

const renderTemplate = '<div class="blockProduct"> <div class="cardProduct"><div class="nameItem"></div> <div class="itemImg"></div>  </div> <div class="blockInfo"> <div class="itemInfo"> <div class="categoryItem">Category:</div> <div class="brandItem">Brand:</div> <div class="priceItem">Price:</div> <div class="discountItem">Discount:</div> <div class="ratingItem">Rating:</div> <div class="stockItem">Stock:</div>   </div> <div class="buttonCard"> <button class="addItem">ADD TO CARD</button> <button class="card">CARD</button></div> </div>'
const renderTemplate1 = '<div class="blockProduct1"> <div class="cardProduct1"><div class="nameItem1"></div> <div class="itemImg1"></div>  </div> <div class="blockInfo"> <div class="itemInfo1"> <div class="categoryItem1">Category:</div> <div class="brandItem1">Brand:</div> <div class="priceItem1">Price:</div> <div class="discountItem1">Discount:</div> <div class="ratingItem1">Rating:</div> <div class="stockItem1">Stock:</div>   </div> <div class="buttonCard"> <button class="addItem">ADD TO CARD</button> <button class="card">CARD</button></div> </div>'

let n:number = 5 
let i:number = 0 
function slider(i:number,n:number) {
    for (i; i <= item.products.length - (item.products.length-n) ; i++) {
        if (i % 2 === 0){
            document.querySelector('.contentProduct').insertAdjacentHTML('afterbegin', renderTemplate)
            document.querySelector('.nameItem').textContent = item.products[i].title
            document.querySelector('.categoryItem').textContent = 'Category: ' + item.products[i].category
            document.querySelector('.brandItem').textContent = 'Brand: ' + item.products[i].brand
            document.querySelector('.priceItem').textContent = 'Price: ' + item.products[i].price + '$'
            document.querySelector('.discountItem').textContent = 'Discount: ' + item.products[i].discountPercentage
            document.querySelector('.ratingItem').textContent = 'Rating: ' + item.products[i].rating
            document.querySelector('.stockItem').textContent = 'Stock: ' + item.products[i].stock
            document.querySelector<HTMLElement>('.itemImg').style.backgroundImage = `url(${item.products[i].thumbnail})`
            console.log('LEFT i '+i);
            console.log('n'+n);
}else {
        document.querySelector('.contentProduct1').insertAdjacentHTML('afterbegin', renderTemplate1)
        document.querySelector('.nameItem1').textContent = item.products[i].title
        document.querySelector('.categoryItem1').textContent = 'Category: ' + item.products[i].category
        document.querySelector('.brandItem1').textContent = 'Brand: ' + item.products[i].brand
        document.querySelector('.priceItem1').textContent = 'Price: ' + item.products[i].price + '$'
        document.querySelector('.discountItem1').textContent = 'Discount: ' + item.products[i].discountPercentage
        document.querySelector('.ratingItem1').textContent = 'Rating: ' + item.products[i].rating
        document.querySelector('.stockItem1').textContent = 'Stock: ' + item.products[i].stock
        document.querySelector<HTMLElement>('.itemImg1').style.backgroundImage = `url(${item.products[i].thumbnail})`
        console.log('Rigth i '+i);
        console.log('n'+n);
}
}
}

slider(i,n)

document.querySelector('.buttNext').addEventListener('click', () =>{
    document.querySelector('.contentProduct').innerHTML = ''
    document.querySelector('.contentProduct1').innerHTML = ''
    console.log(i);
        if(n >= 99 ){
            i = 0
            n = 5
            return slider(i,n)
        }else if (n == 95){
            i = 96
            n = 99
            return slider(i,n)
        }else if(i < item.products.length) {
            return slider(i+=6,n+=6)
        }
})

document.querySelector('.buttBack').addEventListener('click', () =>{
    document.querySelector('.contentProduct').innerHTML = ''
    document.querySelector('.contentProduct1').innerHTML = ''
    if(i == 0){
        i = 96
        n = 99
        return slider(i,n)
    }else if (i == 96){
        i = 90
        n = 95
        return slider(i,n)
    }else if(i < item.products.length) {
        return slider(i-=6,n-=6)
    }
}) 




// const brand = '<div class="check"> <input type="checkbox"></input> <label  class="brandName nameCategory"></label> <span class="span">(0/3)</span></div>'
// for(let i = 0; i< item.products.length; i++) {
//     document.querySelector('.brandBox').insertAdjacentHTML('afterbegin', brand)
//     document.querySelector('.brandName').textContent = item.products[i].brand
// }