'use strict';

let gKeywords = [];
let filteredImgs = [];

const gKeywordsMap = {
    'funny': 16,
    'politics': 16,
    'trump': 16,
    'donald': 16,
    'dogs': 16,
    'cats': 15,
    'cute': 24,
    'golden': 16,
    'kids': 16,
    'victory': 16,
    'aliens': 16,
    'science': 16,
    'tell': 16,
    'tv': 16,
    'barack': 16,
    'obama': 16,
    'sports': 16,
    'israel': 30,
    'haim': 16,
    'hect': 16,
    'leonardo': 16,
    'dicapario': 16,
    'matrix': 24,
    'lord of the rings': 16,
    'star': 16,
    'wars': 16,
    'russia': 16,
    'vladimir': 16,
    'putin': 26,
    'toy': 16,
    'story': 16,
    'comics': 12,

}

const gImgs = [
    { id: 1, keywords: ['funny', 'politics', 'trump', 'donald'] },
    { id: 2, keywords: ['funny', 'dogs', 'cute', 'golden'] },
    { id: 3, keywords: ['kids', 'dogs', 'cute'] },
    { id: 4, keywords: ['cats', 'cute'] },
    { id: 5, keywords: ['victory', 'cute', 'kids'] },
    { id: 6, keywords: ['aliens', 'funny', 'science'] },
    { id: 7, keywords: ['cute', 'funny', 'kids'] },
    { id: 8, keywords: ['tell', 'funny', 'tv'] },
    { id: 9, keywords: ['cute', 'funny', 'kids'] },
    { id: 10, keywords: ['politics', 'funny', 'barack', 'obama'] },
    { id: 11, keywords: ['sports', 'funny'] },
    { id: 12, keywords: ['israel', 'funny', 'tv', 'haim', 'hect'] },
    { id: 13, keywords: ['tv', 'funny', 'leonardo', 'dicapario'] },
    { id: 14, keywords: ['tv', 'matrix', 'funny'] },
    { id: 15, keywords: ['tv', 'lord of the rings', 'funny'] },
    { id: 16, keywords: ['tv', 'star', 'wars'] },
    { id: 17, keywords: ['russia', 'vladimir', 'putin', 'politics'] },
    { id: 18, keywords: ['tv', 'toy', 'story', 'funny'] },
]
makeKeywords();

function filterImagesToShow(keyword) {
    filteredImgs = [];
    gImgs.forEach(img => {
        if (img.keywords.includes(keyword)) {
            filteredImgs.push(img);
        }
    })
}

function getFilteredImgs() {
    return filteredImgs;
}

function resetFilter() {
    filteredImgs = [];
}

function makeKeywords() {
    gImgs.forEach(img => {
        gKeywords.push(...img.keywords);
    })
}

function filterKeywords() {
    gKeywords = gKeywords.filter((keyword, idx) => { // Remove duplicates
        return gKeywords.indexOf(keyword) === idx;
    })
}

function getKeywords() {
    filterKeywords();
    return gKeywords;
}



function getFontSize() {
    return Object.values(gKeywordsMap)

}

function getImages() {
    return gImgs;
}