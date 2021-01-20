const sum = require('../src/sum')

it('should return correct sum', () => {
    const result = sum(3, 5)
    expect(result).toBe(8)
})