"use strict";

var slicer = Array.prototype.slice
var concater = Array.prototype.concat
var excludes = function excludes(item) { return this.indexOf(item) < 0 }

module.exports = function difference(source, exclude, rest) {
  if (!source) throw TypeError("difference requires  at least one arguments")
  if (!exclude) return source
  exclude = concater.apply([], slicer.call(arguments, 1))
  return source.filter(excludes, exclude)
}
