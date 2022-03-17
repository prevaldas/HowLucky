// INTRO with guest name.
var yourName = prompt("Your name is: ");
var firstCharacter = yourName.slice(0, 1).toUpperCase();
var restCharacters = yourName.slice(1, yourName.length);
var capitalizedName = firstCharacter + restCharacters;
alert("Hello, " + capitalizedName + ". Find out if today is your lucky day.");



// Lucky number.
var n = Math.random();
n = n * 100;
n = Math.round(n) + 1;
if (n >= 50) {
  document.querySelector("h1").innerHTML = capitalizedName + ", your day is " + n + "% lucky! Buy a lottery ticket today.";
} else {
  document.querySelector("h1").innerHTML = capitalizedName + ", your day is " + n + "% lucky! Don't buy any lottery tickets.";
}

//DETECTING BUTTON PRESS ON THE PAGE

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  });
}

//DETECTING COMPUTER KEYBOARD PRESS

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {

    case "z":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "x":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play()
      break;

    case "c":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;


    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
