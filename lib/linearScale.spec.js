var createLinearScale = require('./linearScale')
var expect = require('chai').expect

describe('linearScale', function () {
  it('should throw an error if ranges are not passed', function () {
    var shouldThrow = function () {
      createLinearScale()
    }

    expect(shouldThrow).to.throw('Expected ranges to be arrays')
  })

  it('should throw an error if ranges limits are not valid', function () {
    var shouldThrow = function () {
      createLinearScale([10, 0], [100, 200])
    }

    expect(shouldThrow).to.throw('Inferior limit >= superior limit of origin range')

    shouldThrow = function () {
      createLinearScale([0, 10], [200, 100])
    }

    expect(shouldThrow).to.throw('Inferior limit >= superior limit of destination range')
  })

  it('should return a function', function () {
    var scale = createLinearScale([0, 10], [100, 200])

    expect(typeof scale).to.equal('function')
  })

  describe('scaling numbers', function () {
    it('should scale a number to a different range', function () {
      var scale = createLinearScale([10, 20], [100, 200])
      var number = scale(15)
      expect(number).to.equal(150)
    })

    it('should handle negative values', function () {
      var scale = createLinearScale([-10, 10], [100, 200])
      var number = scale(0)
      expect(number).to.equal(150)
    })
  })

  it('should map number to upper limit when > upper limit', function () {
    var scale = createLinearScale([10, 20], [100, 200])
    var number = scale(5)
    expect(number).to.equal(100)
  })

  it('should map number to lower limit when < lower limit', function () {
    var scale = createLinearScale([10, 20], [100, 200])
    var number = scale(50)
    expect(number).to.equal(200)
  })
})
