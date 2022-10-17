const { subtractTwoNumbers } = require('../../../d1-tests/1-easy/subtractTwoNumbers')

//write the following tests
// checks if subtractTwoNumbers takes 10 from 4 and returns 6
// checks if subtractTwoNumbers takes 0 from 4 and returns -4
// checks if subtractTwoNumbers takes 5 from 3 and returns -2
// checks if subtractTwoNumbers takes -6 from -4 and returns 2

describe('test the subtractTwoNumbers function', () => {
    it('check if subtractTwoNumbers takes 4 from 10 and returns 6', () => {
        expect(subtractTwoNumbers(10, 4)).toBe(6)
    });

    it('check if subtractTwoNumbers takes 0 from 4 and returns 0', () => {
        expect(subtractTwoNumbers(0, 4)).toBe(-4)
    });

    it('check if subtractTwoNumbers takes 5 from 3 and returns 2', () => {
        expect(subtractTwoNumbers(5, 3)).toBe(2)
    });

    it('check if subtractTwoNumbers takes -6 from -4 and returns 2', () => {
        expect(subtractTwoNumbers(-6, -4)).toBe(-2)
    });
});