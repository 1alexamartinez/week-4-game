var randomNumber = 0;
var gemNumber = 0;
var wins = 0;
var losses = 0;

function reset(){
    gemNumber = Math.floor(Math.random() * 120 + 19) ;
    $("#numToMatch").html(gemNumber);
                     
    randomNumber = 0;
    gemNumber = 0;   
}

var logic = function(){
    if (randomNumber === gemNumber ) {
    console.log("You Win!!");
    alert("You win!")
    }
    else if(randomNumber > gemNumber){
        // location.reload();   
        alert("You lose!")
        console.log("You Lose!!");
    }   
    
}
        
function game(){

pinkGem = Math.floor(Math.random() * 12) + 1;
redGem =  Math.floor(Math.random() * 12) + 1;
greenGem =  Math.floor(Math.random() * 12) + 1;
blueGem =  Math.floor(Math.random() * 12) + 1;                  

console.log(randomNumber);

    gemNumber = Math.floor(Math.random() * 120 + 19) ;
    $("#numToMatch").html(gemNumber);

    $('#pink').on('click', function(){
    randomNumber += pinkGem;

     $('#userscore-count').html(randomNumber);

     logic();   
    });

    $('#red').on('click', function(){
        randomNumber += redGem;
     $('#userscore-count').html(randomNumber);
      logic();  
      console.log(redGem);
    });
    $('#green').on('click', function(){
        randomNumber += greenGem;
     $('#userscore-count').html(randomNumber);
     logic();   

    });
    $('#blue').on('click', function(){
        var total = randomNumber += blueGem;
     $('#userscore-count').html(total);
     logic();   
    });
    
}

var html = "<p>Losses: " + losses + "</p>" + "<p>Wins: " + wins + "</p>";

$('#results').append(html);


game();


	
