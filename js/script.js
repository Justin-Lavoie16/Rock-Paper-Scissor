if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-02-JS/sw.js", {
    scope: "/Unit-5-02-JS/",
  })
}

"use strict"


const random = Math.floor(Math.random() * 3) + 1

function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */

function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash1").checked

  if (random == 1 ) {
    document.getElementById("hello-world").innerHTML =
    "The computer choose rock: " + "!"
  } else if (random == 2) {
    document.getElementById("hello-world").innerHTML =
    "The computer choose paper: " + "!"
    } else if (random == 3) {
    document.getElementById("hello-world").innerHTML =
      "The computer choose Scissors: " + "!"
  }
}
function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash2").checked

  if (random == 1 ) {
    document.getElementById("hello-world").innerHTML =
    "The computer choose rock: " + "!"
  } else if (random == 2) {
    document.getElementById("hello-world").innerHTML =
    "The computer choose paper: " + "!"
    } else if (random == 3) {
    document.getElementById("hello-world").innerHTML =
      "The computer choose Scissors: " + "!"
  }
}
function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash3").checked

  if (random == 1 ) {
    document.getElementById("hello-world").innerHTML =
    "The computer choose rock: " + "!"
  } else if (random == 2) {
    document.getElementById("hello-world").innerHTML =
    "The computer choose paper: " + "!"
    } else if (random == 3) {
    document.getElementById("hello-world").innerHTML =
      "The computer choose Scissors: " + "!"
  }
}
