// forEach
let arr = [1,2,3,4,5,6,7,8]

arr.forEach((i)=>{
    console.log(i);
})

//Filter 

let nums = arr.filter((num)=>num>6)
console.log(nums);
 nums = arr.filter((num)=>{
    return num>4
})
console.log(nums);
