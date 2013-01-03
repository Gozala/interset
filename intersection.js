"use strict";

var slicer = Array.prototype.slice
var contains = function(item) { return this.indexOf(item) >= 0 }

function intersection2(first, second) {
  return first.length > second.length ? first.filter(contains, second) :
         second.filter(contains, first)
}

module.exports = function intersection(first, second, rest) {
  if (!first) throw TypeError("intersection requires  at least one arguments")
  if (!second) return first
  if (!rest) return intersection2(first, second)
  return slicer.call(arguments, 1).reduce(intersection2, first)
}
