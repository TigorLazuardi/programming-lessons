let str: string = 'Hello, world!'
let num: number = 20
let bool: boolean = false // or true
let obj: object = { name: 'Hello' }
let arr: any[] = [1, 2, 3]

// Operators
let m = 1
console.log('Current value of m is', m)

m = m + 1
console.log('Current value of m + 1 is', m)

m = m - 1
console.log('Current value of m - 1 is', m)

m = m + (2 * 3) / 2
console.log('Current value of m + (2 * 3) / 2 is', m)

// Modulus returns the remaining of a division
m = 100
m = m % 3
console.log('Current value of m is', m)

// Shorthand
let n = 0
console.log('n is', n)
console.log('n++ is', n++)
console.log('n-- is', n--)

// The '+' sign is speacial in programming
// '+' can mean addition when both sides are numbers or
// concatenate when both sides are string
console.log(5 + 10)
console.log('Ok' + ' is an Ok!')
