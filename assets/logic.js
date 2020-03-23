$(document).ready(function () {
     // my giphyApi including prefix and limit
     var giphyApi = "api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10"
   
     // setting up giphy queryURL variable with beginning of url
     var beginningURL = "https://api.giphy.com/v1/gifs/search?q=";
   
     // setting up array with strings for buttons
     var topics = ["office", "tired", "coffee", "yawn", "meeting", "bored", "passive aggressive", "emails", "late", "computer crash", "purell", "water cooler"];
   
     // empty variable for button added by user
     var newButton = "";
   


// setting up function to empty gifbuttons div and create buttons based on topics array.  Then calling it.
function fillButtons() {
     $("#gifbuttons").empty();
   for (i=0; i < topics.length; i++){
     $("#gifbuttons").append(`<button class="btn btn-light btn-sm ml-1 gifbutton" type="button" data-character="${topics[i]}">${topics[i]}</button>`);
     
   };
   
};
 
fillButtons();

// listen to form, add button
$("#submitbutton").on("click", function(event) {
  event.preventDefault();
  
  // put value from form in variable and log it
  newButton = $("#addbutton").val().trim();
     console.log(newButton);
     
          // push that variable into topics array and log it
          topics.push(newButton);
          console.log(topics);
          fillButtons();
          console.log(document.body);
               // function for button clicks, had to duplicate here for it to work after new buttons added.  Dont' know why.  Maybe a scoping issue.  Not very DRY. Will try to fix later.  Far indented whole thing so it's easier to pull out.
               $(".gifbutton").click(function(){
               var character = $(this).attr("data-character");
               queryURL = beginningURL+character+giphyApi;
               $.ajax({
               url: queryURL,
               method: "GET"
               }).then(function(response) {
               console.log(response);
               console.log(response.data);

});
