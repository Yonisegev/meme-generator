'use strict';

var gMeme;

const gKeywords = {
    'funny': 10,
    'comics': 5,
    'dogs': 20,
    'cats': 15,

}

const gImgs = [
    {
        id: 1,
        keywords: ['funny'],
    }
]

gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            imgWidth: null,
            imgHeight: null,
        }
    ]
}


function getImgData() {
    return gMeme;
}

function updateMemeData(id) {
    gMeme.selectedImgId = id;
}