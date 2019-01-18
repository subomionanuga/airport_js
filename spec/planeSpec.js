describe('Plane', function() {
  var plane

  beforeEach(function() {
    plane = new Plane
  })
  it('checks that plane exists', function() {
    expect(plane instanceof Plane).toBe(true)
  })
})
