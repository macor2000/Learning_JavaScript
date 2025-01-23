alert(pow(2,1));


function pow(x , n){
    if( n == 0){
        alert("n must be at least 1");
        return 
    }
    let res = x;
    for(let i = 1; i < n; i ++){
        res *= x;
    }
    return res;
}