// API Docs at:
// https://developer.spotify.com/web-api/search-item/
var $userInput = $("#search-keyword");
var $form = $("#search");
var $results = $('#results');
// var $submitBtn = $("#submit-button");

$form.on('submit', function(event){
  event.preventDefault();

  var theInput = $userInput.val();
  var searchType = $('#search-type').val();
  $.ajax ({
      url: 'https://api.spotify.com/v1/search?q=' + theInput + '&type=' + searchType,

      success: function(response) {
        console.log(response)
        console.log(response.items)
        
        plural = searchType + 's';
        console.log(plural)

        response[plural].items.forEach( function(item){
          listItem = $("<li>"+ item.name  + "</li>");
          console.log(listItem);

          $results.append(listItem);
          console.log($results);

        })

      }
  })
});

//
// function searchByArtist(keyword) {
//   var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
//
// }
//
//
// function searchByTrack(keyword) {
//   var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
// }
