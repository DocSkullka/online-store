import './style.scss'
import item from './item.json'

for (let i = 0; i < item.products.length; i++) {
    if (i % 2 !== 0) {
        document.querySelector('.contentProduct1').insertAdjacentHTML('afterbegin', '<div class="blockProduct"> <div class="cardProduct"><div class="nameItem"></div> <div class="itemImg"></div>  </div> <div class="itemInfo"> <div class="categoryItem">Category:</div> <div class="brandItem">Brand:</div> <div class="priceItem">Price:</div> <div class="discountItem">Discount:</div> <div class="ratingItem">Rating:</div> <div class="stockItem">Stock:</div> </div>')
        document.querySelector('.nameItem').textContent = item.products[i].title
        document.querySelector('.categoryItem').textContent = 'Category: ' + item.products[i].category
        document.querySelector('.brandItem').textContent = 'Brand: ' + item.products[i].brand
        document.querySelector('.priceItem').textContent = 'Price: ' + item.products[i].price + '$'
        document.querySelector('.discountItem').textContent = 'Discount: ' + item.products[i].discountPercentage
        document.querySelector('.ratingItem').textContent = 'Rating: ' + item.products[i].rating
        document.querySelector('.stockItem').textContent = 'Stock: ' + item.products[i].stock
        document.querySelector('.itemImg').style.backgroundImage = `url(${item.products[i].thumbnail})`
    }
    else {
        document.querySelector('.contentProduct2').insertAdjacentHTML('beforeend', '<div class="blockProduct"> <div class="cardProduct"><div class="nameItem"></div> <div class="itemImg"></div>  </div> <div class="itemInfo"> <div class="categoryItem">Category:</div> <div class="brandItem">Brand:</div> <div class="priceItem">Price:</div> <div class="discountItem">Discount:</div> <div class="ratingItem">Rating:</div> <div class="stockItem">Stock:</div> </div>')
        document.querySelector('.nameItem').textContent = item.products[i].title
        document.querySelector('.categoryItem').textContent = 'Category: ' + item.products[i].category
        document.querySelector('.brandItem').textContent = 'Brand: ' + item.products[i].brand
        document.querySelector('.priceItem').textContent = 'Price: ' + item.products[i].price + '$'
        document.querySelector('.discountItem').textContent = 'Discount: ' + item.products[i].discountPercentage
        document.querySelector('.ratingItem').textContent = 'Rating: ' + item.products[i].rating
        document.querySelector('.stockItem').textContent = 'Stock: ' + item.products[i].stock
        document.querySelector('.itemImg').style.backgroundImage = `url(${item.products[i].thumbnail})`
    }
}