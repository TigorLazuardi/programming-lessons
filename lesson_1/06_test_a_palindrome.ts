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
function isPalindrome(str: string): boolean {
    // -------------- Modify here
    let ok = false

    return ok
    // --------------
}

// Test Cases -- Don't modify

import assert from 'assert'
function testIsPalindrome(
    s: string,
    want: boolean,
    f: (s: string) => boolean
): string {
    const got = f(s)
    try {
        assert.equal(
            got,
            want,
            `Expected isPalindrome('${s}') to return '${want}', but got '${got}' instead.`
        )
        return ''
    } catch (e) {
        const err = <Error>e
        return err.message
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
