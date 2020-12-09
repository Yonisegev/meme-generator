'use strict';

function resizeCanvas(img) {
    const screenWidth = document.body.clientWidth;
    if (screenWidth <= 515) {
        gCanvas.width = 350;
        gCanvas.height = 350;
    } else {
        gCanvas.width = img.width
        gCanvas.height = img.height

    }
}