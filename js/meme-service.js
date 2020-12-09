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
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
        }
    ]
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