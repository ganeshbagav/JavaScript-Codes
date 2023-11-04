class User {
    constructor(username) {
        this.username = username
    }

    logme(){
        console.log(this.username);
    }

    shareidnonstatic(){
        console.log('shareidnonstatic');
        console.log(User.shareid());
    }
    static shareid(){
        console.log('1223');
        return 21212
    }
}

class pp extends User{

}

pp.shareid()// 
const us = new User('wqw')
us.logme()
us.shareidnonstatic()
console.log(User.shareid())