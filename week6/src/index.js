// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
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
// e.g. getDeck()
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
// END OF STUFF TO NOT MODIFY

var Header = React.createClass({
  render: function() {
    return(
      <div className="col-sm-12">
        <h1>Welcome to the KIEI-924 Casino!</h1>
      </div>
    )
  }
})

var App = React.createClass({

  deal: function(cards,e){
    cards.shuffle()
    this.forceUpdate()
  },


  render: function() {

    var cards = window.getDeck();
    cards.shuffle()
    let shuffle = this.deal.bind(this, cards);

    return (

      <div>
        <Header />
        <div className="row">
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + cards[0]+ ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + cards[1]+ ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + cards[2]+ ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + cards[3]+ ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + cards[4]+ ".png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><a href="#" onClick={shuffle} className="btn btn-success">Deal</a></h1>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
