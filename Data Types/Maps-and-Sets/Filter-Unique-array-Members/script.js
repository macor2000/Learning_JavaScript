function unique(arr) {
    /* your code */
    let set = new Set();

    for(let i  =0 ; i < arr.length; i++){
        set.add(arr[i]);
    }
    return set;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  let set = unique(values);
  // Hare, Krishna, :-O
  for (let name of set){
    alert(name);
  }