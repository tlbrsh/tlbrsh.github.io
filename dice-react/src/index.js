var React = require('react')
var ReactDOM = require('react-dom')

// e.g. getRandomInt(1, 6)
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <div className="col-sm-4">
            <img src={"http://golearntocode.com/images/dice/3.png"} />
          </div>
          <div className="col-sm-4">
            <img src={"http://golearntocode.com/images/dice/4.png"} />
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
