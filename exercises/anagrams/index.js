// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split('')
    .sort()
    .join('');
    stringB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split('')
    .sort()
    .join('');

    if (stringA === stringB) {
        return true;
    };

    return false;
}

// function anagrams(stringA, stringB) {
    // stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    // stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
//     if (stringA.length !== stringB.length) {
//         return false;
//     }
//     var objA = {};
//     var objB = {};
//     for (char of stringA) {
//          objA[char] = objA[char] + 1 || 1;
//     }
//     for (char of stringB) {
//         objB[char] = objB[char] + 1 || 1;
//     }
//     for (let char in objA) {
//         if (objA[char] !== objB[char]) {
//            return false;
//         }
//     }
//     return true;
// }

module.exports = anagrams;
