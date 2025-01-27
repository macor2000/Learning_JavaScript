//Creating a basic calculator
let calculator = {
    a : null,
    b : null,

    read(a , b){
        this.a = a;
        this.b = b;
    },

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    }

};

let a = Number(prompt("Enter a number", ));
let b = Number(prompt("Enter another"));

calculator.read(a,b);
alert(calculator.sum());
alert(calculator.mul());