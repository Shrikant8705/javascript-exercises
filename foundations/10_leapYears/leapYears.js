const leapYears = function (leapYr) {
    if (leapYr % 400 === 0) {
        return true
    } else if (leapYr % 100 === 0) {
        return false
    } else if (leapYr % 4 === 0) {
        return true
    } else {
        return false
    }
};
// Fuck yeah
// Do not edit below this line
module.exports = leapYears;
