const convertToCelsius = function(degree_f) {
  return Math.round((degree_f -32) * 5/9 * 10) / 10;
  
};

const convertToFahrenheit = function(degree_c) {
  return Math.round((degree_c * 9 /5 +32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
