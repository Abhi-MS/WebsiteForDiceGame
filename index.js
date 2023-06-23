function randomNumGen()
{
    var radomNum = Math.random();
    radomNum=Math.floor(radomNum*6)+1;
    return radomNum;
}
var randomNum1=randomNumGen();
var randomNum2=randomNumGen();
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNum1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNum2+".png");
if (randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 wins !";
}
else if(randomNum2>randomNum1)
{
    document.querySelector("h1").innerHTML="Player 2 wins ! 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}