const reverseString = function(inputString = '') {
    // In JavaScript, since strings are immutable. Convert to array, reverse, then join.
    return inputString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
