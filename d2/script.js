// part 1
const fs = require('fs')

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const roundsStrats = data.split('\n')
    let pointsTotal = 0
    console.log(roundsStrats);
    roundsStrats.map((val) => {
        const cols = val.split(' ')
        // 1 column
        // A for Rock, B for Paper, and C for Scissors
        // 2 column
        // X for Rock, Y for Paper, and Z for Scissors

        // points for shape
        if (cols[1].trim() == "X") {
            pointsTotal += 1
        } else if (cols[1].trim() == "Y") {
            pointsTotal += 2
        } else if (cols[1].trim() == "Z"){
            pointsTotal += 3
        }

        // ties points 
        if (cols[0].trim() == "A" && cols[1].trim() == "X" || cols[0].trim() == "B" && cols[1].trim() == "Y" || cols[0].trim() == "C" && cols[1].trim() == "Z") {
            pointsTotal += 3
        } 
        // winning points
        else if (cols[1].trim() == "Y" && cols[0].trim() == "A" || cols[1].trim() == "Z" && cols[0].trim() == "B" || cols[1].trim() == "X" && cols[0].trim() == "C") {
            pointsTotal += 6
        }
    })

    console.log(pointsTotal)
})