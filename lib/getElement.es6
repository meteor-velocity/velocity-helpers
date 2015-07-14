VelocityHelpers.getElement = function (selector, context) {
  if (Meteor.isClient) {
    const element = $(selector, context)

    if (element.length === 0) {
      throw new Error(`element with selector "${selector}" not found`)
    }

    return element
  }
}
