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
            align: 'left',
            color: 'red',
            x: 250,
            y: 80,
        }
        // {
        //     txt: '',
        //     size: 40,
        //     align: 'left',
        //     color: 'red',
        //     x: 250,
        //     y: 450,
        // }
    ]
}

function createLine() {
    var yAxis;
    if (gMeme.lines.length === 0) yAxis = 80;
    if (gMeme.lines.length === 1) yAxis = 450;
    if (gMeme.lines.length > 1) yAxis = 250;
    console.log(yAxis);

    gMeme.lines.push(
        {
            txt: '',
            size: 40,
            align: 'left',
            color: 'white',
            x: 250,
            y: yAxis
        }
    )
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
    gMeme.lines[currLineIdx].txt = txt;
}

function getCurrLineIndex() {
    return gMeme.selectedLineIdx;
}


function getImgData() {
    return gMeme;
}

function updateMemeData(id) {
    gMeme.selectedImgId = id;
}