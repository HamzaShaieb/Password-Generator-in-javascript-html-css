const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const form = document.getElementById("passwordGeneratorForm")
const characterAmountNumberElment = document.getElementById("characterAmountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElment = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")
const password_diplay = document.getElementById("password-diplay")

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(65, 90)
const SYNBOL_CHAR_CODES = arrayFromLowToHigh(33 ,47).concat(arrayFromLowToHigh(58 ,64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123,126))


characterAmountRange.addEventListener("input",syncCharacter)
characterAmountNumber.addEventListener("input",syncCharacter)

function syncCharacter(e) {
    const value = e.target.value
    characterAmountRange .value = value
    characterAmountNumber .value = value
}

form.addEventListener("submit",e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    includeNumbers = includeSymbolsElement.checked
    includeUpercase = includeUppercaseElement.checked
    includesymboles = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUpercase,includeNumbers,includesymboles)
    password_diplay.innerText =password
})

function generatePassword(characterAmount , includeNumbers ,includesymboles ,includeUpercase) {
    let charCode = LOWERCASE_CHAR_CODES
    if (includeUpercase) charCode = charCode.concat(UPPERCASE_CHAR_CODES)
    if (includesymboles) charCode = charCode.concat(SYNBOL_CHAR_CODES)
    if (includeNumbers)  charCode = charCode.concat(NUMBERS_CHAR_CODES)
    const passwordCharacters = []
    for (let i =0 ; i < characterAmount ; i++ ) {
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low ,high) {
    const array  = []
    for (let i = low ; i<= high ; i++) {
        array.push(i)
    }
    return(array)
}
