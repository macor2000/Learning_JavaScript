function filterRange(arr, a , b){
    return arr.filter(item => item >= a && item <= b);

}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)


function filterRangeInPlace(arr, a , b){
  arr.map(item => item < a || item > b ? arr.splice(arr.indexOf(item) ,1 ) : item );
    
}




arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
