function aclean(arr){
    let set = new Set();
    let sorted;
    for(let i = 0; i < arr.length; i++){
        sorted = arr[i].toLowerCase();
        sorted = sorted.split('').sort().join('');
        if(set.has(sorted)){
            arr.splice(i,1); 
            i--;
        }
        else{
            set.add(sorted)
        }
    }

    
    return arr;
}



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
