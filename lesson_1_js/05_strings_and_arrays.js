let hello = 'hello'
console.log(hello)
console.log('2nd Index of string hello is', hello[1]) // prints 'e'

const arrNumber = [1, 2, 3]

console.log(arrNumber)

// accessing arrNumber
console.log('2nd index is', arrNumber[1])

console.log('Assigns new value')
arrNumber[3] = 6

console.log(arrNumber)

console.log('change value in array')
arrNumber[2] = 10

console.log(arrNumber)

console.log('push add items to end of array')
arrNumber.push(20)
arrNumber.push(100)

console.log(arrNumber)

console.log(
    'pop deletes the last item in the array and returns the deleted item'
)
arrNumber.pop()
console.log(arrNumber)

let w = arrNumber.pop()
console.log('w is', w)
console.log('arrNumber after pop w is', arrNumber)
