'use strict';
var gCanvas;
var gCtx;

function onInit() {
    renderGallery();
    clearTextInput();
    renderKeywords();
}

function drawImg() {
    let imgData = getImgData();
    let img = new Image();
    img.src = `./images/meme-imgs/${imgData.selectedImgId}.jpg`;
    img.onload = () => {
        resizeCanvas(img);
        checkScreenSize(img);
    }
}

function uploadAndShare(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank"`)
    }

    doUploadImg(elForm, onSuccess);

}

function onSaveCanvas(elLink) {
    const data = gCanvas.toDataURL();
    console.log(data)
    elLink.href = data;
    elLink.download = 'my-meme.jpg';
}


function onFontSelect(font) {
    changeFont(font);
    drawAllText();
}

function onColorClick() {
    const input = document.querySelector('.color-pal');
    input.focus();
    input.click();
    input.addEventListener('input', () => changeColor(input.value))


}
function onUpdateCanvasText(el) {
    doUpdateImgTxt(el.value)
    drawAllText();

}

function onAlign(direction) {
    alignText(direction);
    drawAllText();
}

function onChangeFontSize(diff) {
    if (diff === '-') changeFontSize(-5);
    else changeFontSize(+5);
    drawAllText();

}

function onChangeTextPosY(diff) {
    if (diff === '-') changeTextPosY(+10);
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
    let currText = getCurrText()
    document.querySelector('.text-input').value = currText;
}

function clearTextInput() {
    const elInput = document.querySelector('input[name="text"]');
    elInput.value = '';
    elInput.focus();
}

function drawAllText() {
    let imgData = getImgData();
    let img = new Image();
    const textLines = imgData.lines;
    img.src = `./images/meme-imgs/${imgData.selectedImgId}.jpg`;
    img.onload = () => {
        resizeCanvas(img);
        checkScreenSize(img)
        textLines.forEach((line) => {
            drawText(line.txt, line.x, line.y, line.size, line.align, line.color, line.font);
        })
    }
}

function drawText(txt, x = 250, y = 80, size, align, color, font) {
    gCtx.lineWidth = '1';
    gCtx.font = `700 ${size}px ${font}`;
    gCtx.textAlign = align;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = color;
    if (isNarrow()) {
        x = 175;

    }
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
}


function onDeleteLine() {
    deleteLine();
    clearTextInput();
    drawAllText();
}

function onImgSelect(id) {
    document.querySelector('.font-select').selectedIndex = 0; // Reset select input back to default.
    updateMemeData(id);
    renderCanvas();
    showEditor();
    drawImg();
}

function showEditor() {
    const elGallery = document.querySelector('.gallery-container');
    const elEditor = document.querySelector('.editor-container');
    elGallery.classList.add('hide');
    elEditor.classList.remove('hide');
}



function renderCanvas() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
}

function drawTextFromService() {
    drawAllText();
}

function clearTextInputFromService() {
    clearTextInput();
}

function checkScreenSize(img) {
    const screenWidth = document.body.clientWidth;
    const elContainer = document.querySelector('.canvas-container');
    if (screenWidth <= 515) {
        gCtx.drawImage(img, (500 / 2) - (img.width / 2), (500 / 2) - (img.height / 2), 350, 350);
        elContainer.style.width = 350 + 'px';
        elContainer.style.height = 350 + 'px';

    } else {
        gCtx.drawImage(img, (500 / 2) - (img.width / 2), (500 / 2) - (img.height / 2), img.width, img.height);
    }
}


function isNarrow() {
    const screenWidth = document.body.clientWidth;
    return screenWidth <= 515;
}