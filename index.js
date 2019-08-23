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


