function sumInput(){
    let nums = [];
    do{
        response = +prompt("Enter a number. Or enter something else to stop", '5');
        if(!isNaN(response)){
            nums.push(response);
        }
    }while(!isNaN(response) && response != "");

    let sum = 0;

    for(let number of nums){
        sum += number;
    }
    return sum
}


alert(sumInput());