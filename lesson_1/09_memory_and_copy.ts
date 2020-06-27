// Primitive Type
let foo = 'Hello, world!'
let bar = 20
let aih = false

// Complex Type
let whoa = { name: 'Hello' }
let awoo = [1, 2, 3]

// Primitive type ketika diassign ke variable lain atau jadi parameter function, akan copy valuenya
let a = foo
a = 'Sometimes is sometimes'
console.log('variable str is', str)
console.log('variable a is', a)

// Complex type ketika diassign ke variable lain atau jadi parameter function, akan copy memory addressnya
let omg = whoa
omg.name = 'Why not copy? Because this is how Javascript works'

console.log('variable omg is', omg)
console.log('variable obj is', obj)

/////0000000000000000000000000000000000000

function moreMagic(objParam: any) {
    objParam.game = 'This is changed on function moreMagic'
}

let yoyo = { game: 'yoyo' }
console.log('yoyo before function is:', yoyo)
moreMagic(yoyo)

console.log('yoyo after function is:', yoyo)
