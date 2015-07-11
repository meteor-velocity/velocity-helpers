# velocity:helpers

Testing helpers for Meteor apps.

## How to use

Right now only Jasmine is supported.

By default all testing helpers are on the `VelocityHelpers` object.
To have less to write in your tests, you can export the testing helpers to the global namespace
by putting this code into one of your spec files:

```js
beforeAll(function () {
  VelocityHelpers.exportGlobals();
});
```

### Testing helpers

In addition to this documentation, also look at the specs for them.
This will give you example usages.

#### getMethods()

Returns a hash of all Meteor methods.

#### spyOnMethod(methodName: string)

Gives you a [spy](http://jasmine.github.io/2.3/introduction.html#section-Spies) for a Meteor method.

## Contribution guidelines

* Use pull-requests
* Use ES2015 and the [Xolv.io Style Guide](https://github.com/xolvio/javascript-style-guide)
* Use test driven development
* Use Git Flow
