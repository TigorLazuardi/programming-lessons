// Declaring objects
let bundi = {}

// Adding keys
bundi.name = 'Bundi'
bundi.age = 25
bundi.job = 'learning javasacript'

console.log(bundi)

// Accessing object
console.log(bundi.name)
console.log(bundi.age)
console.log(bundi.job)

// Declaring objects in short
let mark = {
    name: 'Mark',
    age: 25,
}

mark.job = 'learning javascript'

console.log(mark)

// Looping over object
for (const key in bundi) {
    console.log(`bundi[${key}] has value: ${bundi[key]}`)
}
