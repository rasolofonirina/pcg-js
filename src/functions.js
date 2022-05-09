// Generate Random Number
function generateRandomNumber() {
    return Math.floor(Math.random() * 10)
}

// Compare two numbers
function compare(a, b) {
    return (a === b) ? ((b === 9) ? 0 : (b + 1)) : b
}

module.exports = { generateRandomNumber, compare }