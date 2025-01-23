let age = Number(prompt("Enter your age" , "19"));
checkAge(age)

function checkAge(age){
    return age > 18 ? True :
    confirm("Did your parents give you permission?");
}