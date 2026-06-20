// ---------------------------
// PAGE NAVIGATION
// ---------------------------

function openGift(){

document.getElementById("page1").style.display="none";
document.getElementById("page2").style.display="block";

}

function showCake(){

document.getElementById("page2").style.display="none";
document.getElementById("page3").style.display="block";

}

function showPhotos(){

document.getElementById("page4").style.display="none";
document.getElementById("page5").style.display="block";

}

function showLetter(){

document.getElementById("page3").style.display="none";
document.getElementById("page4").style.display="block";

}

// ---------------------------
// CAKE COUNTDOWN
// ---------------------------

function startCandle(){

let count=3;

document.getElementById("countdown").innerHTML=count;

let timer=setInterval(function(){

count--;

if(count>0){

document.getElementById("countdown").innerHTML=count;

}

else{

clearInterval(timer);

document.getElementById("cake").innerHTML="🎂";

document.getElementById("countdown").innerHTML="✨ Wish Completed ✨";

setTimeout(function(){

showLetter();

},2000);

}

},1000);

}

// ---------------------------
// PHOTO SLIDESHOW
// ---------------------------

let photos=[
"photos/photo1.jpg",
"photos/photo2.jpg",
"photos/photo3.jpg"
];

let index=0;

setInterval(function(){

let slide=document.getElementById("slideshow");

if(slide){

index++;

if(index>=photos.length){

index=0;

}

slide.src=photos[index];

}

},3000);


// Memories Page Slideshow

let memoryIndex=0;

setInterval(function(){

let memory=document.getElementById("memoryPhoto");

if(memory){

memoryIndex++;

if(memoryIndex>=photos.length){

memoryIndex=0;

}

memory.src=photos[memoryIndex];

}

},3000);


// ---------------------------
// FLOATING HEARTS
// ---------------------------

setInterval(function(){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},6000);

},400);


// ---------------------------
// BALLOONS
// ---------------------------

setInterval(function(){

let balloon=document.createElement("div");

balloon.innerHTML="🎈";

balloon.className="balloon";

balloon.style.left=Math.random()*100+"vw";

document.body.appendChild(balloon);

setTimeout(function(){

balloon.remove();

},10000);

},1800);