describe('spyOnMethod', function () {
  describe('mocking a method', function () {
    it('allows you to mock a Meteor method to return a fake value', function () {
      Api.methods({
        myMethod() {}
      })

      spyOnMethod('myMethod').and.callFake(() => 'result');

      Meteor.call('myMethod', (error, result) => {
        expect(error).toBeUndefined();
        expect(result).toBe('result');
      })
    })

    it('allows you to mock a Meteor method to throw an error', function () {
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
