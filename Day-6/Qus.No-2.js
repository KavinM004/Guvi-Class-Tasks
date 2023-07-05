class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    getRadius(){
      return this.radius;
      };
    setRadius(value){
      this.radius = value;
      };
  }
  
  let cir = new Circle(1.0, "red");
  console.log(cir);