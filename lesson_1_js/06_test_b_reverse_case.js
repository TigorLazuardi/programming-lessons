/**
 * reverseCase merupakan fungsi yang membalikkan uppercase dan lowercase dari sebuah string.
 *
 * Jangan lupa di handle kalau bukan character yang bisa di ganti uppercase / lowercase.
 *
 * Contoh:
 *
 * `Ayam Goreng` menjadi `aYAM gORENG`
 *
 * `abc123` menjadi `ABC123`
 *
 * `CeBoK` menjadi `cEbOk`
 */
function reverseCase(str) {
    // Modify code below here -------------
    return ''
    // ------------------------------------
}

// Test cases - Don't Modify

const assert = require('assert')

function testReverseCase(s, want, f) {
    const got = f(s)
    try {
        assert.equal(
            got,
            want,
            `Expected reverseCase('${s}') to return '${want}', but got '${got}' instead.`
        )
        return ''
    } catch (e) {
        return e.message
    }
}

const tests = [
    testReverseCase('Ayam Goreng', 'aYAM gORENG', reverseCase),
    testReverseCase('asdf1234', 'ASDF1234', reverseCase),
    testReverseCase('WoKe', 'wOkE', reverseCase),
    testReverseCase('iii+++', 'III+++', reverseCase),
    testReverseCase('qwerty', 'QWERTY', reverseCase),
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
