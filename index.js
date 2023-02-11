let number;
let input;
let guesses=0;
number=Math.floor(Math.random()*100+1);
document.getElementById("Do").onclick= function(){
    input=document.getElementById("text").value;
    if (number==input){
        document.getElementById("Info").innerHTML="Correct!!!";
        document.getElementById("Guesses").innerHTML="You did it in "+guesses+" guesses!";
    }
    else if (number>input){
        document.getElementById("Info").innerHTML="Too low!!!";
        guesses++
    }
    else if (number<input){
        document.getElementById("Info").innerHTML="Too high!!!";
        guesses++
    }
    else{
        document.getElementById("Info").innerHTML="Not a number!!!";
        guesses++
    }
};