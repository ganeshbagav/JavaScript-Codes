const func = () =>{
    let username = 'ganeshbb'
    console.log(this.username); // undefined
    console.log(this); // {} / in other type function declaration it gives metadata about function
}

func()

// implicit return 
const addnum1  = (n1 , n2 ) =>  n1 + n2
const addnum2 = (n1 , n2 ) => ( n1 + n2)

const getObj = () => ({num:10})

console.log(getObj());