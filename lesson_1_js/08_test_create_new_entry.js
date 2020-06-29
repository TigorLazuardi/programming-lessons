/**
 * newEntry merupakan sebuah fungi yang membuat object dari parameter yang diberikan.
 *
 * jadi newEntry('tigor', 26, 'web developer', 'Pondok Indah') akan mereturn sebuah object:
 *
 * { name: 'tigor', age: 26, job: 'web developer', address: 'Pondok Indah' }
 * @param {string} name
 * @param {number} age
 * @param {string} job
 * @param {string} address
 */
function newEntry(name, age, job, address) {
    // Modify code below
    return
    // --------------------
}

// Test Cases -- Don't Modify

const assert = require('assert')

/**
 * @returns {string} string
 */
function testNewEntry(p, want, f) {
    const { name, age, job, address } = p
    const got = f(name, age, job, address)
    const s = JSON.stringify(want, null, 2)
    const r = JSON.stringify(got, null, 2)
    try {
        assert.deepEqual(
            got,
            want,
            `Expected function newEntry('${name}', ${age}, '${job}', '${address}') to return ${s}, but got ${r} instead.`
        )
        return ''
    } catch (e) {
        return e.message
    }
}

const __tigor = {
    name: 'Tigor',
    age: 26,
    job: 'Web Developer',
    address: 'Pondok Indah',
}
const __faza = { name: 'Fakhreza', age: 27, job: 'Developer', address: 'Depok' }

const tests = [
    testNewEntry(__tigor, __tigor, newEntry),
    testNewEntry(__faza, __faza, newEntry),
]

const failures = tests
    .map((s) => {
        if (s) console.log(s)
        return s
    })
    .filter((s) => s !== '').length
if (!failures) {
    console.log('✔ Tests Passed')
}
