// singleton
// Object.create() <- this creates singleton

// Object literals
//  when we declarer literals its not created from singleton


// symbols creation
// symbols are inserted and used in objects within square brackets 
const sym = Symbol('key1')
// object
const jsUser = {
    name:'ganesh',
    'last name':'bagav',
    email:'ganesh@dsd.com',
    // adding symbols in object

    mySym1 : 'sym1',// normal key
    [sym] : 'sym2' , // key referring to the symbol if we don;t give the brackets it will also be a normal key
}

// ====>
/*
    {
        name: 'ganesh',
        'last name': 'bagav',
        email: 'gg@email.com',
        mySym1: 'sym1',
        [Symbol(key1)]: 'sym2'
    }
*/

// by default keys are string

// console.log(jsUser.name);
// console.log(jsUser['last name']);

// console.log(jsUser.mySym1);
// console.log(jsUser[sym]); 


jsUser.email = 'gg@email.com'
// Object.freeze(jsUser); 
jsUser.email = 'gg@amazon.com'

// console.log(jsUser);

jsUser.greeting = function(){
    console.log('morning' );
}
jsUser.greeting()
// console.log();

jsUser.greeting2 = function(){
    console.log(`morning ${this.name} ${this['last name']}` );
}

jsUser.greeting2()
