describe('Airport', function() {
  var plane
  var airport
  // var hangar

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane
  })
  describe('Airport hangar', function() {
    it('checks that a new airport has an empty hangar', function() {
      expect(airport.hangar).toEqual([])
    })
  })

  describe('Plane Actions', function() {
    it('lands a plane', function() {
      airport.land(plane)
      expect(airport.hangar).toContain(plane)
    })

    it('plane can takeoff', function() {
      // airport.land(plane)
      airport.takeoff()
      expect(airport.hangar).not.toContain(plane)
    })
  })
})
