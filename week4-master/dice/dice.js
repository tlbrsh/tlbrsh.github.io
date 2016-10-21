// get a random integer between 1 and 6 - getRandomInt(1, 6)
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  $(".roll").on("click", function (event) {
    event.preventDefault()
    var d1 = getRandomInt(1,6)
    var d2 = getRandomInt(1,6)
    $("#d1").attr("src", "http://golearntocode.com/images/dice/" + d1 + ".png")
    $("#d2").attr("src", "http://golearntocode.com/images/dice/" + d2 + ".png")
  })
})
