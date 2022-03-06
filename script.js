var radius = 240; // bow big of the radius
 var autoRotate =true; // auto rotate or not

var rotateSpeed =60; // unit: seconds/360 degrees

var imgWidth = 220; // width of images (unit: px)

var imgHeight = 270; // height of images (unit: px) 
var bgMusicURL= 'https://www.youtube.com/watch?v=EJBL5LIwGuI&ab_channel=MoonVibes';

var bgMusicControls =true; 
setTimeout(init, 1000);

var odrag =document.getElementById('drag-container');

var ospin = document.getElementById('spin-container');

var aImg= ospin.getElementsByTagName('img'); 
var aVid = ospin.getElementsByTagName('video');

var aEle = [...aImg, ...aVid]; // combine 2 array!

 // Size of images

ospin.style.width = imgWidth +"px"; 
ospin.style.height= imgHeight + "px";

// Size of ground depend on radius

var ground = document.getElementById('ground');
ground.style.width= radius* 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime){
 for (var i=0; i< aEle.length; i++) {
aEle[i].style.transform = "rotateY(" + (i*(360 / aEle.length)) + "deg) translateZ("+ radius + "px)";
aEle[i].style.transition = "transform 1s";
aEle[i].style.transitionDelay = delayTime || (aEle.length -i)/4 + "s";
 }
}
function ApplyTransform(obj){
    // constrain the angle of camera (bet 0 and 100)
    if(tY> 180) tY = 180;
    if(tY<0) tY = 0;

// Apply the angle

obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {

ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX= 0,
desY = 0,
tX = 0,
tY = 10;

//auto spin

if (autoRotate) {
var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
 ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// add background music 
if (bgMusicURL) {

document.getElementById('music-container').innerHTML += `
 <audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>
 <p>If you are reading this, it is because your browser does not support audio element.</p>
 </audio>
 `;
}