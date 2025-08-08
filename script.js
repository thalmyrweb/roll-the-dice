let mydices = document.querySelectorAll('.dice img');
let setwim = document.querySelector('.setwin');
function dice(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1)
    var randomNumber2 = Math.floor(Math.random() * 6 + 1)
    mydices[0].setAttribute('src','./images/dice'+randomNumber1+'.png')
    mydices[1].setAttribute('src','./images/dice'+randomNumber2+'.png')
    if(randomNumber1 > randomNumber2){
        setwim.textContent = '🏆 Plyer 1 Win'
    }else if(randomNumber1 < randomNumber2){
        setwim.textContent = 'Plyer 2 Win 🏆'
    }else{
        setwim.textContent = '🏆 Draw 🏆'
    }
}