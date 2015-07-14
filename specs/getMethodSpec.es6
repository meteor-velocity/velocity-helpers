describe('getMethod', function () {
  it('returns the requested Meteor method function', function () {
    const myMethod = function () {}
    Api.methods({
      myMethod: myMethod
    })

    expect(getMethod('myMethod')).toBe(myMethod)
  });
});
