$(document).read(){


     var endPoint = 'https://api.giphy.com/v1/gifs/search?';
     var apiKey = 'api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9';
     var search = '&q=Ireland&limit=100';

     var queryURL = endPoint + apiKey + search;

     var req = {
          url: queryURL,
          method: 'GET'
     };

}