// Lexical Scoping / context
function Outer1 (){
    const val  = 'outer1 val'

    function inner(){
        console.log(val);
    }

    inner()
}

Outer1() 

// Closure

function Outer2 (){
    const val  = 'outer2 val'

    function inner(){
        console.log(val);
    }

    return inner
}

const myfun = Outer2()

myfun()