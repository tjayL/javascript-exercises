const removeFromArray = function(arr, num) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != num) {
            array.push(arr[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
