exports.types = [
    {name: 'Espresso', price: 'R$3.80'},
    {name: 'Latte', price: 'R$4.20'},
    {name: 'Cappuchino', price: 'R$4.40'},
    {name: 'Americano', price: 'R$2.80'},
    {name: 'Macchiato', price: 'R$3.80'},
];

exports.typesPlain = exports.types.map(type => {
    return type.name + ' (' + type.price + ') ';
});

exports.sugar = [
    {name: 'Without', spoons: '0'},
    {name: 'Low', spoons: '1'},
    {name: 'Medium', spoons: '2'},
    {name: 'High', spoons: '3'},
    {name: 'Very High', spoons: '4'},
];

exports.sugarPlain = exports.sugar.map(sugar => {
    return sugar.name + ' [' + sugar.spoons + '] ';
});

exports.methods = [
    {name: 'Hario V60', price: '+R$1.50'},
    {name: 'Aeropress', price: '+R$1.80'},
    {name: 'Cleber', price: '+R$1.75'},
    {name: 'French press', price: '+R$1.80'},
    {name: 'Moka', price: '+R$1.95'},
];

exports.methodsPlain = exports.methods.map(method => {
    return method.name + ' (' + method.price + ') ';
});

exports.origin = [
    "Colombian",
    "Brazilian",
    "Ethiopian"
];

exports.servedIn = [
    "Mug",
    "Cup",
    "Takeaway"
];

exports.contact = {
    name: "Starbucks New York Roastery",
    address: "61 9th Ave. |New York, NY 10011",
    phone: "212-691-0531",
    hours: "7:00 AM to 12:00 AM",
    email: "contact@starbucks.com"
}