function Accumulator(startingValue){
    this.currentValue = startingValue;

    this.read = function(increment){
        this.currentValue += increment;
    }
}

accumulator = new Accumulator(5);

for(let i =0; i < 5; i++){
    let increment = +prompt("Enter increment", "0");
    accumulator.read(increment);
    alert(`Accumulator value: ${accumulator.currentValue}` );
}





