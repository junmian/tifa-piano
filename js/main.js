// Detecting Button Press
let numberOfNoteButtons = document.querySelectorAll(".note").length;
for (let i = 0; i < numberOfNoteButtons; i++) {
    document.querySelectorAll(".note")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

        // Make sound
        makeSound(buttonInnerHTML);

        // Button animation
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "d":
            let doLow = new Audio("assets/audio/Do-stretched.mp3");
            doLow.play();
            break;
        case "r":
            let re = new Audio("assets/audio/Re-stretched.mp3");
            re.play();
            break;
        case "m":
            let mi = new Audio("assets/audio/Mi-stretched.mp3");
            mi.play();
            break;
        case "f":
            let fa = new Audio("assets/audio/Fa-stretched.mp3");
            fa.play();
            break;
        case "s":
            let so = new Audio("assets/audio/Sol-stretched.mp3");
            so.play();
            break;
        case "l":
            let la = new Audio("assets/audio/La-stretched.mp3");
            la.play();
            break;
        case "t":
            let ti = new Audio("assets/audio/Ti.mp3");
            ti.play();
            break;
        case "o":
            let doOctave = new Audio("assets/audio/Do-octave-stretched.mp3");
            doOctave.play();
            break;
        default: 
    }
}

// Button Animation
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
};