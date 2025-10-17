const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./converter');

function testConversion() {
  let allPassed = true;

  if (celsiusToFahrenheit(0) === 32) {
    console.log("Test Passed: 0°C -> 32°F");
  } else {
    console.log("Test Failed: 0°C -> 32°F");
    allPassed = false;
  }

  if (celsiusToFahrenheit(100) === 212) {
    console.log("Test Passed: 100°C -> 212°F");
  } else {
    console.log("Test Failed: 100°C -> 212°F");
    allPassed = false;
  }

  if (Math.round(fahrenheitToCelsius(212)) === 100) {
    console.log("Test Passed: 212°F -> 100°C");
  } else {
    console.log("Test Failed: 212°F -> 100°C");
    allPassed = false;
  }

  return allPassed;
}

if (!testConversion()) {
  process.exit(1);
}