// ==========================
// ELEMENTS
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const stopwatch = document.getElementById("stopwatch");

const slides = document.querySelectorAll(".slide");

const hearts = document.getElementById("hearts");

const gate=document.getElementById("gate");
const website=document.getElementById("website");

const input=document.getElementById("loveInput");

const openBtn=document.getElementById("openBtn");

openBtn.onclick=()=>{

const text=input.value.toLowerCase().trim();

const goodWords=[

"love",

"best",

"cute",

"beautiful",

"handsome",

"happy",

"miss",

"favorite",

"favourite",

"sweet",

"amazing",

"everything"

];

const valid=goodWords.some(word=>text.includes(word));

if(valid){

gate.style.opacity="0";

setTimeout(()=>{

gate.style.display="none";

website.classList.remove("hidden");

website.style.display="block";

music.play().catch(()=>{});

startTimer();

startSlideshow();

startHearts();

fireworks();

typeLetter();

},700);

}else{

alert("🥺 Say something sweet first ❤️");

}

};


// ==========================
// MUSIC BUTTON
// ==========================

let playing = true;

musicBtn.addEventListener("click",()=>{

if(playing){

music.pause();
musicBtn.innerHTML="🔇";

}else{

music.play();
musicBtn.innerHTML="🎵";

}

playing=!playing;

});

// ==========================
// STOPWATCH
// ==========================

const startDate=new Date("2025-05-27T19:39:00+05:00");

function startTimer(){

updateTimer();

setInterval(updateTimer,1000);

}

function updateTimer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/86400000);

const hours=Math.floor((diff%86400000)/3600000);

const minutes=Math.floor((diff%3600000)/60000);

const seconds=Math.floor((diff%60000)/1000);

stopwatch.innerHTML=

`${days} Days<br>

${String(hours).padStart(2,"0")} :
${String(minutes).padStart(2,"0")} :
${String(seconds).padStart(2,"0")}`;

}

// ==========================
// SLIDESHOW
// ==========================

let currentSlide=0;

function startSlideshow(){

setInterval(()=>{

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

slides[currentSlide].classList.add("active");

},4000);

}

// ==========================
// FLOATING HEARTS
// ==========================

function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},300);

}

// ==========================
// TYPEWRITER EFFECT
// ==========================

const letter = document.getElementById("loveLetter");

const originalText = letter.innerHTML;

letter.innerHTML = "";

let i = 0;

function typeLetter(){

    if(i < originalText.length){

        letter.innerHTML += originalText.charAt(i);

        i++;

        setTimeout(typeLetter,35);

    }

}

setTimeout(typeLetter,1800);

// ==========================
// CLICKABLE STARS
// ==========================

const stars=document.querySelectorAll(".star");

stars.forEach((star,index)=>{

star.addEventListener("click",()=>{

stars.forEach((s,i)=>{

s.textContent=i<=index?"⭐":"☆";

});

});

});

// ==========================
// REVIEW BUTTON
// ==========================

const sendReview=document.getElementById("sendReview");

const reviewText=document.getElementById("reviewText");

sendReview.addEventListener("click",()=>{

if(reviewText.value.trim()==""){

alert("Please write something ❤️");

return;

}

alert("Thank You ❤️");

reviewText.value="";

});

// ==========================
// SURPRISE BUTTON
// ==========================

const gift=document.getElementById("giftBtn");

gift.addEventListener("click",()=>{

alert(`❤️

Happy Girlfriend Day ❤️

Thank you for being my happiness.

I promise to stay beside you forever.

I Love You ❤️

`);

});

// ==========================
// FIREWORKS
// ==========================

function fireworks(){

for(let i=0;i<35;i++){

const spark=document.createElement("div");

spark.style.position="fixed";
spark.style.width="8px";
spark.style.height="8px";
spark.style.borderRadius="50%";
spark.style.left="50%";
spark.style.top="45%";
spark.style.background=`hsl(${Math.random()*360},100%,60%)`;
spark.style.pointerEvents="none";
spark.style.zIndex="99999";

document.body.appendChild(spark);

const x=(Math.random()-0.5)*700;
const y=(Math.random()-0.5)*700;

spark.animate([

{transform:"translate(0,0)",opacity:1},

{transform:`translate(${x}px,${y}px)`,opacity:0}

],{

duration:1800,
easing:"ease-out"

});

setTimeout(()=>{

spark.remove();

},1800);

}

}

envelope.addEventListener("click",()=>{

setTimeout(fireworks,1200);

});

// ==========================
// FADE SCROLL
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(70px)";

sec.style.transition="1s";

observer.observe(sec);

});
