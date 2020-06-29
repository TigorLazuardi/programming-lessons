// For loops will loop until second condition is true and at each end of loop will do run the third condition
function forLoopUntilNumber(num) {
    console.log('For Loop')
    for (let i = 0; i < num; i++) {
        console.log(i)
    }
}
forLoopUntilNumber(10)

console.log('==================================')
function printsOnlyOdd(num) {
    console.log('Prints only Odd')
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            continue
        }
        console.log(i)
    }
}
printsOnlyOdd(20)

console.log('==================================')
function breaksWhenOdd(num) {
    console.log('Breaks when meeting odd bigger than 2')
    for (let i = 1; i < num; i += 3) {
        console.log(i)
        if (i % 2 === 0) {
            break
        }
    }
}
breaksWhenOdd(20)

console.log('==================================')
// While loops will loop until as long as condition inside while remains true
function whileLoopUntilNumber(num) {
    console.log('While Loop')
    let i = 0
    while (i < num) {
        console.log(i)
        i++
    }
}
whileLoopUntilNumber(10)

console.log('==================================')
// Do-While loops is similar to while loop but will run the loop at least once
function doWhileUntilNumber(num) {
    console.log('Do-While Loop')
}
