const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return 'ERROR';
    }

    // code to make num1 the smaller number among the two
    if (num1 > num2) {
        let temp;
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let sum = 0;

    for (let num = num1; num <= num2; num++) {
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
