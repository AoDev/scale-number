var scaleNumber = require('./scaleNumber')
var expect = require('chai').expect

describe('scaleNumber', function () {
  describe('exposed methods', function () {
    it('should have a createLinearScale method', function () {
      expect(typeof scaleNumber.createLinearScale).to.equal('function')
    })
  })
})
