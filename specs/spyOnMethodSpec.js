describe('spyOnMethod', function () {
  it('allows you to mock Meteor.call of a Meteor method', function () {
    Api.methods({
      myMethod() {}
    })

    this.hasFakeBeenCalled = false;
    spyOnMethod('myMethod').and.callFake(
      () => this.hasFakeBeenCalled = true
    )

    Meteor.call('myMethod')

    expect(this.hasFakeBeenCalled).toBe(true)
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
