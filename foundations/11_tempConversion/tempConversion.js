const convertToCelsius = function (fahrenheit) {
  const resultToCelsius = (fahrenheit - 32) * 5 / 9
  return Math.round(resultToCelsius * 10) / 10;

};

const convertToFahrenheit = function (celsius) {
  const resultToFahrenheit = (celsius * 9 / 5) + 32
  return Math.round(resultToFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
