// part 1
const fs = require('fs')

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const rucksacks = data.split('\n')
    let sumOfPriorities = 0
    // creating dictionary objects for easier access priority values
    const priorities = {}
    for (let i = 97; i < 123; i++) { 
        priorities[String.fromCharCode(i)] = (i-96)
    }
    for (let i = 65; i < 91; i++) { 
        priorities[String.fromCharCode(i)] = (i-38)
    }

    let valLen, firstHalf, secondHalf, alreadyUsedLetters = []
    rucksacks.map(val => {
        valLen = val.trim().length

        firstHalf = val.substring(0, valLen/2)
        secondHalf = val.substring(valLen/2)
        alreadyUsedLetters = []

        firstHalf.split("").map(letter => {
            if (secondHalf.includes(letter) && !alreadyUsedLetters.includes(letter)) {
                sumOfPriorities += priorities[letter]
                alreadyUsedLetters.push(letter)
            }
        })
    })

    console.log(sumOfPriorities);
})