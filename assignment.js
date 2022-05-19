////////////////////////////////////////////////////
/* JAVASCRIPT FUNDAMENTALS PART 1 */
////////////////////////////////////////////////////


let country = 'La isla del Chepe'
const continent = 'Norteamerica'
let population = 6942069

// console.log(country)
// console.log(continent)
// console.log(population)

const isIsland = true
let language = 'Spanish'

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)

// console.log(population/2)
// console.log(population+=1)

let finlandPop = 6000000

// console.log(population > finlandPop)

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`

// console.log(description)

avgPop = 33000000

// if (population > avgPop){
//     console.log(`${country}'s population is above average`)
// } else console.log(`${country}'s population is ${avgPop-population} below average`)

// console.log('9' - '5') 
// console.log('19' - '13' + '17')
// console.log('19' - '13' + 17)
// console.log('123' < 57)
// console.log(5 + 6 + '4' + 9 - 4 - 2)

// PREDICTIONS
// 4
// 617
// 23
// wat
// 117 OR 18

// let numNeighbors = prompt(`How many neighbor countries does ${country} have?`)

// if (Number(numNeighbors) === 1){
//     console.log(`*ONLY* ONE BORDER?!`)
// }
// else if (numNeighbors > 1){
//     console.log(`*MORE* THAN ONE BORDER?!`)
// }
// else console.log(`YOU'RE ON AN *ISLAND*?!`)

// if (language.toLowerCase() == 'english' && population < 50000000 && isIsland == false) {
//     console.log(`You should live in ${country}!`)
// }
// else console.log(`${country} might not be for you.`)

////////////////////////////////////////////////////
/* JAVASCRIPT FUNDAMENTALS PART 2 */
////////////////////////////////////////////////////

// FUNCTIONS

function describeCountry (country, population, capitalCity){
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const america = describeCountry('USA', '350 million', 'Washington D.C');
const arizona = describeCountry('Arizona', '7 million', 'Phoenix');
const chepe = describeCountry(country, population, 'Ciudad Chepe')

// console.log(america)
// console.log(arizona)
// console.log(chepe)

// FUNCTION DECLARATIONS VS EXPRESSIONS

function percentageOfWorld1(){
    return population / 7900 * 100
}

const percentageOfWorld2 = function(population){
    return population / 7900 * 100
}

// ARROW FUNCTIONS

const percentageOfWorld3 = population => population / 790000

// FUNCTIONS CALLING OTHER FUNCTIONS

const describePopulation = (country, population) => {
    const percent = percentageOfWorld3(population)
    return `${country} has ${population} people, which is about ${percent}% of the world`
}

// console.log(describePopulation(country, population))







