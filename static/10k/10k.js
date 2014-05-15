var processResults = function(birthdate) {
  var a = birthdate.add('days', 10000);
  var b = moment();
  var delta = parseInt(a.diff(b, 'days')) + 1;
  var formattedDate = b.add('days', delta).format('MMMM Do, YYYY');

  if (delta > 0) {
    $('#module-10k .results').html('<p>Your 10,000th day is on ' + formattedDate + '.<br>Only ' + delta + ' days to go.</p>');
  } else if (delta < 0) {
    $('#module-10k .results').html('<p>Your 10,000th day was on ' + formattedDate + '.</p>');
  } else {
    $('#module-10k .results').html('<p>Your 10,000th day is today!<br>You should probably reflect.</p>');
  }
};

$(document).ready(function() {
  var picker = new Pikaday({
    field: $('#datepicker')[0],
    minDate: moment("1900", "YYYY").toDate(),
    maxDate: moment().toDate(),
    yearRange: 100,
    format: 'MMMM Do, YYYY',
    position: 'bottom',
    onSelect: function() {
      var result = this.getMoment();
      processResults(result);
    }
  });
});