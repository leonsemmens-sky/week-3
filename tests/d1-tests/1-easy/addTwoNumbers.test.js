const {addTwoNumbers} = require('../../../d1-tests/1-easy/addTwoNumbers')

//write the following tests
    // checks if addTwoNumbers takes 4 and 6 and returns 10
    // checks if addTwoNumbers takes 2 and 0 and returns 2
    // checks if addTwoNumbers takes -4 and -6 and returns -10

    it('correctly adds -4 and -6', () => {
        expect(addTwoNumbers(-4,-6)).toBe(-10)
    })

