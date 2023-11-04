
// way 1
// function setUsername(thiss,username){
//     thiss.username = username
//     console.log('setUsername');

// }

// function createUser(username,email){
//     setUsername(this,username)
//     this.email =email
// }

// const u1 = new createUser('ganesh','ganesh@google.com')
// console.log(u1);

// way 2 Right way

function setUsername(username){
    this.username = username
    console.log('setUsername');

}

function createUser(username,email){
    setUsername.call(this,username)
    this.email =email
}

const u1 = new createUser('ganesh','ganesh@google.com')
console.log(u1);

