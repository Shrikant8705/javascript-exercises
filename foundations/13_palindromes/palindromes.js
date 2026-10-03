const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz012345789"

    const cleanStr = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reverseStr = cleanStr.split('').reverse().join('')

    return cleanStr === reverseStr

};

// Do not edit below this line
module.exports = palindromes;
