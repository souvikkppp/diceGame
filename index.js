// frist dice
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);//angela's way
// second dice
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", randomImage2);//my way
// who win statement
if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
} else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
} else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 🚩wins";
}
