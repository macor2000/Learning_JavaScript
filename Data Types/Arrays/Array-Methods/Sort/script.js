function revSort(arr){
    arr.sort(compare);

}


function compare(a,b){
    return -1 * (a - b);
}



let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
revSort(arr);

alert( arr ); // 8, 5, 2, 1, -10


function copySorted(arr){
copy = arr.map(item => item);
return copy.sort();
}

 arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)