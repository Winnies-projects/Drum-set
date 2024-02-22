//to find the number of buttons with the class drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//creating a for loop that will loop through all the buttons and give it the event listener
//remember that the counting in js except the lenght calculator starts from 0
for( var i = 0; i<numberOfDrumButtons; i++){
//[i] is the value of the button clicked.
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var instrumentName = this.getAttribute("id");
    var audio = new Audio('./sounds/'+instrumentName+'.mp3');
    audio.play();
});
}

//now to make the audio play when you press the key on keyboard 
//we are adding the evenlistener to the whole document so that the whole page now will listen to the keypress event
document.addEventListener('keypress', function(event) {
    var drumName = event.key;
    switch (drumName) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log('invalid');
    }
    
})

