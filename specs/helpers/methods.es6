class Api {
  // This is the same as Meteor.methods.
  // But it allows to redefine existing Meteor methods.
  // And you can easily mock it.
  methods(methods) {
    var methodHandlers = Meteor.isServer ?
      Meteor.server.method_handlers :
      Meteor.connection._methodHandlers;

    _.each(methods, function (func, name) {
      methodHandlers[name] = func;
    });
  }
}

this.Api = new Api();
