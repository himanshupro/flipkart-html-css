import {featureProdutNav} from "./Data/featureProductNav.js";
import {imageSlider} from "./Data/imageSlider.js";
import {electronicsProductData} from "./Data/electronicProduct.js";

let input_search = document.getElementById("input_search");
let form_search = document.getElementById("form_search");
let recent_SearchEl = document.querySelector(".recent_Search");

let recentSearchList = [];
form_search.addEventListener("submit",(e) => {
    e.preventDefault();
    recentSearchList.unshift(input_search.value )
    renderRecent()
});

function renderRecent() {
    let recent_Search_html = '';
recentSearchList.forEach(el => {
    recent_Search_html += `
    <div class="recent_list">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>${el}</p>
    </div>
    `;
})

recent_SearchEl.innerHTML = recent_Search_html;
}

renderRecent();

/**************Feature Product**********/
let featureProduct_listEl = document.querySelector(".featureProduct_list");
let featureProductListHTML = "";
let featureProductNav ;

featureProductNav.forEach(el => {
    featureProductListHTML += `
    <div class="featureProduct_item">
        <a href="${el.link}">
            <div class="featureProduct_image">
                <img src="${el.img}"/>
            </div>
            <p>
                ${el.name}
                ${el.subNavigation ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` : ""} 
            </p>
        </a>
    </div>
    `
})

featureProduct_listEl.innerHTML=featureProductListHTML;