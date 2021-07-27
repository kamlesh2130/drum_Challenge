var numberOfDrumsButtons = document.querySelectorAll('.drum').length;

for (var index = 0; index < numberOfDrumsButtons; index++) {

    document.querySelectorAll('.drum')[index].addEventListener('click', function () {
        var key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
}

function makeSound(key){
        switch (key) {
            case 'q':
                var audio1 = new Audio("sounds/tom-1.mp3");
                audio1.play();
                break;
            case 'w':
                 var audio1 = new Audio("sounds/tom-2.mp3");
                 audio1.play();
                break;
            case 'e':
                var audio2 = new Audio("sounds/tom-3.mp3");
                audio2.play();
                break;
            case 'r':
                var audio3 = new Audio("sounds/tom-4.mp3");
                audio3.play();
                break;
            case 't':
                var audio4 = new Audio("sounds/crash.mp3");
                audio4.play();
                break;
            case 'y':
                var audio5 = new Audio("sounds/kick-bass.mp3");
                audio5.play();
                break;
            case 'p':
                 var audio6 = new Audio("sounds/snare.mp3");
                 audio6.play();
                break;
            default:console.log(key);
               
        }
}
document.addEventListener('keydown', function(event) {
    var keyPressed = event.key;
    makeSound(keyPressed); 
    buttonAnimation(keyPressed);
});

function buttonAnimation(key)
{
    var activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed");
    setTimeout(function(){ 
        activeButton.classList.remove("pressed") ; }, 100);
}
// var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();


