const colors = require('colors');
const { contact } = require('./values');

module.exports = () => {
    console.log();
    console.log('CONTACT');
    console.log('------------------');

    console.log(colors.bgWhite.black(`Shop: ${contact.name}`));
    console.log(colors.bgWhite.black(`Address: ${contact.address}`));
    console.log(colors.bgWhite.black(`Phone: ${contact.phone}`));
    console.log(colors.bgWhite.black(`Email: ${contact.email}`));

};