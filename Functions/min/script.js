
a = Number(prompt("Enter a number", "2"));
b = Number(prompt("Enter another" , '3'));
alert(min(a,b));


function min(a, b){
    if(a <= b){
        return a;
    }
    return b;
    
}

function min(a,b){
    return a <= b ? a : b;
}




