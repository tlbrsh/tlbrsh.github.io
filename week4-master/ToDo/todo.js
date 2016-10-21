
$(function() {

  $("button.btn.btn-danger").on("click", function(event) {
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    elementThatWasClicked.parent().remove();
  })


})
