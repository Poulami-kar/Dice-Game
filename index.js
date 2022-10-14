//left side dice

var RandomNumber = Math.floor(Math.random()*6)+1;//1-6
var randomImgsource = "images/dice"+RandomNumber+".png";//images/dice1.png-images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src",randomImgsource);

//right side dice
var RandomNumber2 = Math.floor(Math.random()*6)+1;
var randomImgsource2 = "images/dice"+RandomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgsource2);

if(RandomNumber>RandomNumber2){
    document.querySelector("h1").innerHTML=" 🚩Player1 Win";
}
else if (RandomNumber<RandomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 Win 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!"
}