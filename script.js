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
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
let pilotName = document.getElementById('pilotName').value;
let copilotName = document.getElementById('copilotName').value;
let fuelLevel = document.getElementById('fuelLevel').value;
let cargoMass = document.getElementById('cargoMass').value;
let faultyItems = document.getElementById('faultyItems').value;
formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);

});
   
});