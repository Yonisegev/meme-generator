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

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(function (res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function (err) {
            console.error(err)
        })
}
