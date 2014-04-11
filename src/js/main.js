$(document).ready(function() {
  $('#play').magnificPopup({type:'iframe'});

  var i=0;
  $('#morph-dot').addClass('state-' + i);

  var triggerTransition = function(state) {
    var previous = state - 1;
    if (previous < 0) { previous = 4; }
    console.log('transitioning to state ' + state);
    $('#morph-dot').removeClass('state-' + previous);
    $('#morph-dot').addClass('state-' + state);
  };

  window.setInterval(function () {
    i++;
    triggerTransition(i%5);
  }, 5000);
});

