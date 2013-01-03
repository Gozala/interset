"use strict";
var slicer = Array.prototype.slice

function add(union, item) {
  if (union.indexOf(item) < 0) union.push(item)
  return union
}

function include(union, set) {
  return set.reduce(add, union)
}

module.exports = function union() {
  return slicer.call(arguments).reduce(include, [])
}
