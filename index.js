function getComputerChoice() {
    // appears to be working well
    // randomly pick rock, paper, or scissors
    const computerChoice = ["rock", "paper", "scissors"]
    let randomChoice = Math.floor(Math.random() * 3)
    return computerChoice[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    
}