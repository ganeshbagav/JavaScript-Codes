class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  get username() {
    return this._username.toUpperCase();
  }

  set username(val) {
    this._username = val;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(val) {
    this._email = val;
  }
}

const u1 = new User('ganesh','ganeshmail')
console.log(u1.username);
console.log(u1.email);
