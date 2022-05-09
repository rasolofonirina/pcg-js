const { generateRandomNumber, compare } = require('./src/functions')

const pinCode = []

// Generate PIN Code
function generateCode() {
    let num1 = generateRandomNumber()
    pinCode.push(num1)

    let num2 = generateRandomNumber()
    num2 = compare(num1, num2)
    pinCode.push(num2)

    let num3 = generateRandomNumber()
    num3 = compare(num2, num3)
    pinCode.push(num3)

    let num4 = generateRandomNumber()
    num4 = compare(num3, num4)
    pinCode.push(num4)

    return pinCode.join('')
}

module.exports = generateCode
