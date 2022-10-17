const { multiplyTwoIntegers } = require('../../../d1-tests/2-medium/multiplyTwoIntegers')


//write the following tests
// checks if multiplyTwoIntegers multiplies 3 and 4 and returns 12
// checks if multiplyTwoIntegers multiplies 0 and 3 and returns 0
// checks if multiplyTwoIntegers multiplies 5 and -6 and returns -30
// checks if multiplyTwoIntegers multiplies -6 and -4 and returns 24
// if multiplyTwoIntegers is passed a value other than a number, it should return "Inputs must be a number."
// if multiplyTwoIntegers is passed a decimal value, it should return "Integers only."

describe('test the multiplyTwoIntegers function', () => {
    it('checks if multiplyTwoIntegers multiplies 3 and 4 and returns 12', () => {
        expect(multiplyTwoIntegers(3, 4)).toBe(12)
    });

    it('checks if multiplyTwoIntegers multiplies 0 and 3 and returns 0', () => {
        expect(multiplyTwoIntegers(0, 3)).toBe(0)
    });

    it('checks if multiplyTwoIntegers multiplies 5 and -6 and returns -30', () => {
        expect(multiplyTwoIntegers(5, -6)).toBe(-30)
    });

    it('checks if multiplyTwoIntegers multiplies -6 and -4 and returns 24', () => {
        expect(multiplyTwoIntegers(-6, -4)).toBe(24)
    });

    it('if multiplyTwoIntegers is passed a value other than a number, it should return "Inputs must be a number."', () => {
        expect(multiplyTwoIntegers("boo", 3)).toBe("Inputs must be a number.")
    });

    it('if multiplyTwoIntegers is passed a decimal value, it should return "Integers only."', () => {
        expect(multiplyTwoIntegers(0.2, 3)).toBe("Integers only.")
    });
});