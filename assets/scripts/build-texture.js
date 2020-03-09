// Final texture
var ctxTexture = document.getElementById('texture').getContext('2d');

// Assets
var imgShadow = new Image();
imgShadow.src = 'assets/images/airforceio.png';
var imgSwoosh = new Image();
imgSwoosh.src = 'assets/images/swoosh.png';
var imgQuarter = new Image();
imgQuarter.src = 'assets/images/quarter.png';
var imgHeel = new Image();
imgHeel.src = 'assets/images/heel.png';

// Texture init params
var baseColor = 'fff';
var swooshColor = 'fff';
var swooshX = 0;
var swooshY = 0;

drawBase(baseColor);

function buildGraphicTexture() {
    drawBase(baseColor);
    drawSwooshGraphic(swooshX, swooshY);
    drawShadow();
    texture.needsUpdate = true;
}
function buildColorTexture() {
    drawBase(baseColor);
    drawSwooshColor(swooshColor);
    drawShadow();
    texture.needsUpdate = true;
}

function drawBase(hex) {
    ctxTexture.fillStyle = "#" + hex;
    ctxTexture.fillRect(0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

function drawShadow() {
    ctxTexture.drawImage(imgShadow, 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

function drawSwooshGraphic(x, y) {
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

function drawSwooshColor(hex) {
    var canvas = document.createElement('canvas');
    canvas.id = 'tempcanvas';
    canvas.width = 4096;
    canvas.height = 4096;
    var ctxtemp = canvas.getContext('2d');
    ctxtemp.drawImage(imgSwoosh, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
    ctxtemp.globalCompositeOperation = "source-in";
    ctxtemp.fillStyle = "#" + hex;
    ctxtemp.fillRect(0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
    ctxtemp.globalCompositeOperation = "source-over";
    ctxTexture.drawImage(canvas, 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

// Change swoosh color
function changeColorTexture(newHex) {
    swooshColor = newHex;
    buildColorTexture();
}

// Louis Vuitton
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

function reset() {
    swooshX = 0;
    swooshY = 0;
    buildGraphicTexture();
}
function mover(xChange, yChange) {
    swooshX = swooshX + xChange;
    swooshY = swooshY + yChange;
    buildGraphicTexture();
}