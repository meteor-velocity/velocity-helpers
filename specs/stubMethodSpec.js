describe('stubMethod', function () {
  describe('stub a method', function () {
    it('does it', function () {

      Meteor.methods({
        stubbedMethod: function() {
          throw new Error('Should not be called')
        }
      })
      VelocityHelpers.stubMethod('stubbedMethod', 'error','result');

      Meteor.call('stubbedMethod', function(error, result) {
        expect(error).toBe('error');
        expect(result).toBe('result');
      })

    })
  })
})
