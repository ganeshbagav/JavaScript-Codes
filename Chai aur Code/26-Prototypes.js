let myHeros = ['batman','ironman']

let heroPower = {
    batman:'broken-heart',
    ironman:'intelligence',

    powers : function powers(){
        console.log(this.batman,this.ironman);
    }
}

// heroPower.powers()

Object.prototype.fly = function fly(){
    console.log('fly');
}

Array.prototype.hanuman = function hanuman(){
    console.log('Jay Shree Hanuman');
}

myHeros.fly()
heroPower.fly()
myHeros.hanuman()
// heroPower.hanuman()// Error : Reverse inheritance 


const User = {
    name:'chai',
    email:'chai@gg.com'
}

const teacher = {
    makeVideo:true
}

const TeachingSupport={
    isAvailable:true
}

const TASupport={
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport // add the protos of TeachingSupport into TASupport
}

console.log(TASupport);
console.log(TASupport.isAvailable);

console.log(User.makeVideo);
Object.setPrototypeOf(User,teacher) //  add protos of teacher into user
console.log(User.makeVideo);