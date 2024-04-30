const reverseString = function(string) {
    let myArray = string.split("");
    let newArray = [];
    for (let i = (myArray.length - 1); i > -1; i--) {
        newArray.push(myArray[i]);
    }
    const result = newArray.join('')
    return result
};

// Do not edit below this line
module.exports = reverseString;
