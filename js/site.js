function beTrashy() {
  var real = 'oshua Jenkins';
  var el = document.getElementById('name');
  var text = el.innerText;
  var rando = Math.floor(Math.random() * (text.length));
  if (text.charAt(rando) != '$') {
    var newText = text.substr(0, rando) + '$' + text.substr(rando+1);
  } else {
    var newText = text.substr(0, rando) + real.charAt(rando) + text.substr(rando+1);
  }
  el['innerText'] = newText;
}

// Works in not IE
document.addEventListener("DOMContentLoaded", function() {
  window.setInterval(beTrashy, 400);
});