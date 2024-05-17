const fibonacci = function(position) {
    position = parseInt(position);
    if(position<0 || typeof position !== 'number') return 'OOPS';
    if(position===0) return 0;
    if(position===1 || position===2) return 1;

    return fibonacci(position - 1) + fibonacci(position-2);
};

// Do not edit below this line
module.exports = fibonacci;
