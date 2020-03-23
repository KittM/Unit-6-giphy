$(document).ready(function () {
     // my giphyApi including prefix and limit
     var giphyApi = "api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10"
   
     // setting up giphy queryURL variable with beginning of url
     var beginningURL = "https://api.giphy.com/v1/gifs/search?q=";
   
     // setting up array with strings for buttons
     var topics = ["office", "tired", "coffee", "yawn", "meeting", "bored", "passive aggressive", "emails", "late", "computer crash", "purell", "water cooler"];
   
     // empty variable for button added by user
     var newButton = "";
   
});

// setting up function to empty gifbuttons div and create buttons based on topics array.  Then calling it.
function fillButtons() {
     $("#gifbuttons").empty();
   for (i=0; i < topics.length; i++){
     $("#gifbuttons").append(`<button class="btn btn-light btn-sm ml-1 gifbutton" type="button" data-character="${topics[i]}">${topics[i]}</button>`);
     
   };
   
};
 
