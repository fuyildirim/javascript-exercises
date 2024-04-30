const removeFromArray = function(array, ...remove) {
    /*
    for (let i = remove.length; i > 0; i--) {
        array.splice(array.indexOf(remove[i-1]), 1)
    }
    return array;
    */
    const result = array.filter(x => !remove.includes(x))
    console.log(result)
    return difference;
};

removeFromArray([1, 3, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;



/* ## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
*/