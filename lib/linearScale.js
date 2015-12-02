
module.exports = createLinearScale

function createLinearScale (fromRange, toRange) {
  if (!Array.isArray(fromRange) || !Array.isArray(toRange)) {
    throw new TypeError('Expected ranges to be arrays')
  }

  if (fromRange[0] >= fromRange[1]) {
    throw new Error('Inferior limit >= superior limit of origin range')
  }

  if (toRange[0] >= toRange[1]) {
    throw new Error('Inferior limit >= superior limit of destination range')
  }

  return function (value) {
    if (value < fromRange[0]) {
      return toRange[0]
    }
    if (value > fromRange[1]) {
      return toRange[1]
    }
    return (((value - fromRange[0]) * (toRange[1] - toRange[0])) / (fromRange[1] - fromRange[0])) + toRange[0]
  }
}
