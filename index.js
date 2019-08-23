function produceDrivingRange(range){
  return function whithinRange(street1, street2){
    let dist = street2.slice(0,2)-street1.slice(0,2)
    if (dist > range) {
      return `${dist-range} blocks out of range`
    } else {
      return `within range by ${range - dist}`
    }
       
  }
}

function produceTipCalculator(tipPercent) {
  return function calculateTip(fare){
    return fare*tipPercent
  }
}

class Driver {
  constructor(id){
     this.id = id
  }
}

function createDriver() {
  let driverId = 0;
  function generateDriver(driverId){
    return new Driver(driverId++);
    
  }
}




