import './style.scss'
const item = require('../src/item.json')

const renderTempalte = '<div class="blockProduct"> <div class="cardProduct"><div class="nameItem"></div> <div class="itemImg"></div>  </div> <div class="itemInfo"> <div class="categoryItem">Category:</div> <div class="brandItem">Brand:</div> <div class="priceItem">Price:</div> <div class="discountItem">Discount:</div> <div class="ratingItem">Rating:</div> <div class="stockItem">Stock:</div> </div>'
const renderTempalte1 = '<div class="blockProduct1"> <div class="cardProduct1"><div class="nameItem1"></div> <div class="itemImg1"></div>  </div> <div class="itemInfo1"> <div class="categoryItem1">Category:</div> <div class="brandItem1">Brand:</div> <div class="priceItem1">Price:</div> <div class="discountItem1">Discount:</div> <div class="ratingItem1">Rating:</div> <div class="stockItem1">Stock:</div> </div>'
for (let i = 0; i <= item.products.length - 1; i++) {
    if (i % 2 !== 0){
        document.querySelector('.contentProduct').insertAdjacentHTML('afterbegin', renderTempalte)
        document.querySelector('.nameItem').textContent = item.products[i].title
        document.querySelector('.categoryItem').textContent = 'Category: ' + item.products[i].category
        document.querySelector('.brandItem').textContent = 'Brand: ' + item.products[i].brand
        document.querySelector('.priceItem').textContent = 'Price: ' + item.products[i].price + '$'
        document.querySelector('.discountItem').textContent = 'Discount: ' + item.products[i].discountPercentage
        document.querySelector('.ratingItem').textContent = 'Rating: ' + item.products[i].rating
        document.querySelector('.stockItem').textContent = 'Stock: ' + item.products[i].stock
        document.querySelector('.itemImg').style.backgroundImage = `url(${item.products[i].thumbnail})`
    }else {
        document.querySelector('.contentProduct1').insertAdjacentHTML('afterbegin', renderTempalte1)
    document.querySelector('.nameItem1').textContent = item.products[i].title
    document.querySelector('.categoryItem1').textContent = 'Category: ' + item.products[i].category
    document.querySelector('.brandItem1').textContent = 'Brand: ' + item.products[i].brand
    document.querySelector('.priceItem1').textContent = 'Price: ' + item.products[i].price + '$'
    document.querySelector('.discountItem1').textContent = 'Discount: ' + item.products[i].discountPercentage
    document.querySelector('.ratingItem1').textContent = 'Rating: ' + item.products[i].rating
    document.querySelector('.stockItem1').textContent = 'Stock: ' + item.products[i].stock
    document.querySelector('.itemImg1').style.backgroundImage = `url(${item.products[i].thumbnail})`
    }

}

































// for (let i = 0; i < item.products.length; i++) {
//     if (i % 2 !== 0) {
//         document.querySelector('.contentProduct1').insertAdjacentHTML('afterbegin', '<div class="blockProduct"> <div class="cardProduct"><div class="nameItem"></div> <div class="itemImg"></div>  </div> <div class="itemInfo"> <div class="categoryItem">Category:</div> <div class="brandItem">Brand:</div> <div class="priceItem">Price:</div> <div class="discountItem">Discount:</div> <div class="ratingItem">Rating:</div> <div class="stockItem">Stock:</div> </div>')
//         document.querySelector('.nameItem').textContent = item.products[i].title
//         document.querySelector('.categoryItem').textContent = 'Category: ' + item.products[i].category
//         document.querySelector('.brandItem').textContent = 'Brand: ' + item.products[i].brand
//         document.querySelector('.priceItem').textContent = 'Price: ' + item.products[i].price + '$'
//         document.querySelector('.discountItem').textContent = 'Discount: ' + item.products[i].discountPercentage
//         document.querySelector('.ratingItem').textContent = 'Rating: ' + item.products[i].rating
//         document.querySelector('.stockItem').textContent = 'Stock: ' + item.products[i].stock
//         document.querySelector('.itemImg').style.backgroundImage = `url(${item.products[i].thumbnail})`
//     }
//     else if (i % 2 === 0) {
//         document.querySelector('.contentProduct2').insertAdjacentHTML('beforeend', '<div class="blockProduct"> <div class="cardProduct"><div class="nameItem"></div> <div class="itemImg"></div>  </div> <div class="itemInfo"> <div class="categoryItem">Category:</div> <div class="brandItem">Brand:</div> <div class="priceItem">Price:</div> <div class="discountItem">Discount:</div> <div class="ratingItem">Rating:</div> <div class="stockItem">Stock:</div> </div>')
//         document.querySelector('.nameItem').textContent = item.products[i].title
//         document.querySelector('.categoryItem').textContent = 'Category: ' + item.products[i].category
//         document.querySelector('.brandItem').textContent = 'Brand: ' + item.products[i].brand
//         document.querySelector('.priceItem').textContent = 'Price: ' + item.products[i].price + '$'
//         document.querySelector('.discountItem').textContent = 'Discount: ' + item.products[i].discountPercentage
//         document.querySelector('.ratingItem').textContent = 'Rating: ' + item.products[i].rating
//         document.querySelector('.stockItem').textContent = 'Stock: ' + item.products[i].stock
//         document.querySelector('.itemImg').style.backgroundImage = `url(${item.products[i].thumbnail})`
//     }
// }