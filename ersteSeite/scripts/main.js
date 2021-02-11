var myHeading = document.querySelector('h1');
myHeading.textContent = 'Nein';

document.querySelector('img').onclick = function() {
    alert('Hey! Nicht so viel klicken!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/bild01.png') {
      myImage.setAttribute ('src','bilder/bild03.png');
    } else {
      myImage.setAttribute ('src','bilder/bild01.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla ist cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Wilkommen Zurueck, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}