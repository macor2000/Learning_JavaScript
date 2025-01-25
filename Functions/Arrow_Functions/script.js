function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}
//With function expressions
ask(
    "Do you agree?",
    function() {alert("You agreed.")},
    function() {alert("You cancelled the execution")}
)

// With arrow functions
ask(
    "Do you agree?",
    () => alert("You agreed"),
    () => alert("You cancelled the execution")
);

