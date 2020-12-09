'use strict';
var gCanvas;
var gCtx;

function onInit() {
    renderGallery();
    clearTextInput();
}


function drawImg() {
    let imgData = getImgData();
    let img = new Image();
    img.src = `./images/meme-imgs/${imgData.selectedImgId}.jpg`;
    img.onload = () => {
        resizeCanvas(img)
        const screenWidth = document.body.clientWidth;
        if (screenWidth <= 515) {
            gCtx.drawImage(img, (500 / 2) - (img.width / 2), (500 / 2) - (img.height / 2), 350, 350)
        } else {
            gCtx.drawImage(img, (500 / 2) - (img.width / 2), (500 / 2) - (img.height / 2), img.width, img.height)
        }

    }
}

function onUpdateCanvasText(el) {
    doUpdateImgTxt(el.value)
    drawAllText()

}

function onChangeFontSize(diff) {
    if (diff === '-') changeFontSize(-5);
    else changeFontSize(+5);
    drawAllText();

}

function onChangeTextPosY(diff) {
    if (diff === '-') changeTextPosY(+10)
    else changeTextPosY(-10);
    drawAllText();
}

function onAddLine() {
    createLine();
    changeLine();
    clearTextInput();
    document.querySelector('input[name="text"]').focus();

}

function onChangeLine() {
    changeLine();
    drawAllText();
    document.querySelector('input[name="text"]').focus();
    clearTextInput();
}

function clearTextInput() {
    const elInput = document.querySelector('input[name="text"]').value = '';
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