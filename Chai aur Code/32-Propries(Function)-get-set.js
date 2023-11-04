function User(username,email){
    this._username = username
    this._email= email

    Object.defineProperty(this  ,'username',{
        get:function(){
            return this._username+'new'
        },

        set:function(val){
            this._username = val
        } 
    }),
    Object.defineProperty(this  ,'email',{
        get:function(){
            return this._email+'new'
        },

        set:function(val){
            this._email = val
        } 
    })

}


const ss = new User('ganesh','ganeshbagavmail')
console.log(ss.username);
console.log(ss.email);
