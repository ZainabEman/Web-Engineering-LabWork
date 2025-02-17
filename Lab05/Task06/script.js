$(document).ready(function(){
    $("#toggleCheckbox").change(function(){
      if($(this).is(":checked")){
        $("#password").prop("type", "text");
      } else {
        $("#password").prop("type", "password");
      }
    });
  });
  