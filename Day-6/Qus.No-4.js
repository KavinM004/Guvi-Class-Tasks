class Calculate{
    constructer(ridePrice,Gst){
        this.fix=ridePrice;
        this.tax=Gst;
    }
    calNum(){
        return this.fix+this.tax;
    }
}
let ka=new Calculate(345,88);
console.log(ka);