// document.querySelector("button").addEventListener("click", function (){
//   alert("Hello");
// });

// for(var i=0; i<document.querySelectorAll(".drum").length ;i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     this.style.color = 'white';
//   })
// }

//for(var i=0; i<document.querySelectorAll(".drum").length ;i++){
//document.querySelectorAll(".drum")[i].addEventListener("click", function(){
// if(i===1){
//   var tom1 = new Audio("sounds/tom-1.mp3");
//   tom1.play();
// }else if(i===2){
//   var tom2 = new Audio("sounds/tom-2.mp3");
//   tom2.play()
// }else{}

//You can get the element that triggred the event listener using the 'this' keyword.
//})
//}

// Function to make sound depending on the event

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {

	var activeButton = document.querySelector("." + currentKey);

	// Now we need to create a class called pressed to the activeButton when it is pressed.
  activeButton.classList.add("pressed");

  // We want the button to come back to its orignal state after a delay of say 0.2 seconds,
  setTimeout(function() {
	  activeButton.classList.remove("pressed");
    }, 100);
}


//Detect Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  })
}


// Detect Keyboard Press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


// The syntax to play audio with js

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
