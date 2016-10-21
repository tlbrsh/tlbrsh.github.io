// shuffles (randomizes an array)
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}
// returns a deck of cards
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
$(function() {
  $(".deal").on("click", function(event) {
    event.preventDefault()
    var cards =getDeck();
    cards.shuffle();
    $("#c1").attr("src", "http://golearntocode.com/images/cards/" + cards[0] + ".png")
    $("#c2").attr("src", "http://golearntocode.com/images/cards/" + cards[1] + ".png")
    $("#c3").attr("src", "http://golearntocode.com/images/cards/" + cards[2] + ".png")
    $("#c4").attr("src", "http://golearntocode.com/images/cards/" + cards[3] + ".png")
    $("#c5").attr("src", "http://golearntocode.com/images/cards/" + cards[4] + ".png")
  })

})
