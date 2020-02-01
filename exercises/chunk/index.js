// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var result = [];
    var index = 0;

    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }
    return result;
}

// function chunk(array, size) {
//     var result = [];
//     var chunk = [];
//     if (array.length < size) {
//         result.push(array);
//     } else {
//         for (var i = 0; i < array.length; i++) {
//             chunk.push(array[i]);
//             if (chunk.length === size) {
//                 result.push(chunk);
//                 chunk = [];
//             }
//         }
//     }
//     if (chunk.length > 0) {
//         result.push(chunk);
//     }
//     return result;
// }

module.exports = chunk;
