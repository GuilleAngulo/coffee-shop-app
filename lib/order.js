#!/usr/bin/env node

const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const fs = require('fs');
var dateFormat = require('dateformat');

const values = require('../lib/values');

const now = new Date();

const nowString = dateFormat(now);
const nowNumber = dateFormat(now, "yyyyddmmHHMMss");


const questions = [
    { type: 'list', name: 'coffeType', message: 'Choose coffee type', choices: values.typesPlain },
    { type: 'list', name: 'sugarLevel', message: 'Choose sugar level', choices: values.sugarPlain },
    { type: 'confirm', name: 'decaf', message: 'Do you prefer your coffee to be decaf?', default: false },
    { type: 'confirm', name: 'cold', message: 'Do you prefer your coffee to be cold?', default: false },
    { type: 'list', name: 'servedIn', message: 'How do you prefer your coffee to be served in', choices: values.servedIn },
    { type: 'confirm', name: 'stirrer', message: 'Do you prefer your coffee with a stirrer?', default: true },
    { type: 'list', name: 'origin', message: 'Choose coffee origin', choices: values.origin },
    { type: 'list', name: 'method', message: 'Choose coffee brew method', choices: values.methodsPlain },
];

module.exports = () => {
    inquirer
    .prompt(questions)
    .then(async answers => {

        const coffePrice = parseFloat(answers.coffeType.substring(answers.coffeType.length - 6, answers.coffeType.length - 2));
        const methodPrice = parseFloat(answers.method.substring(answers.method.length - 6, answers.method.length - 2));


        const data = `
        YOUR ORDER (${nowString})
        -------------------------------------------
        Coffee type:      ${answers.coffeType}
        Sugar level:      ${answers.sugarLevel}
        Decaf:            ${answers.decaf ? 'Yes' : 'No'}
        Cold:             ${answers.cold ? 'Yes' : 'No'}
        Served in:        ${answers.servedIn} \n
        With stirrer:     ${answers.stirrer ? 'Yes' : 'No'}
        Coffee origin:    ${answers.origin}
        Brew method       ${answers.method}
        ------------------------------------------- 
        TOTAL:            R$${coffePrice + methodPrice} 
        `
        ;


        const writeStream = await fs.createWriteStream(`./orders/order_${nowNumber}.txt`, {
            'flags' : 'a',
            'encoding' : 'utf8',
            'mode' : 0666
        });

        writeStream.write(data, 'utf8', function(err) {
            if (err) console.error(err.message);
            else {
                console.log();
                console.log(`YOUR ORDER (${colors.grey(nowString)})`);
                console.log('-------------------------------------------');
                console.log(pad(colors.grey('Coffee type: '), 30), answers.coffeType);
                console.log(pad(colors.grey('Sugar level: '), 30), answers.sugarLevel);
                console.log(pad(colors.grey('Decaf: '), 30), answers.decaf ? 'Yes' : 'No');
                console.log(pad(colors.grey('Cold: '), 30), answers.cold ? 'Yes' : 'No');
                console.log(pad(colors.grey('Served in: '), 30), answers.servedIn);
                console.log(pad(colors.grey('With stirrer: '), 30), answers.stirrer ? 'Yes' : 'No');
                console.log(pad(colors.grey('Coffee origin: '), 30), answers.origin);
                console.log(pad(colors.grey('Brew method: '), 30), answers.method);
                console.log('-------------------------------------------');
                console.log(pad(colors.bold('TOTAL: '), 29), 'R$' + String(coffePrice + methodPrice));
                console.log();
            }
        });
    });
};