let drumNames = document.querySelectorAll('.drum')
for (let i = 0 ; i< drumNames.length;i++){
    let drumName = drumNames[i].innerHTML
    document.querySelector('.'+drumName).addEventListener('click', function(){
        let clickedButton = this.innerHTML
        audioPlayer(clickedButton)
        pressed(clickedButton)
    });
};

document.addEventListener('keydown',function(something){
    let btnPressed = something.key
    pressed(btnPressed)
    audioPlayer(btnPressed)
})

function pressed(button){
    document.querySelector('.'+button).classList.add('pressed');
        setTimeout(function(){ 
            document.querySelector('.'+button).classList.remove('pressed');
        }, 200)
}


function audioPlayer(key){
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}