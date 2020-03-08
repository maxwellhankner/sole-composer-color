var ctxTexture = document.getElementById('texture').getContext('2d');

var imgShadow = new Image();
imgShadow.src = 'assets/images/airforceio.png';
var imgSwoosh = new Image();
imgSwoosh.src = 'assets/images/swoosh.png';
var imgQuarter = new Image();
imgQuarter.src = 'assets/images/quarter.png';
var imgHeel = new Image();
imgHeel.src = 'assets/images/heel.png';



var louiscanvas = document.createElement('canvas')
louiscanvas.id = 'louiscanvas';
louiscanvas.width = 4096;
louiscanvas.height = 4096;
var ctxlouis = louiscanvas.getContext('2d');
var imgLouis = new Image();

imgLouis.src = 'assets/images/louisvuitton.jpg';
imgLouis.onload = function() {
    ctxlouis.rotate(90 * Math.PI / 180);
    ctxlouis.drawImage(imgLouis, 0, -4096, ctxlouis.canvas.width, ctxlouis.canvas.height);
};

var y = 0;
var x = 0;

function reset() {
    x = 0;
    y = 0;
    buildTexture();
}
function mover(xChange, yChange) {
    x = x + xChange;
    y = y + yChange;
    buildTexture();
}


bodyHex = 'fff';
quarterHex = 'fff';
heelHex = 'fff';

drawBody(bodyHex);

function buildTexture() {
    drawBody(bodyHex);
    drawQuarter(quarterHex);
    drawHeel(heelHex);
    drawSwoosh(x, y);
    drawShadow();
    texture.needsUpdate = true;
}

function drawBody(hex) {
    ctxTexture.fillStyle = "#" + hex;
    ctxTexture.fillRect(0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

function drawShadow() {
    ctxTexture.drawImage(imgShadow, 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

function drawSwoosh(x, y) {
    var canvas = document.createElement('canvas');
    canvas.id = 'tempcanvas';
    canvas.width = 4096;
    canvas.height = 4096;
    var ctxtemp = canvas.getContext('2d');
    ctxtemp.drawImage(imgSwoosh, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
    ctxtemp.globalCompositeOperation = "source-in";
    ctxtemp.drawImage(louiscanvas, 1000+x, 1500+y, ctxlouis.canvas.width/2, ctxlouis.canvas.height/2);
    ctxtemp.globalCompositeOperation = "source-over";
    ctxTexture.drawImage(canvas, 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

function drawQuarter(hex) {
    var canvas = document.createElement('canvas');
    canvas.id = 'tempcanvas';
    canvas.width = 4096;
    canvas.height = 4096;
    var ctxtemp = canvas.getContext('2d');
    ctxtemp.drawImage(imgQuarter, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
    ctxtemp.globalCompositeOperation = "source-in";
    ctxtemp.fillStyle = "#" + hex;
    ctxtemp.fillRect(0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
    ctxtemp.globalCompositeOperation = "source-over";
    ctxTexture.drawImage(canvas, 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

function drawHeel(hex) {
    var canvas = document.createElement('canvas');
    canvas.id = 'tempcanvas';
    canvas.width = 4096;
    canvas.height = 4096;
    var ctxtemp = canvas.getContext('2d');
    ctxtemp.drawImage(imgHeel, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
    ctxtemp.globalCompositeOperation = "source-in";
    ctxtemp.fillStyle = "#" + hex;
    ctxtemp.fillRect(0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
    ctxtemp.globalCompositeOperation = "source-over";
    ctxTexture.drawImage(canvas, 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

function changeSelectionTexture(hex) {
    switch (selectionIndex){
        case 0 : bodyHex = hex;
        break;
        case 1 : swooshHex = hex;
        break;
        case 2 : heelHex = hex;
        break;
        case 3 : quarterHex = hex;
        break;
    }
    buildTexture();
}