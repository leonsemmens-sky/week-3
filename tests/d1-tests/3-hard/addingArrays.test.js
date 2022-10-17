const { addingArrays } = require('../../../d1-tests/3-hard/addingArrays')

//addingArrays takes two arrays of numbers and adds the corresponding elements together.
//example [1,1,1], [2,2,2]  => [3,3,3]
//example [1,2,3,4], [4,3,2,1] => [5,5,5,5]

/*
Write tests for the following:
    - Arrays with different lengths should return "Arrays are different lengths."
    - Arrays with non-numbers should return "Not all elements are numbers."
    - two arrays of numbers and the expected result

*/

describe('tests the addingArrays function', () => {
    it('Arrays with different lengths should return "Arrays are different lengths."', () => {
        expect(addingArrays([1, 2], [1])).toBe("Arrays are different lengths.")
    });

    it('Arrays with non-numbers should return "Not all elements are numbers."', () => {
        expect(addingArrays(["hi", 2], [1, "cheese"])).toBe("Not all elements are numbers.")
    });

    it('two arrays of numbers and the expected result', () => {
        expect(addingArrays([1, 2, 3], [3, 2, 1])).toEqual([4, 4, 4])
    });
});