
//Creating an object and messing with its properties.
let user = {}

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// Creating a function that can determine if an object is empty or not.
//Initate of for in loop. If the body executes, the object is not empty. Otherwise it is.
function isEmpty(object){
    for(let key in object){
        return false;
    }
    return true;
}



user = {};
alert(isEmpty(user));

pie = {}
pie.filling = "Apple";
alert(isEmpty(pie));

//Write code for summing the salaries of employees
let salaries  = {
    John : 100,
    Ann : 160,
    Pete:130,
}

// Use a for in loop. If the object is empty. It will return 0 since the loop body will not execute.
function sumSalaries(object){
    let sum = 0;
    
    for(let key in object){
       sum += object[key]; 
    }
    return sum;
}

alert(sumSalaries(salaries));


//Write a function that multiplies all numeric properties of an object by 2

function multiplyNumeric(object){
    for(let key in object){
        if(typeof(object[key]) == "number"){
            object[key] *= 2;
        }
    }
}

let menu = {
    width : 200,
    height: 300,
    title : "My menu",
};

for(let key in menu){
    alert(key + ": "  + menu[key]);
}

multiplyNumeric(menu);

for(let key in menu){
    alert(key + ": "  + menu[key]);
}


