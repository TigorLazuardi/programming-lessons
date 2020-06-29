/**
 * isOdd merupakan fungsi yang menerima sebuah angka
 * dan mengembalikan sebuah boolean 'true' ketika angka itu ganjil
 * Hint: Pakai modulus
 */
function isOdd(num) {
    // Modify code below -------------------------
    let ok = false

    return ok
    // ------------------------------------
}

// Test Cases -- Don't modify

const assert = require('assert')

function testIsOdd(n, want, f) {
    const got = f(n)
    try {
        assert.strictEqual(
            got,
            want,
            `Expected isOdd(${n}) to return '${want}', but got '${got}' instead.`
        )
        return ''
    } catch (err) {
        return err.message
    }
}

const tests = [
    testIsOdd(11, true, isOdd),
    testIsOdd(12, false, isOdd),
    testIsOdd(2000, false, isOdd),
    testIsOdd(555, true, isOdd),
    testIsOdd(123985, true, isOdd),
]

const failures = tests
    .map((s) => {
        if (s) console.log(s)
        return s
    })
    .filter((y) => y !== '').length
if (!failures) {
    console.log('✔ Tests passed')
}
