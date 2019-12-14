// creating constant kelvin to 293
const kelvin = 0;
// creating const celsius
const celsius = (kelvin-273);
console.log(celsius);
// creating const fahrenheit.
let fahrenheit = ( celsius * (9/5) + 32 );
console.log (fahrenheit);
// For decimals, round down to nearest whole number
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// convert to Newton
let newton = celsius * (33/100);
console.log(newton);
// Round down
newton = Math.floor(newton);
console.log(newton);