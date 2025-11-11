let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user_score");
let compScorePara = document.querySelector("#computer_score");
const choices = document.querySelectorAll(".choice");


// selecting computer choice
const comp_choice = () => {
    opt = ['rock','paper','scissors']
    randind = Math.floor(Math.random() * 3 );
    return opt[randind]
}


// taking user choice rock, paper, or scissors
choices.forEach( (choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const ch_id = choice.getAttribute("id");
        play(ch_id,comp_choice())
    })
});


// draw function 
const draw = () => {
    console.log("draw game");
    msg.innerText = "MATCH WAS DRAW...";
}

// displaying winner 
const display_winner = (userWin) => {
    if (userWin) {
        console.log("you win!");
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = "YOU WON! 🥹 ";
    } else {
        console.log("you lost, try again");
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText = "YOU LOST, TRY AGAIN ";
    }
}


// a function where we will compare user's choice with a random generated computer's choice 
const play = (user_choice,comp_choice) => {
    console.log("user's choice", user_choice);
    console.log("computer's choice", comp_choice);
    if (user_choice === comp_choice){
        draw()
    } else {
        let userWin = true;
        if (user_choice === "rock") {
            userWin = comp_choice === "paper" ? false : true;
        } else if ( user_choice === "paper") {
            userWin = comp_choice === "scissors" ? false : true;
        } else {
            userWin = comp_choice === "rock" ? false : true;
        }
        display_winner(userWin)
    }
}




