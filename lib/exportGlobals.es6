const global = this

VelocityHelpers.exportGlobals = function () {
  _.chain(this)
    .keys()
    .filter(helperName => typeof this[helperName] === 'function')
    .filter(helperName => typeof global[helperName] === 'undefined')
    .forEach(helperName => global[helperName] = this[helperName])
    .value()
}
