
var audio = document.querySelector(".audio");
var pause = document.querySelector(".pause");
var play = document.querySelector(".play");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var button = document.querySelector(".button")



 play.addEventListener("click",function(){
    audio.play();
    pause.classList.remove("hidden");
    play.classList.add("hidden");
 });

 pause.addEventListener("click",function(){
    audio.pause();
    play.classList.remove("hidden");
    pause.classList.add("hidden");
 });

 left.addEventListener("click",function(){
   audio.pause();
   audio.currentTime = 0;
   audio.play();

 });

 right.addEventListener("click",function(){
   audio.pause();
   audio.currentTime = 0;
   audio.play();
 });
