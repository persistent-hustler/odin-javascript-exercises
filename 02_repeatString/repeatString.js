const repeatString = function(message, times) {
    if(times < 0) return 'ERROR';
    let output = '';
    for (i = 1; i <= times ; i++) {
        output += message;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
