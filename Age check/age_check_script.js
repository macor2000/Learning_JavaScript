let age = Number(prompt("Enter your age" , "19"));
checkAge(age)

// Age check using ?
function checkAge(age){
    return age > 18 ? True :
    confirm("Did your parents give you permission?");
}

//Age check using ||
function checkAge(age){
    return age > 18 || confirm("Did your parents give you permission?");
}

//Age check using if else
function checkAge(age){
    if(age > 18){
        return True;
    }
    return confirm("Did your parents give you permission?");
}