var randomNumber = Math.floor(Math.random()*10)+1;
var counter = 0;

function show(getName) {
  $("#toolow").hide();
  $("#toohigh").hide();
  $("#correct").hide();
  $("#defeat").hide();
  $("#startoverbutton").hide();
  $("#startover").hide();
  $("#" + getName ).show();
}

$( "#submit" ).click(function() {


  var guess = $("#guess").val();

  if (counter === 2) {
    show("defeat");
    $("#submit").hide();
    $("#startoverbutton").show();
    $( "#startoverbutton" ).click(function() {
      location.reload();
    });
  }

else if (guess < randomNumber) {
    show("toolow");
    counter = counter + 1;
  }

  else if (guess > randomNumber) {
    show("toohigh");
    counter = counter + 1;

  }
  else {
    show("correct");
  }
});
show();
