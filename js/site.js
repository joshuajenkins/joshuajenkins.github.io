var monies = ['$', '¥', '£', '€'];
var real = 'oshua Jenkins';

function beTrashy() {
  var el = document.getElementById('name');
  var text = el.innerText;
  var rando = Math.floor(Math.random() * text.length);
  var currRando = monies[Math.floor(Math.random() * monies.length)];

  // if (monies.indexOf(text.charAt(rando)) == -1) {
  //   var newText = text.substr(0, rando) + currRando + text.substr(rando+1);
  // } else {
  //   var newText = text.substr(0, rando) + real.charAt(rando) + text.substr(rando+1);
  // }

  if (rando == 1 || rando == 12) {
    var newChar = (text.charAt(rando) == '$') ? 's' : '$';
  } else if (rando == 6) {
    var newChar = (text.charAt(rando) == '¥' ? 'J' : '¥');
  } else if (rando == 7) {
    var newChar = (text.charAt(rando) == '€' ? 'e' : '€');
  }

  if (newChar) {
    el['innerText'] = text.substr(0, rando) + newChar + text.substr(rando+1);
  }
}

// Works in not IE
document.addEventListener("DOMContentLoaded", function() {
  window.setInterval(beTrashy, 400);
});