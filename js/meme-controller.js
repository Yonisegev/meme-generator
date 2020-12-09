'use strict';
var gCanvas;
var gCtx;

function onInit() {
    renderGallery();
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

function onUpdateCanvasText(el) {
    doUpdateImgTxt(el.value)
    drawAllText()

}

function drawAllText() {
    let imgData = getImgData();
    let img = new Image()
    const textLines = imgData.lines;
    img.src = `../images/meme-imgs/${imgData.selectedImgId}.jpg`;
    img.onload = () => {
        resizeCanvas(img)
        gCtx.drawImage(img, (500 / 2) - (img.width / 2), (500 / 2) - (img.height / 2), img.width, img.height)
        textLines.forEach((line) => {
            drawText(line.txt, 250, 80)
        })
    }
    let currLineIdx = imgData.selectedLineIdx;
    let text = imgData.lines[currLineIdx].find((attr) => {
        return attr === 'txt';
    })
}

function drawText(txt, x, y) {
    gCtx.lineWidth = '1'
    gCtx.font = 'normal 500 25px Impact'
    gCtx.textAlign = 'center';
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y);
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