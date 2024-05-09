const removeFromArray = function(givenArray, ...args) {
    for(let i = 0; i < args.length; i++) {
        givenArray = givenArray.filter(function(item){return item!==args[i];});
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
