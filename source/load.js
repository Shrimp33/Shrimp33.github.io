const max = 2;
function getmax() {
    return max;
}

function inval() {
    alert("Invalid page number, please try pages 1 to " + getmax());
}

function load(index) {
    if (index > 0 && index <= getmax()) {
        window.location.href = "blog" + index + ".html";
    }
    else inval();
}

function draw(canvas, imgsrc, x, y, w, h) {
    var img = new Image();
    img.src = imgsrc;
    img.onload = function () {
        var ctx = document.getElementById(canvas)
        ctx.width = w;
        ctx.height = h;
        ctx.getContext("2d").drawImage(img, x, y, w, h);
    }
}