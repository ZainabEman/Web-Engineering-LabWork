// script.js

$(document).ready(function() {
    var currentIndex = 0;
    var images = $(".slider-image");
    var totalImages = images.length;
  
    // Function to display the image at the given index using fade transitions
    function showImage(index) {
      images.filter(":visible").fadeOut(300, function() {
        images.eq(index).fadeIn(300);
      });
    }
    $("#nextBtn").click(function() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    });
  
    // Previous button click event
    $("#prevBtn").click(function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    });
  });
  