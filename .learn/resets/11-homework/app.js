// const sum = (a,b) => {
//     return a + b
//     }
//     console.log(sum(7,3))

//     module.exports = { sum };





const oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
    let euros = dollar / oneEuroIs.USD; 
    return euros * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY; 
    return euros * oneEuroIs.GBP;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };