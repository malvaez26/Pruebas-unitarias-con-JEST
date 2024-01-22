const { default: expect } = require('expect');

const calculator = require('../calculator');

test('Sum a + b to equal 3', () => {
    expect(calculator.sum(1,2)).toBe(3);
})

test('substracts a - b to equal 0', () => {
   expect(calculator.substract(3,3)).toBe(0)
})

test('multiplies a * b to equal 20', () => {
    expect(calculator.multiply(5,4)).toBe(20)
})

test('divides of numbers a / b', () => {
    expect(calculator.divide(1,1)).toBe(1);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(2,2)).toBe(4);
})

