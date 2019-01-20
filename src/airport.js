// const Plane = require('./plane.js').default

class Airport {
  constructor(hangar) {
    this.hangar = []
  }

  land(plane) {
    this.hangar.push(plane)
    return this.hangar
  }
}

var heathrow = new Airport()
var plane = new Plane()

heathrow.land(plane)

console.log(heathrow.hangar)
