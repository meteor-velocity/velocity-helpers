// @jasmineOnly
var methodNameToResponseMap = {}
VelocityHelpers.stubMethod = function (methodName, error, result) {
  methodNameToResponseMap[methodName] = {error: error, result: result}
  spyOn(Meteor, 'call').and.callFake(function (methodName) {
    var callback = arguments[arguments.length - 1]
    var response = methodNameToResponseMap[methodName]
    callback(response.error, response.result)
  })
}
