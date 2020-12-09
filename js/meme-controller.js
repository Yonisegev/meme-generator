'use strict';
var gCanvas;
var gCtx;

function onInit() {

}

function drawImg() {
    let imgData = getImgData();
    let img = new Image();
    img.src = `../images/meme-imgs/${imgData.selectedImgId}.jpg`;
    img.onload = () => {
        resizeCanvas(img)
        gCtx.drawImage(img, (500 / 2) - (img.width / 2), (500 / 2) - (img.height / 2), img.width, img.height)
    }
}

function drawText() {
    let imgData = getImgData();
    let currLineIdx = imgData.selectedLineIdx;
    let txt = imgData.lines[currLineIdx].txt;
    var x = gCanvas.width / 2;
    gCtx.lineWidth = '1'
    gCtx.font = 'normal 500 25px Impact'
    gCtx.textAlign = 'center';
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, x, 80)
    gCtx.strokeText(txt, x, 80);
}

function onImgSelect(id) {
    updateMemeData(id);
    renderCanvas()
    drawImg();
}

function renderCanvas() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d')
}