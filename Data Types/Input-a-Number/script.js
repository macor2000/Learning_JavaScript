function giveMeANumber(){
    let input;
   
    do{
     input = prompt("Give me a number!");
     if(input == "" || input == null){
       return null;
     }
     input = parseFloat(input);
    }while(Number.isNaN(input));
   
    return input;
    

}
input = giveMeANumber();
alert(input);

