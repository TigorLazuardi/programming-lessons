/**
 * isOdd merupakan fungsi yang menerima sebuah angka
 * dan mengembalikan sebuah boolean 'true' ketika angka itu ganjil
 *
 */
function isOdd(num: number): boolean {
    // Modify code below -------------------------
    let ok: boolean = false

    return ok
    // ------------------------------------
}

// Test Cases -- Don't modify

import assert from 'assert'
function testIsOdd(
    n: number,
    want: boolean,
    f: (n: number) => boolean
): string {
    const got = f(n)
    try {
        assert.equal(
            got,
            want,
            `Expected isOdd(${n}) to return '${want}', but got '${got}' instead.`
        )
        return ''
    } catch (err) {
        const e = <Error>err
        return e.message
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
