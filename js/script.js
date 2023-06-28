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
    window.location.href = 'homeservice.html';
  });
});

$(document).ready(function() {
  $('#mythirdButton').click(function() {
    window.location.href = 'homeservice.html';
  });
});


   // Text to be displayed with typing effect
   const text = "WHERE TO FIND US?";

   // Delay between each character (in milliseconds)
   const typingSpeed = 100;
 
   // Get the text container element
   const textContainer = document.querySelector(".secondheader");
 
   // Function to display text with typing effect
   function typeText() {
     let index = 0;
     const intervalId = setInterval(() => {
       textContainer.textContent += text[index];
       index++;
 
       if (index === text.length) {
         clearInterval(intervalId);
         setTimeout(() => {
           textContainer.textContent = ""; // Clear the text
           typeText(); // Call the function again to start the loop
         }, 2000); // Delay before starting the loop again (in milliseconds)
       }
     }, typingSpeed);
   }
 