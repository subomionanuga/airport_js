describe('Airport', function() {
  // var plane
  var airport
  // var hangar

  beforeEach(function() {
    airport = new Airport()
    // hangar = []
  })
  describe('Airport has a hangar', function() {
    it('checks that a new airport has an empty hangar', function() {
      expect(airport.hangar).toEqual([])
    })
  })
})
