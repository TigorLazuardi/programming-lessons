// If Else Statements
function biggerThanTen(num) {
    if (num > 10) {
        return 'brian'
    } else if (num === 10) {
        console.log('in else')
    } else {
        console.log(1000)
    }
    return 'bundi'
}

let isBigger = biggerThanTen(5)

console.log(isBigger)

// function shortHandBiggerThanTen(num) {
//     return num > 10
// }

// console.log(shortHandBiggerThanTen(40))

// // Switch Case statement
// function getNumberofLegsFromTypeAnimal(animal) {
//     let legs
//     switch (animal) {
//         case 'dog':
//             legs = 'four'
//             break
//         case 'cat':
//             legs = 'four'
//             break
//         case 'bird':
//             legs = 'two'
//             break
//         default:
//             legs = 'Unknown Animal'
//             break
//     }
//     return legs
// }

// console.log(getNumberofLegsFromTypeAnimal('dog'))
// console.log(getNumberofLegsFromTypeAnimal('simpanse'))
