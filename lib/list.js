const colors = require('colors');
const { types, methods } = require('./values');

module.exports = () => {
    console.log();
    console.log('COFFEE MENU');
    console.log('------------------');

    types.forEach(type => {
        console.log('%s %s', colors.bold(type.name), colors.green('/ ' + type.price));
    });

    console.log('------------------');
    console.log('BREW METHODS');
    console.log('------------------');
    
    methods.forEach(method => {
        console.log('%s %s', colors.bold(method.name), colors.yellow('/ ' + method.price));
    });


};