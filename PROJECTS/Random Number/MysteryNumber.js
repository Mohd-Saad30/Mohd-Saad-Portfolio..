let random_value=parseInt(Math.random()*100)
let user_input=document.querySelector('#Number');
const button = document.querySelector('#submit')
let guessNumber=0;
button.addEventListener('click',function(e){
// e.preventDefault();
++guessNumber;

let playGame=true;


last=document.querySelector('#last');
let number=parseInt(user_input.value);
let GUESSED=document.querySelector('#hi');


let remaining_slot=document.querySelector('#rem')

if( guessNumber<=5){
   
   
    if(number===random_value){
    last.innerHTML=`YOU HAVE GUESSED RIGHT`;

    GameEnd();
}
 else if (number>100 || number<1){
    last.innerHTML=`INPUT  NUMBER BETWEEN 1 TO 100`;
   
}
else if(number>random_value){
   
    GUESSED.innerHTML+=`${number} `
    remaining_slot.innerHTML=5-guessNumber;
    
    last.innerHTML=`Your Number is High`;
}
else if(number<random_value){
    
    GUESSED.innerHTML+=`${number} `
    remaining_slot.innerHTML=5-guessNumber;
    last.innerHTML=`Your Number is Low`;
}
else{
    last.innerHTML=`TRY AGAIN`;
    remaining_slot.innerHTML=5-guessNumber;
}
}
else{
    let value=document.querySelector('#value');
    value.innerHTML=`Number is ${random_value}`;
    GameEnd();
};
})


function GameEnd(){
   playGame=false;
   user_input.value='';
   user_input.setAttribute("disabled","");

   let p=document.createElement('p');
   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
   document.querySelector('#result').appendChild(p)
   p.setAttribute("disabled","");
  button.setAttribute("disabled","")
   newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    location.reload();
})
}