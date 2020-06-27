// If Else Statements
function biggerThanTen(num) {
    if (num > 10) {
        return true
    } else {
        return false
    }
}

let isBigger = biggerThanTen(30)

console.log(isBigger)

function shortHandBiggerThanTen(num) {
    return num > 10
}

console.log(shortHandBiggerThanTen(40))

// Switch Case statement
function getNumberofLegsFromTypeAnimal(animal) {
    let legs
    switch (animal) {
        case 'dog':
            legs = 'four'
            break
        case 'cat':
            legs = 'four'
            break
        case 'bird':
            legs = 'two'
            break
        default:
            legs = 'Unknown Animal'
            break
    }
    return legs
}

console.log(getNumberofLegsFromTypeAnimal('dog'))
console.log(getNumberofLegsFromTypeAnimal('simpanse'))
