// If Else Statements
function biggerThanTen(num: number): boolean {
    if (num > 10) {
        return true
    } else {
        return false
    }
}

console.log(biggerThanTen(30))

function shortHandBiggerThanTen(num: number): boolean {
    return num > 10
}

console.log(shortHandBiggerThanTen(40))

// Switch Case statement
function getNumberofLegsFromTypeAnimal(animal: string): string {
    let legs: string
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
