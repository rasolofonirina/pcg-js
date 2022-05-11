const { generateRandomNumber, compare } = require('./src/functions')

const pinCode = []

// Generate PIN Code
function generateCode() {
    let firstNumber = generateRandomNumber()
    pinCode.push(firstNumber)

    let secondNumber = generateRandomNumber()
    secondNumber = compare(firstNumber, secondNumber)
    pinCode.push(secondNumber)

    let thirdNumber = generateRandomNumber()
    thirdNumber = compare(secondNumber, thirdNumber)
    pinCode.push(thirdNumber)

    let fourthNumber = generateRandomNumber()
    fourthNumber = compare(thirdNumber, fourthNumber)
    pinCode.push(fourthNumber)

    return pinCode.join('')
}

module.exports = generateCode
