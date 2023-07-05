class UberCalculator {
    constructor(distance, duration) {
      this.distance = distance;
      this.duration = duration;
    }
    calculatePrice() {
      let Gst = 2.5;
      let costPerKilometer = 1.5; 
      let costPerMinute = 0.2; 
  
      let distanceCost = this.distance * costPerKilometer;
      let durationCost = this.duration * costPerMinute;
      let totalPrice = Gst + distanceCost + durationCost;
  
      return totalPrice.toFixed(2);
    }
  }
  let calculator = new UberCalculator(10, 30);
  let totalPrice = calculator.calculatePrice();
  console.log(`The estimated Uber price is : ${totalPrice}`);
  