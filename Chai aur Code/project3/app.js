let time  = document.querySelector('.time')
console.log(time);
setInterval(function(){
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString();
},1000);