// Immediately Invoked Function Expression (to avoid global pollution)

// nammed iife
(function chai (){
    console.log("db connected");
})(); //<- this semicolon(;) the function where to stop the context removing this gives ERROR

(() => {
    console.log("db connected 2");
})();

((jj) => {
    console.log(`db connected 3 ${jj}`);
})('heelo')
