let age = Number(prompt("What is your age" , '18'));

let welcome = age < 18 ? 
 function(){ alert("Welcome!");} :
 function(){ alert("Greetings!"); };
welcome();