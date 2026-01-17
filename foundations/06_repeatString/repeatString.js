const repeatString = function(string, num) {
    for (let i = 0; i < num; i++) {
        if (num === 0 || num === 1) {
            return string;
        }
        if (i >= 1) {
            string = string + string;
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
