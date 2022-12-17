// part 2
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

    for (let i = 0; i < rucksacks.length; i += 3) {
        let matchingItem
        for (item of rucksacks[i]) {
            if (rucksacks[i+1].includes(item) && rucksacks[i+2].includes(item)) {
                matchingItem = item
                break
            }
        }
        sumOfPriorities += priorities[matchingItem]
    }
    
    console.log(sumOfPriorities);
})