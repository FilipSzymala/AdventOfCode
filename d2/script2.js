// part 2
const fs = require('fs')

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const roundsStrats = data.split('\n')
    let pointsTotal = 0
    let playerChoice
    roundsStrats.map((val) => {
        const cols = val.split(' ')
        // 1 column
        // A for Rock, B for Paper, and C for Scissors
        // 2 column
        // X for Lose, Y for Draw, and Z for Win

        switch (cols[1].trim()) {
            // lose
            case "X":
                if (cols[0].trim() == "A") {
                    playerChoice = "Z"
                } else if (cols[0].trim() == "B") {
                    playerChoice = "X"
                } else if (cols[0].trim() == "C") {
                    playerChoice = "Y"
                }
                break;
            // draw
            case "Y":
                if (cols[0].trim() == "A") {
                    playerChoice = "X"
                } else if (cols[0].trim() == "B") {
                    playerChoice = "Y"
                } else if (cols[0].trim() == "C") {
                    playerChoice = "Z"
                }
                pointsTotal += 3
                break;
            // win
            case "Z":
                if (cols[0].trim() == "A") {
                    playerChoice = "Y"
                } else if (cols[0].trim() == "B") {
                    playerChoice = "Z"
                } else if (cols[0].trim() == "C") {
                    playerChoice = "X"
                }
                pointsTotal += 6
                break;
        }
        // points for shape
        if (playerChoice == "X") {
            pointsTotal += 1
        } else if (playerChoice == "Y") {
            pointsTotal += 2
        } else if (playerChoice == "Z"){
            pointsTotal += 3
        }
    })
    console.log(pointsTotal)
})