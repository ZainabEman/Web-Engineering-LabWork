$(document).ready(function() {
    $("#myForm").submit(function(e) {
      e.preventDefault();
      $("#message").text("");
      var name = $("#name").val().trim();
      var email = $("#email").val().trim();
      var password = $("#password").val().trim();
      if (name === "" || email === "" || password === "") {
        alert("All fields are required! Please fill in all the fields.");
        return;
      }
      if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address that contains '@' and '.'.");
        return;
      }
      $("#message").text("Success! Your form has been submitted.");
    });
  });
  