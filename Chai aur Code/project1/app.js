console.log("project 1");


let buttons = document.querySelectorAll('button')
console.log(buttons);

buttons.forEach( function (button){
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
        document.querySelector('body').style.backgroundColor = e.target.id
    })
})