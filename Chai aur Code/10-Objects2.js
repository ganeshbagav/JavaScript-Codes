let user1 = new Object(); // Singleton Object
// console.log(user1);

const user2 = {}; // non singleton Object
// console.log(user2);

user2.email = "ganesh@email.com";
user2.address = {
  country: "india",
  state: "maharashtra",
  city: "pune",
};

// console.log(user2);

// optional chaining
// console.log(user2?.type); // access if user2 has type field
// console.log(user2.type); // direct access type field

let o1 = {
  a: 1,
  b: 2,
};
let o2 = {
  c: 3,
  d: 4,
  e: {
    1: 3,
    4: 5,
  },
};

let o3 = {
  o1,
  o2,
};
// console.log(o3);

o3 = Object.assign(o1, o2);
// console.log(o3);

o3 = Object.assign({}, o1, o2); // recommended
// console.log(o3);

o3 = { ...o1, ...o2 };
// console.log(o3);

// console.log(Object.keys(o3));
// console.log(Object.values(o3));
// console.log(Object.entries(o3));

// console.log(o3.hasOwnProperty('a'));

//  *****************  Object Destructure ************************

let val = { firstname: "ganesh", lastname: "bagav" };

// console.log(firstname);
let {firstname} = val
console.log(firstname);


let {firstname:name} = val
console.log(name);
