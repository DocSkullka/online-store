const item = require('../item.json')
import { slider } from "../app"




export function categoryRender() {
    const categoryCache: string[] = []
    for (let i:number = 0; i <= item.products.length - 1; i++){
        if (!categoryCache.includes(item.products[i].category)){
            document.querySelector('.checkbox').insertAdjacentHTML('afterbegin', `<div class="categoryCheck"><label  class="nameCategory"><input type="checkbox" class="categoryCheckbox" id="${item.products[i].category}"></input> ${item.products[i].category} </label></div>`)
            categoryCache.push(item.products[i].category)
        }  
    }
}


export function categoryGlobalRender(el: any){
    if(el.target.checked == true && el.target.className != "brandCheckbox"){
        Array.from(document.querySelectorAll('.blockProduct')).map(function (elem: HTMLInputElement){
            if(!elem.classList.contains(el.target.id)){

                elem.classList.add('hidden')
            }else if(elem.classList.contains(el.target.id)){
                elem.classList.add('visible')
            }
        })
    }
    if(el.target.checked == false && el.target.className != "brandCheckbox"){
        Array.from(document.querySelectorAll('.blockProduct')).map(function (elem){
            if(elem.classList.contains(el.target.id) && elem.classList.contains('visible')){
                elem.classList.remove('visible')
                elem.classList.add('hidden') 
            }
        })
    }
    if(el.target.checked == false && Array.from(document.querySelectorAll('.categoryCheckbox')).every((element:HTMLInputElement) => !element.checked)){      
        Array.from(document.querySelectorAll('.blockProduct')).map(function(element){
            element.classList.remove('visible')
            element.classList.remove('hidden')
        })
        document.removeEventListener('click', slider)
    }
}




