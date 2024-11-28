#!usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.blue.bold("\n\t'This is my Currency Converter Project'\n\t"));
// The list of currencies
let exchange_rates = {
    "USD": 1,
    "EUR": 0.9,
    "PKR": 280,
    "JYP": 113,
    "AUD": 1.65,
};
let user_answer = await inquirer_1.default.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "PKR", "JYP", "AUD"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "PKR", "JYP", "AUD"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert into",
    }
]);
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = exchange_rates[user_answer.from_currency];
// Formulas
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Results
console.log(`${converted_amount.toFixed(3)}`);
