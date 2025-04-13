// const sum = (a,b) => {
//     return a + b
//     }
//     console.log(sum(7,3))

//     module.exports = { sum };



const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD
}

function fromDollarToYen(dollar) {
    let euros = dollarAmount / oneEuroIs.USD
    return euros * oneEuroIs.JPY;

}

function fromYenToPound(Yen) {
    let euros = yenAmount / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;

}

module.exports = { sum, fromEuroToDollar }