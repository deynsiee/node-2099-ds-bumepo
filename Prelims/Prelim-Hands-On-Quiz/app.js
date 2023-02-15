/*
SALALILA, DAYNA MICAELA M
WD-202
*/

// Create another file inside the same folder and call app.js.

var calculate = require('./calculation.js');

const hourDay = 4;
const daysPerWeek = 6;
const rate = 300;
const grossIncome = hourDay * daysPerWeek * rate;

var tax = calculate.multiply(grossIncome, 0.1);
var sss = 1200;
var pagibig = 300;
var pHealth = 400;
var totalDeductions = tax + sss + pagibig + pHealth;

const netSalary = calculate.subtract(grossIncome, totalDeductions);

console.log('The gross income is ' + grossIncome + '.');
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig Fund: ' + pagibig);
console.log('PhilHealth: ' + pHealth);
console.log('Total Deductions: ' + totalDeductions);
console.log('The net salary is ' + netSalary);
