// ==========================
// ELEMENTS
// ==========================

const envelopePage = document.getElementById("envelopePage");
const envelope = document.querySelector(".envelope");
const website = document.getElementById("website");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const stopwatch = document.getElementById("stopwatch");

const slides = document.querySelectorAll(".slide");

// ==========================
// ENVELOPE OPEN
// ==========================

envelope.addEventListener("click", () => {

envelope.classList.add("open");

setTimeout(() => {

envelopePage.style.display = "none";

website.classList.remove("hidden");

music.play();

startTimer();

startSlideShow();

createHearts();

},1000);

});

// ==========================
// MUSIC
// ==========================

let playing = true;

musicBtn.onclick = () => {

if(playing){

music.pause();

musicBtn.innerHTML="🔇";

}else{

music.play();

musicBtn.innerHTML="🎵";

}

playing=!playing;

};

// ==========================
// STOPWATCH
// ==========================

// 27 MAY 2025
// 7:39 PM PKT

const startDate = new Date("2025-05-27T19:39:00+05:00");

function startTimer(){

updateTimer();

setInterval(updateTimer,1000);

}

function updateTimer(){

const now = new Date();

const diff = now-startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor(

(diff%(1000*60*60*24))

/

(1000*60*60)

);

const minutes = Math.floor(

(diff%(1000*60*60))

/

(1000*60)

);

const seconds = Math.floor(

(diff%(1000*60))

/

1000

);

stopwatch.innerHTML=

`${days} Days<br>

${String(hours).padStart(2,"0")} :

${String(minutes).padStart(2,"0")} :

${String(seconds).padStart(2,"0")}`;

}

// ==========================
// SLIDESHOW
// ==========================

let current=0;

function startSlideShow(){

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},4000);

}

// ==========================
// FLOATING HEARTS
// ==========================

function createHearts(){

const container=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=

20+Math.random()*25+"px";

heart.style.animationDuration=

5+Math.random()*5+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},350);

}

// ==========================
// SCROLL ANIMATION
// ==========================

const observer=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(

".message,.timer,.gallery,.sorry,.review"

).forEach(section=>{

section.style.opacity=0;

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});

// ==========================
// AUTO PLAY FIX
// ==========================

document.body.addEventListener(

"click",

()=>{

music.play().catch(()=>{});

},

{once:true}

);
// ==========================
// FIREWORKS
// ==========================

function fireworks(){

for(let i=0;i<40;i++){

const spark=document.createElement("div");

spark.style.position="fixed";
spark.style.left="50%";
spark.style.top="45%";
spark.style.width="8px";
spark.style.height="8px";
spark.style.borderRadius="50%";
spark.style.background=`hsl(${Math.random()*360},100%,70%)`;
spark.style.pointerEvents="none";
spark.style.zIndex="9999";

const x=(Math.random()-0.5)*700;
const y=(Math.random()-0.5)*700;

spark.animate([
{
transform:"translate(0,0) scale(1)",
opacity:1
},
{
transform:`translate(${x}px,${y}px) scale(0)`,
opacity:0
}
],{
duration:1800,
easing:"ease-out"
});

document.body.appendChild(spark);

setTimeout(()=>spark.remove(),1800);

}

}

// Envelope khulne ke baad fireworks
envelope.addEventListener("click",()=>{
setTimeout(fireworks,1200);
});

// ==========================
// FALLING ROSE PETALS
// ==========================

setInterval(()=>{

const petal=document.createElement("div");

petal.innerHTML="🌹";

petal.style.position="fixed";
petal.style.left=Math.random()*100+"vw";
petal.style.top="-40px";
petal.style.fontSize=(20+Math.random()*20)+"px";
petal.style.pointerEvents="none";
petal.style.zIndex="999";

petal.animate
