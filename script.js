for (var i = 0; i < document.querySelectorAll(".d").length; i++) {

  document.querySelectorAll(".d")[i].addEventListener("click", function() {

    var pressedbutton = this.innerHTML;

    buttonpressed(pressedbutton);

    PressedAnimation(pressedbutton);
  })
};

document.addEventListener("keypress", function(event) {

  buttonpressed(event.key);

  PressedAnimation(event.key);
});

function buttonpressed(key) {

  switch (key) {
    case "w":
      var w = new Audio("https://cdn.glitch.com/5e2b2635-bc52-4776-8608-bdab4e7ec963%2Fdog_sms.mp3?v=1619955936820");
      w.play();
      break;

    case "a":
      var a = new Audio("https://cdn.glitch.com/5e2b2635-bc52-4776-8608-bdab4e7ec963%2FCrow%20Message%20Tone.mp3?v=1619955988451");
      a.play();
      break;

    case "s":
      var s = new Audio("https://cdn.glitch.com/5e2b2635-bc52-4776-8608-bdab4e7ec963%2FRooster%20Sms.mp3?v=1619960681310");
      s.play();
      break;

    case "d":
      var d = new Audio("https://cdn.glitch.com/5e2b2635-bc52-4776-8608-bdab4e7ec963%2Fcow-30021.mp3?v=1619960690631");
      d.play();
      break;

    case "j":
      var j = new Audio("https://cdn.glitch.com/5e2b2635-bc52-4776-8608-bdab4e7ec963%2FCat-Sound.mp3?v=1619960704463");
      j.play();
      break;


    case "k":
      var k = new Audio("https://cdn.glitch.com/5e2b2635-bc52-4776-8608-bdab4e7ec963%2Fsnakehiss-1.mp3?v=1619960763033");
      k.play();
      break;

    default:
      console.log(key);

  }
};

function PressedAnimation(currentbutton) {
  var activebutton = document.querySelector("." + currentbutton);
  activebutton.classList.add("pressed");

  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
}
