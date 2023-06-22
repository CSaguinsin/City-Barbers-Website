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