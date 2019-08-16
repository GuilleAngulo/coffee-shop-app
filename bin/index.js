#!/usr/bin/env node

const program = require('commander');

const list = require('../lib/list');
const order = require('../lib/order');
const contact = require('../lib/contact');

program
    .command('list')
    .alias('ls') 
    .description('List coffee menu')
    .action(function () {
        list();
    });


program
    .command('order')
    .alias('o')
    .description('Order a coffee')
    .action(function() {
        order();
    });

program
    .command('contact')
    .alias('c')
    .description('Contact info')
    .action(function() {
        contact();
    });

program.parse(process.argv);

