const User= {
    username:undefined,
    email:undefined,

    get username(){
        return this._username.toUpperCase()
    },

    set username(val){
        this._username = val
    },

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }
}

const uss = Object.create(User)
uss.username = 'ganesh'
uss.email = 'ganesh@facebook.com'
console.log(uss.username);
console.log(uss.email);