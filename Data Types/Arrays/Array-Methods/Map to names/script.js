function getNames(arr){
    res = []
   arr.forEach((item) => {
        res.push(item.name);
    });
    return res;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };


let users = [ john, pete, mary ];

let names = getNames(users);

alert( names );