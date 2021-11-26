// Write your JavaScript code here!
//use:  preventDefault()
window.addEventListener("load", function() {

 /*  let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })   */

//22:40 comments on adding validation: are already inside of a window loadevent listener^^^
//bellow selects form and listens for the submit  button event
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    //validate 4 form inputs with dom and conditionals
   //call form submission function to do that
//   define variables with element values on this page
   
   
   
    alert("submit clicked");

});
   


});

