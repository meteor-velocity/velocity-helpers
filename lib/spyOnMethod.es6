VelocityHelpers.spyOnMethod = function (methodName) {
  return spyOn(this.getMethods(), methodName)
}
