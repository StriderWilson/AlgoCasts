// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charObj = {};
    let result = str[0];
    for (let char of str) {
        if (!charObj[char]) {
            charObj[char] = 1;
        } else {
            charObj[char] += 1;
        }
    }
    for (var key in charObj) {
        if (charObj[key] > charObj[result]) {
            result = key;
        }
    }
    return result
}

module.exports = maxChar;
