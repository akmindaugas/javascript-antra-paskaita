// console.log('veikia')

//salygos

// console.log(10 == 10) //true

// console.log('vienas'=='vienas')

// console.log('10'==10) //true
// console.log('10'==10) //true

// console.log(10 === 10) //true

// console.log('vienas'==='vienas') //true

// console.log('10'===10) //false
// console.log(10>=10) //true
// console.log(10!=10) //false

// console.log(true) //true
// console.log(!true) //false
// console.log(!!true) //true

// console.log()

// if, else if, else

// let light = 'green'
// console.log(light)

// console.log(light=== 'green')

// if(light === 'green') {
//     console.log('galima eiti')//true
// }
// else if(light === 'yellow'){
//     console.log('pasiruo6ti')//false
// }

// else if(light==='red'){
//     console.log('stop')
// }
// else{
//     console.log('sugedo :(')
// }

// let word= 'sun'
// console.log(word)
// console.log(word[0])
// console.log(word[1])
// console.log(word[2])

// let firstLetter =word[0]

// if(firstLetter==='s') {
// console.log('zodis prasideda raide s')
// }
//  else{
//     console.log('zodis neprasideda raide s')}

   

//zodis: Tips

//     let word = 'haus'

// let firstletter = word[0]

// let thirdLetter = word[2]

// console.log(firstletter)
// console.log(thirdLetter)

// if (firstletter==='t' && thirdLetter==='p'){
// console.log(`zodzio ${word} pirma raide yra 't' ir trecia raide yra 'p'`)


// }else{console.log(`zodzio ${word} pirma raide nera 't' arba trecia raide nera 'p'`)
// }

// //OR operator - ||

// if(firstletter==='t' || thirdLetter==='p'){
// console.log(`zodzio ${word} pirma raide yra 't' arba trecia raide yra 'p'`)

// }
// else{console.log(`zodzio ${word} pirma raide nera 't' ir trecia raide nera 'p'`)
// }

let age=16

// if (age > 17){
//     console.log('pirkti gali')
// }else{
//     console.log('pirkti negalima')
// }

// if(age <=17){
//     console.log('pirkti negali')
// }else{
//     console.log('pirkti gali')
// }

// if(age >=18){
//     console.log('pirkti gali')
// }else{
//     console.log('pirkti negali')
// }

//iki 15 pirkti negalima
//16-17 su tevu sutikimu
//18+ pirkti galima

// if (age>17){
//     console.log('pirkti galima')
// }else if (age>15 && age<=17){
//     console.log('pirkti su tevu sutikimu')
// }
// else{
//     console.log('pirkti negalima')
// }

//nesting

// if(age>17){
//     console.log('pirkti gali')
// }else{
//     if (age>15){
//         console.log('pirkti gali su tevu sutikimu')
//     }else{
//     console.log('pirkti negali')}
// }

let num1=25
let num2=5

console.log(num1)
console.log(num2)

console.log(num1 % num2)
console.log(num1 % num2===0)

// if (num1 % num2===0){
// console.log(`skaicius ${num1} dalinasi is ${num2}`)
// }else{
//     console.log(`skaicius ${num1} nesidalina is ${num2}`)
// }

let numIsDivideable = (num1 % num2===0)

if (numIsDivideable){
console.log(`skaicius ${num1} dalinasi is ${num2}`)
}else{
    console.log(`skaicius ${num1} nesidalina is ${num2}`)
}

