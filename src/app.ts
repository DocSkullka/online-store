import './style.scss'
const item = require('../src/item.json')

const renderTemplate = '<div class="blockProduct"> <div class="cardProduct"><div class="nameItem"></div> <div class="itemImg"></div>  </div> <div class="itemInfo"> <div class="categoryItem">Category:</div> <div class="brandItem">Brand:</div> <div class="priceItem">Price:</div> <div class="discountItem">Discount:</div> <div class="ratingItem">Rating:</div> <div class="stockItem">Stock:</div> </div>'
const renderTemplate1 = '<div class="blockProduct1"> <div class="cardProduct1"><div class="nameItem1"></div> <div class="itemImg1"></div>  </div> <div class="itemInfo1"> <div class="categoryItem1">Category:</div> <div class="brandItem1">Brand:</div> <div class="priceItem1">Price:</div> <div class="discountItem1">Discount:</div> <div class="ratingItem1">Rating:</div> <div class="stockItem1">Stock:</div> </div>'
let n = 5 
let i = 0 
function nu(i = 0, n = 5) {
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
    console.log(i);
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
    console.log(i);
}
}
// console.log('Length'+(item.products.length-n));
// console.log('end'+ i);

}


nu()
document.querySelector('.buttNext').addEventListener('click', () =>{
    document.querySelector('.contentProduct').innerHTML = ''
    document.querySelector('.contentProduct1').innerHTML = ''
    if(i > item.products.length){
        i = 0
        n = 5
        return nu(i,n)
    }else{

        console.log(i);
        console.log(n);
        return nu(i+=6,n+=6)
    }
}) 
document.querySelector('.buttBack').addEventListener('click', () =>{
    document.querySelector('.contentProduct').innerHTML = ''
    document.querySelector('.contentProduct1').innerHTML = ''
    if(i <= 0){
        i = item.products.length - n
        n = 0
        console.log('FUNCT'+i);
        
        return nu(i,n)
    }else{
        console.log(i);
        console.log(n);
        return nu(i-=6,n-=6)
    }
}) 




// const brand = '<div class="check"> <input type="checkbox"></input> <label  class="brandName nameCategory"></label> <span class="span">(0/3)</span></div>'
// for(let i = 0; i< item.products.length; i++) {
//     document.querySelector('.brandBox').insertAdjacentHTML('afterbegin', brand)
//     document.querySelector('.brandName').textContent = item.products[i].brand
// }