import './style.scss'
import { categoryRender, categoryGlobalRender} from './filters/category'
import { brandRender } from './filters/brand'
const item = require('../src/item.json')

const renderTemplate = '<div class="blockProduct"> <div class="cardProduct"><div class="nameItem"></div> <div class="itemImg"></div>  </div> <div class="blockInfo"> <div class="itemInfo"> <div class="categoryItem">Category:</div> <div class="brandItem">Brand:</div> <div class="priceItem">Price:</div> <div class="discountItem">Discount:</div> <div class="ratingItem">Rating:</div> <div class="stockItem">Stock:</div>   </div> <div class="buttonCard"> <button class="addItem">ADD TO CARD</button> <button class="card">CARD</button></div> </div>'

function slider() {
    for (let i:number = 0; i <= item.products.length - 1; i++) {
            document.querySelector('.contentProduct').insertAdjacentHTML('afterbegin', renderTemplate)
            document.querySelector('.blockProduct').classList.add(`${item.products[i].category}`)
            document.querySelector('.nameItem').textContent = item.products[i].title
            document.querySelector('.categoryItem').textContent = 'Category: ' + item.products[i].category
            document.querySelector('.brandItem').textContent = 'Brand: ' + item.products[i].brand
            document.querySelector('.priceItem').textContent = 'Price: ' + item.products[i].price + '$'
            document.querySelector('.discountItem').textContent = 'Discount: ' + item.products[i].discountPercentage
            document.querySelector('.ratingItem').textContent = 'Rating: ' + item.products[i].rating
            document.querySelector('.stockItem').textContent = 'Stock: ' + item.products[i].stock
            document.querySelector<HTMLElement>('.itemImg').style.backgroundImage = `url(${item.products[i].thumbnail})`
    }
}

slider()
categoryRender()
brandRender()


document.addEventListener('click', categoryGlobalRender)

alert('Здравствуйте, заранее прощу прощения за просьбу. Не могли бы вы проверить это задание в конце кросс чека или хотя бы оставить свои контакты(телеграм или дискорд) чтобы с вами можно было связаться для перепроверки. Спасибо за понимание, целую <3')









