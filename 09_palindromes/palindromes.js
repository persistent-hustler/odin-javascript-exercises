const palindromes = function (str) {
    let checker='';
    for(i=0; i<str.length; i++){
        let ascii = str.charCodeAt(i);
        if(ascii>=65 && ascii<=90 || ascii>=97 && ascii<=122 || ascii>=48 && ascii<=57) {
            checker += str.charAt(i);
        }
    }
    checker = checker.toLowerCase();
    let reversedChecker = checker.split('').reverse().join('');

    return (checker === reversedChecker);
};

// Do not edit below this line
module.exports = palindromes;
