class User {
    constructor(username , email){
        this.username = username
        this.email= email
    }

    logme(){
        console.log(`username : ${this.username}`);
    }
}

class Employee extends User{
    constructor(username,email,id){
        super(username,email)
        this.id=id;
    }

    workDo(){
        console.log(`work done by ${this.username}(${this.id})`);
    }
}

const emp1 = new Employee('hehe','email',23)
const emp2 = new Employee('wwwwq','email',26)
console.log(emp1);
emp1.workDo()
emp1.logme()

console.log(emp1 instanceof User);
// console.log(User instanceof emp1); //error
// console.log(emp1 instanceof emp1); //error
console.log(emp1 instanceof Employee);
console.log(emp1 === User);
console.log(emp1 === Employee);
console.log(emp1 === emp2);
// console.log(emp1 instanceof emp2); // error

