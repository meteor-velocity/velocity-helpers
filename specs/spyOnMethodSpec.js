describe('spyOnMethod', function () {
  describe('mocking a method', function () {
    // FIXME: This does not work. This pull-request is an answer to this limitation:
    // https://github.com/meteor-velocity/meteor/commit/b43547c3016ade2b0f04f97228b6dc107583554a
    xit('allows you to mock a Meteor method to return a fake value', function (done) {
      Api.methods({
        myMethod() {}
      })

      spyOnMethod('myMethod').and.callFake(() => 'result');

      Meteor.call('myMethod', (error, result) => {
        expect(error).toBeUndefined();
        expect(result).toBe('result');
        done();
      })
    })

    it('allows you to mock a Meteor method to throw an error', function (done) {
      Api.methods({
        myMethod() {}
      })

      const error = new Error('myMethod error');

      spyOnMethod('myMethod').and.callFake(() => {
        throw error;
      });

      Meteor.call('myMethod', (error, result) => {
        expect(error).toBe(error);
        expect(result).toBeUndefined();
        done()
      })
    });
  })

  it('allows you to mock Meteor.apply of a Meteor method', function () {
    Api.methods({
      myMethod() {}
    })

    this.hasFakeBeenCalled = false;
    spyOnMethod('myMethod').and.callFake(
      () => this.hasFakeBeenCalled = true
    )

    Meteor.apply('myMethod')

    expect(this.hasFakeBeenCalled).toBe(true)
  })

  it('does not stub other methods', function () {
    this.hasMyUnstubbedMethodBeenCalled = false

    Api.methods({
      myMethod() {},
      myUnstubbedMethod: () => this.hasMyUnstubbedMethodBeenCalled = true
    })

    spyOnMethod('myMethod').and.callFake(function () {})

    Meteor.call('myUnstubbedMethod')

    expect(this.hasMyUnstubbedMethodBeenCalled).toBe(true)
  })
})
