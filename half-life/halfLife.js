module.exports = function halfLife(initialQuantity, quantityRemaining, time) {
  return time / Math.log2(initialQuantity / quantityRemaining);
}