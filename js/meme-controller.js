'use strict';
var gCanvas;
var gCtx;

function onInit() {
    renderGallery();
}

function drawImg() {
    let imgData = getImgData();
    let img = new Image();
    img.src = `./images/meme-imgs/${imgData.selectedImgId}.jpg`;
    img.onload = () => {
        resizeCanvas(img)
        gCtx.drawImage(img, (500 / 2) - (img.width / 2), (500 / 2) - (img.height / 2), img.width, img.height)
    }
}

function onUpdateCanvasText(el) {
    doUpdateImgTxt(el.value)
    drawAllText()

}

function onChangeFontSize(diff) {
    if (diff === '-') changeFontSize(-1);
    else changeFontSize(+1);
    drawAllText();

}

function onChangeTextPosY(diff) {
    if (diff === '-') changeTextPosY(+10)
    else changeTextPosY(-10);
    drawAllText();
}

function drawAllText() {
    let imgData = getImgData();
    let img = new Image()
    const textLines = imgData.lines;
    img.src = `./images/meme-imgs/${imgData.selectedImgId}.jpg`;
    img.onload = () => {
        resizeCanvas(img)
        gCtx.drawImage(img, (500 / 2) - (img.width / 2), (500 / 2) - (img.height / 2), img.width, img.height)
        textLines.forEach((line) => {
            drawText(line.txt, line.x, line.y, line.size)
        })
    }
}

function drawText(txt, x = 250, y = 80, size) {
    gCtx.lineWidth = '1'
    gCtx.font = `700 ${size}px impact`
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