
// function sayMyName(){
//     console.log('G');
//     console.log('A');
//     console.log('N');
//     console.log('E');
//     console.log('S');
//     console.log('H');
// }

// sayMyName()

// default arguments values must follow non default value
function addTowNumber( num1 , num2=10){
    return num1 + num2;
    // console.log('unreachable code');
}

// console.log(addTowNumber(3,5));

const ans = addTowNumber(2,10);
// console.log(ans);

// ************* Rest Operator *************

function addToCart( num1 , num2 , ...val){
    console.log(num1);
    console.log(num2);
    console.log(val);
}

addToCart(10,39,32,32,44,544)

let obj = {
    name:'ganesh'
}
function anyObj( obj){
    console.log(obj.name)
}


// ******************  Hoisting *******************
// ****************** execution context **********************
// anyObj() // error 
anyObj(obj) 

console.log(addTow(3));
function addTow(num){ // we can call this function even this created before the call
    return num +2
}

// console.log(addOne(3)); // error
const addOne = function (num){ // we cant call this function before its created
    return num + 1
}


// **************************** Arrow Functions *********************
// * this keyword

const user = {
    fname:'ganesh',
    lname:'bagav',
    mob:1213123131,
    welcome:function (){
        console.log(` welcome ${this.fname}`);
        console.log(this);
    }
}
user.welcome()


console.log(this);

// function anyfun(){
//     let b =200
//     console.log(this); // meta data about function
//     console.log(this.b) // undefined
// }

// anyfun()

// const anyfun = function (){
//     let b =200
//     console.log(this); //meta data about function
//     console.log(this.b) // undefined
// }

// anyfun()


