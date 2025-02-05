function upperCaseTheFirstCharacter(str){
if(!str){
    return str;
}
return str[0].toUpperCase() + str.slice(1);

}

alert(upperCaseTheFirstCharacter("samantha"));

function checkSpam(str){
    str = str.toLowerCase();
    if(str.includes("viagra") || str.includes("xxx")){
        return true;
    }
    return false;
}
alert(checkSpam("Hello!"));


function truncate(str,maxLength){
    if(str.length > maxLength){
        str = str.slice(0,maxLength);
        str += "...";
    }
    return str;
}
str = "Hello there!"
alert(truncate(str, 5));

function extractCurrencyValue(str){
    str = str.slice(1);
    return +str;
}

alert(extractCurrencyValue("$450") === 450);