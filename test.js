// const { sum } = require('./app.js');

// test('adds 14 + 9 to equal 23', () => {

// let total = sum(14,9);

// expect(total).toBe(23);

// });

test("One euro should be 1.07 dollars", function () {
    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
  
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
  
    expect(fromEuroToDollar(3.5)).toBe(3.745);
  });
  
  test("One dollar should be 146.261 yen", function () {
    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
  
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
  
    expect(fromDollarToYen(1)).toBeCloseTo(146.261);
  });
  
  test("One yen should be 0.005 pounds", function () {
    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
  
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
  
    expect(fromYenToPound(1)).toBeCloseTo(0.005);
  });


// // Uso la función como debe ser usada
// const yen = fromDollarToyen(1);
// const euros = 1/ 1.07;

// // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
// const expected = euros * 156.5;

// // Hago mi comparación (la prueba)
// expect(yen).toBeto(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)


// const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');
// test("One euro should be 1.07 dollars", function() {
// const dollars = fromEuroToDollar(3.5);
// const expected = 1 * 1.07;
// expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
// })