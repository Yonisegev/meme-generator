'use strict';

function renderGallery() {
    let imgs = getImages();
    let strHTMLs = imgs.map(img => {
        return `<div><img class="${img.id}" onclick="onImgSelect(${img.id}, this)" src="./images/meme-imgs/${img.id}.jpg"></div>`
    })
    document.querySelector('.gallery-container').innerHTML = strHTMLs.join('');
}

function renderKeywords() {
    const elKeywordsList = document.querySelector('.keywords-list');
    const elMoreKeywords = document.querySelector('.more-keywords');
    const keywords = getKeywords();
    let strHTMLs = '';
    let strMoreHTMLs = '';
    keywords.forEach((keyword, i) => {
        if (i >= 5) {
            strMoreHTMLs += `<li>${keyword}</li>`
        } else {
            strHTMLs += `<li>${keyword}</li>`
        }
    })
    elKeywordsList.innerHTML = strHTMLs;
    elKeywordsList.innerHTML += '<a class="more-words-btn" onclick="onShowMore()" href="#">more...</a>'
    elMoreKeywords.innerHTML = strMoreHTMLs;
}

function onShowMore() {
    const elMoreKeywords = document.querySelector('.more-keywords');
    const elMoreBtn = document.querySelector('.more-words-btn');
    const elNav = document.querySelector('.main-nav')
    elMoreKeywords.classList.toggle('hide');
    elNav.classList.toggle('main-nav-height')
    elMoreBtn.innerText = (elMoreBtn.innerText === 'more...') ? 'less...' : 'more...';
}