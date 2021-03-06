'use strict';

function renderGallery() {
    let imgs;
    let filteredImgs = getFilteredImgs();
    if (filteredImgs.length > 0) imgs = filteredImgs;
    else imgs = getImages()
    let strHTMLs = imgs.map(img => {
        return `<div><img class="${img.id}" onclick="onImgSelect(${img.id}, this)" src="./images/meme-imgs/${img.id}.jpg"></div>`
    })
    document.querySelector('.gallery-container').innerHTML = strHTMLs.join('');
}

function renderKeywords() {
    const elKeywordsList = document.querySelector('.keywords-list');
    const elMoreKeywords = document.querySelector('.more-keywords');
    const elDataList = document.querySelector('.data-list');
    const keywords = getKeywords();
    let strHTMLs = '';
    let strMoreHTMLs = '';
    let strDataListHTML = '';
    const fontSizes = getFontSize();
    keywords.forEach((keyword, i) => {
        if (fontSizes[i] > 50) fontSizes[i] = 50; // To avoid unlimited increase of font-size
        strDataListHTML += `<option value="${keyword}"></option>`;
        if (i >= 5) {
            strMoreHTMLs += `<li onclick="onClickKeyword('${keyword}')" style="font-size:${fontSizes[i]}px">${keyword}</li>`
        } else {
            strHTMLs += `<li onclick="onClickKeyword('${keyword}')" style="font-size:${fontSizes[i]}px">${keyword}</li>`
        }
    })
    elKeywordsList.innerHTML = strHTMLs;
    elKeywordsList.innerHTML += '<a class="more-words-btn" onclick="onShowMore()" href="#">more...</a>'
    elMoreKeywords.innerHTML = strMoreHTMLs;
    elDataList.innerHTML = strDataListHTML;
}

function onClickKeyword(keyword) { // If user clicked on a keyword
    document.querySelector('input[name="search"]').value = keyword;
    filterImagesToShow(keyword)
    updateKeywordMap(keyword)
    renderKeywords();
    renderGallery();
}

function onKeywordSearch(ev) { // If user used input to search for a keyword
    ev.preventDefault();
    const elSearchInput = document.querySelector('input[name="search"]').value.toLowerCase().trim()
    filterImagesToShow(elSearchInput);
    renderGallery();
}

function onShowMore() {
    const elMoreKeywords = document.querySelector('.more-keywords');
    const elMoreBtn = document.querySelector('.more-words-btn');
    const elNav = document.querySelector('.main-nav')
    elMoreKeywords.classList.toggle('hide');
    elNav.classList.toggle('main-nav-height') // keywords nav height will be set to auto, to support more words in the future
    elMoreBtn.innerText = (elMoreBtn.innerText === 'more...') ? 'less...' : 'more...';
}

function onShowGallery() {
    resetFilter();
    renderGallery();
    const elGallery = document.querySelector('.gallery-container');
    const elEditor = document.querySelector('.editor-container');
    elGallery.classList.remove('hide');
    elEditor.classList.add('hide');
}



function toggleMenu() {
    const x = document.querySelector('.menu');
    x.classList.toggle('opened');
    document.body.classList.toggle('opened')
    x.setAttribute('aria-expanded', x.classList.contains('opened'))
}

function onActiveTab(elTab) {
    const elGalleryTab = document.querySelector('.gallery-tab')
    const elAboutTab = document.querySelector('.about-tab');
    if (elTab === elGalleryTab || elTab === 'gallery') {
        elGalleryTab.classList.add('header-tab-active')
        elAboutTab.classList.remove('header-tab-active')
    } else {
        elTab.classList.add('header-tab-active')
        elGalleryTab.classList.remove('header-tab-active');
    }
}
