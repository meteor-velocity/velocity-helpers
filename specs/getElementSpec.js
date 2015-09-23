if (Meteor.isClient) {
  describe('getElement', function () {
    describe('when the element exists', function () {
      beforeEach(function () {
        $(document.body).append('<div id="foo" />')
      })

      afterEach(function () {
        $('#foo').remove()
      })

      it('returns the element wrapped in a jQuery collection', function () {
        const element = getElement('#foo')

        expect(element.length).toBe(1)
        expect(element instanceof jQuery).toBe(true)
      })
    })

    describe('when the element does not exist', function () {
      it('throws an error', function () {
        const getNotExistingElement = () => getElement('#foo')

        expect(getNotExistingElement).toThrowError('element with selector "#foo" not found')
      })
    })
  })
}
