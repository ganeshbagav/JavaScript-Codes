// Use backticks  -> ( ` ` )

const str = new String("hello ganesh how are you")

console.log(str.length);
console.log(str.__proto__);
console.log(str[6]);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLocaleUpperCase());
console.log(str.toWellFormed());
console.log(str.charAt(3));
console.log(str.indexOf('l')); // case sensitive / only give first occurrence

const nStr = str.substring(1,30);   // end value exclusive 
                                    // *** don't use negative values
                                    // if we give negative at starting it will starting 
                                    // and if we give negative value at ending it will consider first value as ending value
                                    // for both  value out of range it will give nothing( typeof string)
console.log(typeof nStr);
console.log(nStr);

strSlice = str.slice(-4,-1) // end value exclusive
console.log(strSlice); // work for negative values

spaceStr = "    hello    "
console.log(spaceStr+'|');
console.log(spaceStr.trim()+"|"); // remove spaces starting and ending
console.log(spaceStr.trimStart()+"|"); // remove spaces starting 
console.log(spaceStr.trimEnd()+"|"); // remove spaces ending

//replace() 
const repStr = 'hello'

console.log( repStr.replace('l','i')); // replace first occurrence -> hoile
console.log( repStr.replaceAll('l','i')); // replace all occurrence -> hoiie

// includes()
const names = 'ganeshbagav'
console.log(names.includes('ganesh')); // true

//split
const splitStr = 'hello ganesh how are you'
console.log(splitStr.split(''));
console.log(splitStr.split(' '));
console.log(splitStr.split(' ',3));
console.log(splitStr.split(' ',30));
