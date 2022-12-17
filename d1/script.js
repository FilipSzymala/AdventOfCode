const fs = require('fs')

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const allElves = data.split("\n")
    let elvesCals = []
    let x = 0

    allElves.map((val => {
        if (Number(val) == 0) {
            x++
        } else if (elvesCals[x] == undefined) {
            elvesCals[x] = Number(val)
        } else {
            elvesCals[x] += Number(val)
        }
    }))
    // d1
    console.log(`d1: ${Math.max(...elvesCals)}`);

    // d2
    threeHighestCalories = [Math.max(...elvesCals)]
    
    // find second highest number in elvesCals by filtering array with condition (not same as 1 element of three threeHighestCalories)
    threeHighestCalories[1] = Math.max(...elvesCals.filter(val => val != threeHighestCalories[0]))
    // same as first by with added condition to avoid redundancies
    threeHighestCalories[2] = Math.max(...elvesCals.filter(val => val != threeHighestCalories[0] && val != threeHighestCalories[1]));
    console.log(`d2: ${threeHighestCalories[0] + threeHighestCalories[1] + threeHighestCalories[2]}`);
})