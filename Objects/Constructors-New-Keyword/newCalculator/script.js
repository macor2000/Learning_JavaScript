function Calculator(){
    this.a = null;
    this.b = null;

    this.read = function(a , b){
        this.a = +prompt("Number");
        this.b = +prompt("Number");

    }

    this.sum = function(){
        return this.a + this.b;
    }

    this.mul = function(){
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());