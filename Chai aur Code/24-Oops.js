const user = {
    name:'ganesh',
    loginCount:12,
    signedIn:true,

    getUserDetails: function(){
        console.log(this.name);
        // console.log(name); // Error
        console.log(this);

    }

}


console.log(user.getUserDetails());
console.log(user.name);
console.log(this);


function User(name , age ){
    this.age = age
    this.name = name
    return this
}

const u1 = new User('ganesh',21) // if we create object without new then we have to return 'this' explicitly 
const u2 = new User('manish',22)

console.log(u2);
console.log(u1);






