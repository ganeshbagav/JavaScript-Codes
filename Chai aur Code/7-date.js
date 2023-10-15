// Months start from 0 index in javascript NOT From 1 
    // useful when we care creating object of date
    // but when using yy-mm-dd moths starts from 1

let myDate = new Date()
console.log(myDate); //2023-10-15T11:45:07.657Z
console.log(myDate.toString());// Sun Oct 15 2023 17:15:07 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sun Oct 15 2023
console.log(myDate.toISOString()); //2023-10-15T11:45:07.657Z
console.log(myDate.toJSON()); //2023-10-15T11:45:07.657Z
console.log(myDate.toLocaleDateString());//15/10/2023

console.log(typeof myDate); // object


// in this format months stats from 0 index
let dd = new Date (2023 , 9 , 15) // yyyy-mm-dd
console.log(dd.toDateString());
dd = new Date (2023 , 10 , 15)
console.log(dd.toDateString());


// in this format months stats from 1 index
dd = new Date ('2343-32-02')
console.log(dd);
dd = new Date ('2023-12-02') // yyyy-mm-dd
console.log(dd.toLocaleString());

dd = new Date ('1-8-2003') // mm-dd-yyyy

console.log(dd.toLocaleString());
console.log(dd.getTime()); // returns milliseconds values
console.log(Date.now());
console.log(Math.round(Date.now()/1000)); // to get in seconds