var TotalButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < TotalButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    ele = this.innerHTML;
    makeSound(ele);
    makeAnimate(ele);
  });
}
document.addEventListener("keypress", function (event) {
  var pk = event.key;
  makeSound(pk);
  makeAnimate(pk);
});
function makeSound(ha) {
  if (ha == "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if (ha == "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  if (ha == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  if (ha == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  if (ha == "j") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  if (ha == "k") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if (ha == "l") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}
function makeAnimate(val) {
  var activebut = document.querySelector("." + val);
  activebut.classList.add("pressed");
  setTimeout(function () {
    activebut.classList.remove("pressed");
  }, 200);
}
