/*for(var i=126; i<537; i++){
    console.log(i);
}*/

 /*function abcd(){
    console.log("ram");
    console.log("shyam");
    console.log("radha");
}*/

//PATTERN

/*start;
while(end){
    change++;
}*/


/*var sam = 1;

while(sam<14){
    console.log(sam);
    sam++;
}*/

 /*for(var i=1; i<11; i++){
    console.log(i);
}
  
var sam=11;
while(sam<21){
    console.log(sam);
    i++;

}*/

//prompts

/*var n1 = prompt("number n1");
var n2 = prompt("number n2");

console.log(Number(n1)+ Number(n2));
*/

 /*prompt(message,default)

  console.log(function({
    
  }))*/
 /* var arr = [1,2,3];
  arr.forEach(function(val, index){
    console.log(index);
  })*/

 /*function abcd(a,b,c){
    console.log(a,b,c);
  }
abcd(5,6,7);*/

/*var num1= +prompt("english")
var num2= +prompt("hindi")
var num3= +prompt("maths")

var total=num1+num2+num3
var avg= total/3

console.log(avg);*/

/*var arr=[10,30,-50,-40,60,40,10]
 var sum = 0;
for(var i=0;i<arr.length;i++){
    sum = sum + arr[i]

    console.log(sum);
}*/

/*var arr = ["mango","apple","banana",]
var sum= ""
for(var i=0;i<arr.length; i++){
    sum = sum + arr[i]

    
}
console.log(sum);*/ 

// tamplate literals
    
/*var user = "ayodhya"
var age = 20
 console.log(`name is ${user} and age is ${age}`);*/

/*var arr = [11,22,33,44,55,66,77,88,99]

for( var a=arr.length-1; a>=0;a--){
    console.log(arr[a]);
}*/


/*var arr = []

for(var a=0; a<20; a++){
    if(a%2==0){
        arr.push(a)
    }
    console.log(arr);
}*/

/*var main = document.querySelector(".main");
 main.addEventListener("mouseleave",function(){
    main.style.background("yellow")
})*/

/*var parent = document.querySelector("#parent");
var h1 = document.querySelector("h1");
inner.innerHTML=`#id`
h1.style.color =("pink")*/

/*var h1 = document.querySelector("h1");
h1.textContent ="download now within 10 second" 
h1.style.color = ("red")*/


/*var cloths =[{
brand:"jara",
color:"yellow",
price:12000
},
{
    brand:"Sparky",
    color:"green",
    price:13000
},
{
    brand:"H&M",
    color:"red",
    price:18000
}]

console.log(cloths [1].brand);*/


/*var lightson = document.querySelector(".lightson");
var lightsoff = document.querySelector(".lightsoff");
var bulb = document.querySelector(".bulb");

lightson.addEventListener("click", function(){
    bulb.classList.add("bg-yellow-500")
});

lightsoff.addEventListener("click", function(){
    bulb.classList.remove("bg-yellow-500")
});
*/


var showmodel = document.querySelector(".showmodel");
var overlays = document.querySelector(".overlays");
var close = document.querySelector(".close");

showmodel.addEventListener("click", function(){
    overlays.classList.remove("hidden");
});

close.addEventListener("click", function(){
    overlays.classList.add("hidden");
})