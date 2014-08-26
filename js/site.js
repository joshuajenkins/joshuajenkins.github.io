var monies = ['$', '¥', '£', '€'];
var real = 'oshua Jenkins';

function beTrashy() {
  var el = document.getElementById('name');
  var text = el.innerText;
  var rando = Math.floor(Math.random() * text.length);
  var currRando = monies[Math.floor(Math.random() * monies.length)];

  if (monies.indexOf(text.charAt(rando)) == -1) {
    var newText = text.substr(0, rando) + currRando + text.substr(rando+1);
  } else {
    var newText = text.substr(0, rando) + real.charAt(rando) + text.substr(rando+1);
  }
  el['innerText'] = newText;
}

// Works in not IE
document.addEventListener("DOMContentLoaded", function() {
  window.setInterval(beTrashy, 1000);
});