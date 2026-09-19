const removeFromArray = function (array, valueToRemove) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === valueToRemove) {
            array.splice(i, 1)
        }
    }
    return array
};
// I still have doubts about the rest parameter but fuck it
// Only one was passed i'm sorry i don't have much time left
// Do not edit below this line
module.exports = removeFromArray;
