function unique(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res;

}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O