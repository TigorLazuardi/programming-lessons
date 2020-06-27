/**
 * reverseCase merupakan fungsi yang membalikkan uppercase dan lowercase dari sebuah string.
 *
 * Jangan lupa handle kalau bukan character.
 *
 * Contoh:
 *
 * Ayam Goreng menjadi aYAM gORENG
 *
 * CeBoK menjadi cEbOk
 */
function reverseCase(str: string): string {
    // Modify code below here -------------
    return str
    // ------------------------------------
}

// Test cases - Don't Modify

import assert from 'assert'

function testReverseCase(s: string, want: string, f: (s: string) => string) {
    const got = f(s)
    try {
        assert.equal(
            got,
            want,
            `Expected reverseCase('${s}') to return '${want}', but got '${got}' instead.`
        )
        return ''
    } catch (e) {
        const err = <Error>e
        return err.message
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
