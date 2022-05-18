// // // let js = 'amazing';
// // // if (js === 'amazing') alert ('JS is fun!');

// // let firstName = `Brandon`
// // let middleName = `Daniel`
// // let lastName = `Martinez`
// // let fullName = firstName+' '+middleName+' '+lastName
// // console.log(fullName)

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun)

// console.log(typeof true)
// console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof Jonas)

let markMass = 78
let markMass2 = 95
let johnMass = 92
let johnMass2 = 85
let markHeight = 1.69
let markHeight2 = 1.88
let johnHeight = 1.95
let johnHeight2 = 1.76

const bmi = (mass, height) => {
    return mass / height**2
}

markBmi = bmi(markMass, markHeight)
johnBmi = bmi(johnMass, johnHeight)

markHigherBmi = markBmi > johnBmi
markHigherBmi2 = bmi(markMass2, markHeight2) > bmi(johnMass2, johnHeight2)
// console.log(markHigherBmi);
// console.log(markHigherBmi2);

// if (markHigherBmi){
//     console.log(`Mark's bmi (${markBmi}) is higher than John's (${johnBmi})!`);
// } 
// else console.log(`Mark's bmi (${markBmi}) is lower than John's (${johnBmi})!`);


// const favorite=prompt("What's your favorite number?")
// console.log(favorite)
// if (Number(favorite) === 22) {
//     console.log("That's mine too!")
// }
// else if (favorite == 21 || favorite == 23){
//     console.log("That's close to mine!")
// }
// else console.log(`Fuck off dude, of course you would like the number ${favorite}`)





