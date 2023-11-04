const promise1 = new Promise(function (resolve,reject) {
    // Do an async task

    setTimeout(()=>{
        console.log('prom1 complete');
        resolve()
    },1000)
})

promise1.then(()=>{
    console.log('then1');
})


// without storing reference
new Promise(function (resolve , reject ){
    setTimeout(()=>{
        console.log('prom2 complete');
        resolve()
    },1000)
}).then(()=>{
    console.log('then2');
}).catch()

// passing data

const prom3 = new Promise(( resolve , reject)=>{
    setTimeout(()=>{
        console.log('prom3 complete');
        resolve({user:'ganesh',pass:'123'})
    },1000)
})

prom3.then((data)=>{
    console.log(data);
})


const prom4 = new Promise(function(resolve , reject){
    setTimeout(()=>{
        const err = false
        console.log('prom4 complete');
        if(!err){
            resolve({user:'ganesh',age:21})
        }else{
            reject('ERROR: wrong data accessed')
        }
    },1000)
})

prom4.then(
    (data)=>{
        console.log('then1',data);
        return data.user
    }
).then((data)=>{
    console.log('then2',data);
}).catch((error)=>{
    console.log('catch',error);
}).finally((data)=>{
    console.log('finally',data);
})


fetch('https://api.github.com/users/ganeshbgav')
.then((data)=>{
    return data.json()
})
.then(
    (data)=>{
        console.log('fetch data1',data);
    }
)
.catch(
    (error)=>{
        console.log('fetch error ',error);
    }
)