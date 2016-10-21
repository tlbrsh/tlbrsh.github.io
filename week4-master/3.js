// This code runs when the page loads
$(function() {

  // Create an object that represents your social profile
  // Create two methods on this object:
  // 1. Write a short message to the console which displays how many friends you have (this.friends.length)
  // 2. Create an alert that displays your current status (this.status)
  var Tal = {
    name: "Tal",
    location: "Evanston, IL",
    status: "Mediocare student",
    friends: ["1", "2", "3"],
    logNumberOfFriends: function() {
      console.log(this.friends.length)
    },
    alertCurrentStatus: function() {
      window.alert(this.status)
    }
  }

  // Use the two methods here
  Tal.logNumberOfFriends()
  Tal.alertCurrentStatus()

})
