$(function(){
  $("#search").on('click', function(){
    // console.log($('#movieName').val());
    var movieSearch = $('#movieName').val();
    $.get('https://www.omdbapi.com/?s="'+movieSearch+'"&apikey=97afd53d', function(data, status) {
      console.log(data);
      results = data;
      $('#movieResults').html('');
      for(i = 0; i < results.Search.length; i++) {
        $('#movieResults').append('<p>' + results.Search[i].Title + '<button class="btn btn-secondary" onclick="getData(\''+results.Search[i].imdbID+'\')">View Details</button></p>');
      }
    });
    // http://www.omdbapi.com/?s="movie title here"&apikey=97afd53d
  });



});

function getData(id) {
  console.log(id);
  $.get('https://www.omdbapi.com/?i='+id+'&apikey=97afd53d&plot=full', function(data, status) {
    console.log(data);
    movieDetails = data;
    $('#movieDetails').html('<h2>'+movieDetails.Title+'</h2>');
    $('#movieDetails').append('<img src="'+movieDetails.Poster+'">');
    $('#movieDetails').append('<h3>'+movieDetails.Year+'</h3>');
    $('#movieDetails').append('<p>'+movieDetails.Plot+'</p>');
  });
}
