'use strict';

function renderGallery() {
    let imgs = getImages();
    let strHTMLs = imgs.map(img => {
        return `<div><img class="${img.id}" onclick="onImgSelect(${img.id}, this)" src="./images/meme-imgs/${img.id}.jpg"></div>`
    })
    document.querySelector('.gallery-container').innerHTML = strHTMLs.join('');
}