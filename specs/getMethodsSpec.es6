describe('getMethods', function () {
  it('returns a hash of all Meteor methods', function () {
    const myMethod = function () {}
    Api.methods({
      myMethod: myMethod
    })

    const methods = getMethods()

    expect(methods.myMethod).toBe(myMethod)
  });
});
