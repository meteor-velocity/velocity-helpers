describe('waitFor', function () {
  beforeEach(function() {
    jasmine.clock().install()
  })

  afterEach(function() {
    jasmine.clock().uninstall()
  })

  it('calls the callback when the condition is true', function () {
    let isConditionTrue = false
    const callback = jasmine.createSpy('successCallback')

    waitFor(() => isConditionTrue, callback)

    expect(callback).not.toHaveBeenCalled()
    jasmine.clock().tick(51)
    expect(callback).not.toHaveBeenCalled()
    isConditionTrue = true
    jasmine.clock().tick(51)
    expect(callback).toHaveBeenCalled()
  })
})
