
let arr = [1,2,45]
console.log(arr);

arr = Array(1,2,4,46,23)
console.log(arr);
console.log(typeof arr); // object

console.log(arr[3]);

// Array Methods 
/*

push        -> add from end
pop         -> remove from end
unshift     -> add at start
shift       -> remove from start
includes    -> returns true if the number present in array , false if not 
indexOf     -> return index of given number , -1 if number not present 
join        -> convert the array in string format by separating comma
slice       -> create array with given range of indices by excluding end index and without manipulating original array   
splice      -> create array by separating the give range from the original array with inclusive end index

*/

// push pop
arr.push(212)
arr.push(400)
console.log(arr);
arr.pop()
console.log(arr);
 

// unshift shift
arr.unshift(90)
console.log(arr);
arr.shift()
console.log(arr);

//includes
console.log(arr.includes(46));
console.log(arr.includes(460));

// indexOf
console.log(arr.indexOf(46));
console.log(arr.indexOf(200));

//join
console.log(arr.join()); 

// slice splice
console.log(arr.slice(1,4))
console.log(arr);
console.log(arr.splice(1,4))
console.log(arr);


// concat tow array 
// 1) concat()  -> drawback: can take only one array
// 2) spread operator (...arr1)-> can take multiple array

let arr1 = [ 1,2,3] 
let arr2 = [ 4,5,6] 

let arr3 = arr1.concat(arr2)
console.log(arr3);


let arr4 = [...arr1 , ...arr2 , ...arr3] 
console.log(arr4);

// Flat array
// flat(depth (how many dimensions you what to flatten)) -> depth = Infinity (solves all nested arrays)
let arr5 = [1,2,3,[4,5,6],7,8,[9,10,[11,12,33,[2,3,4,5,6,8]],2,4,56]] 

console.log(arr5.flat(1));
console.log(arr5.flat(2));
console.log(arr5.flat(Infinity));


// ** used for data scraping 
// isArray() -> tell the given thing is array or not   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// from()  -> convert the given thing into array
let str = 'ganesh'
console.log(Array.isArray(str));
console.log(Array.from(str));
console.log(Array.from(str ,(x)=>x+x));
console.log(Array.from({name:5} ,(v, i) => i )) // can't convert key value to array until we tell what to select from them
