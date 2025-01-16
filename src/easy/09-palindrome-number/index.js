// Solution 1: String conversion approach
function isPalindrome(number) {
    const stringNumber = String(number);
    const reversedString = stringNumber.split('').reverse().join('');
    return stringNumber === reversedString;
}

// Solution 2: Mathematical approach (more efficient, no string conversion)
function isPalindromeOptimized(number) {
    if (number < 0 || (number % 10 === 0 && number !== 0)) {
        return false;
    }

    let reversedHalf = 0;
    while (number > reversedHalf) {
        reversedHalf = reversedHalf * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    return number === reversedHalf || number === Math.floor(reversedHalf / 10);
}

module.exports = { isPalindrome, isPalindromeOptimized }
