const form = document.querySelector('form')

form.addEventListener( 'submit',
    function (e){
        e.preventDefault();
        let h = parseInt(document.querySelector('#height').value)
        let w = parseInt(document.querySelector('#weight').value)
        let bmi = (w / ((h*h)/10000)).toFixed(2)
        document.querySelector('#result').innerHTML = bmi
        let sug = document.querySelector('#suggetion-result')
        if(bmi<18.6){
            sug.innerHTML = 'Under weight'
        }else if(bmi>=18.6 && bmi<=24.9){
            sug.innerHTML = 'Normal weight'
        }else{
            sug.innerHTML = 'Over weight'
        }
    }
)