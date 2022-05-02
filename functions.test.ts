const {shuffleArray} = require('./utils')
let testArr = [1,2,3,4]
describe('shuffleArray should', () => {
    test(' check that shuffleArray returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })

    it('should check that it returns an array of the same length as the argument sent in', () => {
        expect(shuffleArray(testArr)).toHaveLength(testArr.length)
    })

    it('should check that all the same items are in the array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })

    it('should check that the items have been shuffled around', () => {
        let result = shuffleArray(testArr)
        expect(result.join()).not.toEqual(testArr.join())
    })
})