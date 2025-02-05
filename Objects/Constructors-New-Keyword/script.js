
function A(){
this.name = "Matthew";
return B();
}

function B(){
if(new.target){
    return A();
}
this.name = "Justin";
return this;
}



let a = new A();
let b = new B();

alert(a.name);
alert(a == b);