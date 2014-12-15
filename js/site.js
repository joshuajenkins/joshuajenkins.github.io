function beTrashy() {
  var el = document.getElementsByClassName('js-name')[0];
  var text = el.innerText;
  var rando = Math.floor(Math.random() * text.length);

  if (rando == 2 || rando == 13) {
    var newChar = (text.charAt(rando) == '$') ? 's' : '$';
  } else if (rando == 0 || rando == 7) {
    var newChar = (text.charAt(rando) == '¥' ? 'J' : '¥');
  } else if (rando == 8) {
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

var els = document.getElementsByClassName('js-hidden');
document.getElementsByClassName('js-toggle')[0].addEventListener('click', function(e) {
  document.getElementsByClassName('js-toggle')[0].remove();
  e.preventDefault();
  $('.js-hidden').removeClass('js-hidden');
});