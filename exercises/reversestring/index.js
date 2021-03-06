// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}

// function reverse(str) {
//     var reversed = '';
//     for (var i = str.length - 1; i > -1; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

module.exports = reverse;
