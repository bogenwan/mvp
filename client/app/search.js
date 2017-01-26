$(document).ready(function() {

var searchYelp = (searchOption, callback) => {
  var url = 'http://127.0.0.1:3000/search';
  //var url = 'https://api.yelp.com/v3/businesses/search'
console.log(searchOption)
  // var queryObj = {
  //   location: 'location' +'',
  //   rating: 'rating',
  //   price: 'string',
  //   limit: 5,
  //   access_token: this.api.apiToken
  // };

  $.get(url, searchOption, function(data) {
    callback(data)
    console.log(data);
  });
//   $.ajax({
//   type: "GET",
//   beforeSend: function(request) {
//     request.setRequestHeader("Authorization", window.api.apiToken);
//   },
//   url: "url",
//   data: searchOption,
//   success: function(data) {
//     console.log(data);
//   }
// });

}

window.searchYelp = searchYelp;
});