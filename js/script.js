$(document).ready(function() {
  $('.nav-link').hover(
    function() {
      $(this).addClass('hovered');
    },
    function() {
      $(this).removeClass('hovered');
    }
  );
});

$(document).ready(function() {
  $('#myButton').click(function() {
    window.location.href = 'homeservice.html';
  });
});

$(document).ready(function() {
  $('#mysecondButton').click(function() {
    window.location.href = 'rebond.html';
  });
});

$(document).ready(function() {
  $('#mythirdButton').click(function() {
    window.location.href = 'haircut.html';
  });
});

