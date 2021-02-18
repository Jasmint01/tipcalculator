var containerEle = document.body.querySelector (".container");

var num1=Number(prompt("What is your total bill?"));

var num2=0.07;

var num3=0.05; 

var sum= (num1*num2)+num1;

var sum2= (sum*num3)+sum;

containerEle.innerHTML="Your final bill is "+sum2;