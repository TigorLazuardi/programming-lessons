// Function declaration
function abc(s: string) {
    console.log(s)
}

// Function declaration with return type
function setPrefix(prefix: string, text: string): string {
    return prefix + text
}

let www = 'www'
abc(www)

let homer = abc('kurang ampas')
console.log('homer is', homer)

let mamam = setPrefix('Ayam ', 'Goreng')
console.log(mamam)
