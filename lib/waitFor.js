// @jasmineOnly
// TODO: Make it work without Jasmine
VelocityHelpers.waitFor = function (check, successCallback) {
  var checkInterval = 50
  var timeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL
  var startTime = Date.now()
  var intervalId = Meteor.setInterval(function () {
    if (Date.now() > startTime + timeoutInterval) {
      Meteor.clearInterval(intervalId)
      // Jasmine will handle the test timeout error
    } else if (check()) {
      Meteor.clearInterval(intervalId)
      successCallback()
    }
  }, checkInterval)
}
