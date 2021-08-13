const lastStory = document.getElementsByClassName("story")[3];
const thirdStory = document.getElementsByClassName("story")[2];
const secondStory = document.getElementsByClassName("story")[1];
const firstStory = document.getElementsByClassName("story")[0];

const nextButton = document.getElementsByClassName("story")[3].childNodes[5];

const storyContainer = document.getElementsByClassName("story");
// lastStory.removeChild(lastStory.childNodes[5]);

// firstStory.appendChild(nextButton);

// console.log(lastStory.style);

function responsive645(x) {
  if (x.matches && thirdStory.hasChildNodes(nextButton)) {
    // If media query matches
    thirdStory.appendChild(nextButton);
    // lastStory.style.display = none;
  } else {
    thirdStory.removeChild(nextButton);
  }
}

function responsive525(x) {
  if (x.matches && secondStory.hasChildNodes(nextButton)) {
    // If media query matches
    secondStory.appendChild(nextButton);
  } else {
    secondStory.removeChild(nextButton);
  }
}

function responsive405(x) {
  if (x.matches && firstStory.hasChildNodes(nextButton)) {
    // If media query matches
    firstStory.appendChild(nextButton);
  } else {
    firstStory.removeChild(nextButton);
  }
}

var maxWidth645 = window.matchMedia("(max-width: 645px)");
var maxWidth525 = window.matchMedia("(max-width: 525px)");
var maxWidth405 = window.matchMedia("(max-width: 405px)");
responsive645(maxWidth645);
responsive525(maxWidth525);
responsive405(maxWidth405);

// $(window).resize(function () {
//   var width = $(window).width();
//   console.log(width);
// });
