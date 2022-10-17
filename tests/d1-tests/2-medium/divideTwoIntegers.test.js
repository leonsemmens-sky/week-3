const { divideTwoIntegers } = require('../../../d1-tests/2-medium/divideTwoIntegers')

//write the following tests
// checks if divideTwoIntegers receiving 12 and 3 will return 4
// checks if divideTwoIntegers receiving 12 and -3 will return -4
// checks if divideTwoIntegers receiving 12 and 0 will return "Divide by zero error."
// if divideTwoIntegers is passed a value other than a number, it should return "Inputs must be a number."
// if divideTwoIntegers is passed a decimal value, it should return "Integers only."

describe('test the divideTwoIntegers function', () => {
    it('check if divideTwoIntegers receiving 12 and 3 will return 4', () => {
        expect(divideTwoIntegers(12, 3)).toBe(4)
    });

    it('check if divideTwoIntegers receiving 12 and -3 will return -4', () => {
        expect(divideTwoIntegers(12, -3)).toBe(-4)
    });

    it('check if divideTwoIntegers receiving 12 and 0 will return "Divide by zero error."', () => {
        expect(divideTwoIntegers(12, 0)).toBe("Divide by zero error.")
    });

    it('if divideTwoIntegers is passed a value other than a number, it should return "Inputs must be a number."', () => {
        expect(divideTwoIntegers(2, "hi")).toBe("Inputs must be a number.")
    });

    it('if divideTwoIntegers is passed a decimal value, it should return "Integers only."', () => {
        expect(divideTwoIntegers(2, 0.5)).toBe("Integers only.")
    });
});