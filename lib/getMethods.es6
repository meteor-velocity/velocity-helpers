VelocityHelpers.getMethods = function () {
  return Meteor.isServer ?
    Meteor.server.method_handlers :
    Meteor.connection._methodHandlers;
}
