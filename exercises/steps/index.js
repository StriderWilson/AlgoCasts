// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    var space = '';

    for (var i = 0; i < n; i++) {
        space += ' ';
    }

    for (var i = 1; i <= n; i++) {
        console.log(createStair(i) + space.slice(i));
    }
}

const createStair = function(n) {
    var stair = '';

    for (var i = 0; i < n; i++) {
        stair += '#';
    }

    return stair;
}

module.exports = steps;
