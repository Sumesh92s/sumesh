let randomNumber = Math.floor(Math.random() * 100) +1;
let guessinput = document.getElementById("GuessInput");
let guessbtn = document.getElementById("GuessBtn");
let result = document.getElementById("result");
let restart = document.getElementById("reset");

function gameplay(){
    let GuessNum = parseInt(guessinput.value);

if( guessinput.value !== ""){
    if (GuessNum < randomNumber){
        result.textContent = "Your Input Value is too small than number.";
        document.getElementById("result").style.color = "orange";
    }
    else if(GuessNum > randomNumber){
        result.textContent = "Your Input Value is bigger than number.";
        document.getElementById("result").style.color = "yellowgreen";
    }
    else{
        result.textContent = "Correct ! You Win !"
        document.getElementById("result").style.color = "gold";
        guessbtn.disabled = true;
        guessinput.disabled = true;
    }

}
else{
    result.textContent = "Please Enter a Value !";
    document.getElementById("result").style.color = "red";
}
}
    guessbtn.addEventListener("click", gameplay);

function resetgame(){
    location.reload();
}
    restart.addEventListener("click", resetgame);