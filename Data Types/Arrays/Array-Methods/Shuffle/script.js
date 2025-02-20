function shuffle(arr){
    let upperBound  = arr.length - 1
    for(let i =0; i < upperBound; i++){
        insertElement = Math.floor(Math.random() * (upperBound  - i)) + i ;
        temp = arr[i];
        arr[i] = arr[insertElement];
        arr[insertElement] = temp;
    }

}




let arr = [1, 2, 3];
alert(arr);

shuffle(arr);
alert(arr);


// ...