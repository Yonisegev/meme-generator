'use strict';

var gMeme;

const gKeywords = {
    'funny': 10,
    'comics': 5,
    'dogs': 20,
    'cats': 15,

}


gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'white',
            font: 'impact',
            x: 250,
            y: 80,
            align: 'center',
        }
    ]
}

function createLine() {
    var yAxis;
    if (gMeme.lines.length === 0) yAxis = 80;
    if (gMeme.lines.length === 1) yAxis = 450;
    if (gMeme.lines.length > 1) yAxis = 250;

    gMeme.lines.push(
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'white',
            font: 'impact',
            x: 250,
            y: yAxis,
            align: 'center',
        }
    )
}

function deleteLine() {
    if (!gMeme.lines.length) return;
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if (!gMeme.selectedLineIdx) return;
    gMeme.selectedLineIdx--
}

function changeFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function changeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
    drawTextFromService()
}

function alignText(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction;
}

function changeLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) { // If it's the last line
        gMeme.selectedLineIdx = 0;
        return;
    }
    gMeme.selectedLineIdx++;
}

function changeTextPosY(diff) {
    let currLineIdx = getCurrLineIndex();
    if (gMeme.lines[currLineIdx].y < 40) {
        gMeme.lines[currLineIdx].y = 41;
    } else if (gMeme.lines[currLineIdx].y >= 500) {
        gMeme.lines[currLineIdx].y = 490;
    }
    gMeme.lines[currLineIdx].y += diff;
}

function changeFontSize(diff) {
    let currLineIdx = getCurrLineIndex()
    gMeme.lines[currLineIdx].size += diff;
}

function doUpdateImgTxt(txt) {
    let currLineIdx = getCurrLineIndex();
    if (!gMeme.lines[0]) createLine();
    gMeme.lines[currLineIdx].txt = txt;
}

function getCurrLineIndex() {
    return gMeme.selectedLineIdx;
}


function getImgData() {
    return gMeme;
}

function updateMemeData(id) {
    gMeme.lines.splice(1); // Lines 100 to 103 are for whenever a user selects an images, writes on it, then goes back to gallery and selects another image.
    gMeme.lines[0].txt = '';
    gMeme.lines[0].color = 'white';
    gMeme.selectedLineIdx = 0;
    clearTextInputFromService();
    gMeme.selectedImgId = id;
}
