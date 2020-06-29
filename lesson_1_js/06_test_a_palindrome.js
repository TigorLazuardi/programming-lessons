/**
 * Palindrome merupakan sebuah kata, frase, atau urutan karakter yang dimana kalau dibalik
 * akan tetap kebaca sama. isPalindrome merupakan fungsi yang
 * akan mengembalikan boolean apakah sebuah kata palindrome atau tidak.
 *
 * contoh kata palindrome:
 *
 * `racecar`, karena `racecar` kalau dibalik tetap `racecar`
 *
 * `makan` bukan palindrome karena `nakam` tidak sama dengan `makan`
 *
 * Note:
 * Jangan pakai inbuilt method javascript seperti `reverse()`, `split()`, `join()`
 */
function isPalindrome(str) {
    // Modify here ----------------------------
    return false
    // ----------------------------------------
}

// Test Cases -- Don't modify

const assert = require('assert')

function testIsPalindrome(s, want, f) {
    const got = f(s)
    try {
        assert.strictEqual(
            got,
            want,
            `Expected isPalindrome('${s}') to return '${want}', but got '${got}' instead.`
        )
        return ''
    } catch (e) {
        return e.message
    }
}

const tests = [
    testIsPalindrome('racecar', true, isPalindrome),
    testIsPalindrome('buggy', false, isPalindrome),
    testIsPalindrome('madam', true, isPalindrome),
    testIsPalindrome('abcba', true, isPalindrome),
    testIsPalindrome('qwerty', false, isPalindrome),
    testIsPalindrome('11:11:11', true, isPalindrome),
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
